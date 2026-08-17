import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { Observable, throwError } from 'rxjs';

import {
  fromJson,
  type Message,
} from '@bufbuild/protobuf';

import { createValidator } from '@bufbuild/protovalidate';

import { getDescriptorRegistry } from '../validation/descriptor-registry';
import {
  GRPC_VALIDATE_MESSAGE_TYPE,
} from '../decorators/validate-grpc.decorator';

const validator = createValidator();

@Injectable()
export class GrpcValidationInterceptor
  implements NestInterceptor
{
  constructor(
    private readonly reflector: Reflector,
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<unknown> {
    
    const messageFullName =
      this.reflector.get<string>(
        GRPC_VALIDATE_MESSAGE_TYPE,
        context.getHandler(),
      );
    if (!messageFullName) {
      return next.handle();
    }


    const descriptorRegistry =
      getDescriptorRegistry();

    const messageDescriptor =
      descriptorRegistry.getMessage(
        messageFullName,
      );

    
    if (!messageDescriptor) {
      return throwError(
        () =>
          new RpcException({
            code: status.INTERNAL,
            message:
              `No protobuf descriptor found for "${messageFullName}".`,
          }),
      );
    }

    const requestData =
      context.switchToRpc().getData();

  
    let message: Message<string>;

    try {
      message = fromJson(
        messageDescriptor,
        requestData,
        {
          ignoreUnknownFields: true,
        },
      );
    } catch (error) {
      return throwError(
        () =>
          new RpcException({
            code: status.INVALID_ARGUMENT,
            message:
              `Malformed request for ${messageFullName}: ${
                error instanceof Error
                  ? error.message
                  : 'Unknown error'
              }`,
          }),
      );
    }

    const result = validator.validate(
      messageDescriptor,
      message,
    );

    if (result.kind === 'valid') {
      return next.handle();
    }

    if (result.kind === 'error') {
      return throwError(
        () =>
          new RpcException({
            code: status.INTERNAL,
            message:
              `Validation failed to execute for ${messageFullName}: ${
                result.error instanceof Error
                  ? result.error.message
                  : 'Unknown validation error'
              }`,
          }),
      );
    }

    const details = result.violations
      .map((violation) => {
        const field =
          violation.field?.toString() ||
          'field';

        const message =
          violation.message ||
          'Invalid value';

        return `${field}: ${message}`;
      })
      .join('; ');

    return throwError(
      () =>
        new RpcException({
          code: status.INVALID_ARGUMENT,
          message:
            details ||
            'Request validation failed.',
        }),
    );
  }
}