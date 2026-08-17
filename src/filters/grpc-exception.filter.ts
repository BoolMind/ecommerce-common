import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  Logger,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { Observable, throwError } from 'rxjs';

import {
  DomainException,
  UpstreamGrpcException,
} from '../exceptions';
import { GRPC_STATUS_MAPPING } from '../constants';

@Catch()
export class GrpcExceptionFilter implements ExceptionFilter {
  private readonly logger =
    new Logger(GrpcExceptionFilter.name);

  catch(
    exception: unknown,
    _host: ArgumentsHost,
  ): Observable<never> {

    /**
     * Already a gRPC exception.
     * Return the underlying error so the gRPC transport
     * receives { code, message } directly.
     */
    if (exception instanceof RpcException) {
      return throwError(
        () => exception.getError(),
      );
    }

    /**
     * Error received from another gRPC service.
     */
    if (exception instanceof UpstreamGrpcException) {
      this.logger.error(
        `Upstream gRPC error from ${exception.source}: ` +
        `code=${exception.grpcCode}, ` +
        `message=${exception.message}`,
      );

      return throwError(
        () => ({
          code: exception.grpcCode,
          message: exception.message,
        }),
      );
    }

    /**
     * Application/domain exception.
     */
    if (exception instanceof DomainException) {
      const grpcCode =
        this.resolveStatus(exception);

      this.logger.error(
        `Domain exception: ${exception.constructor.name}, ` +
        `code=${exception.code}, ` +
        `grpcCode=${grpcCode}, ` +
        `message=${exception.message}`,
      );

      return throwError(
        () => ({
          code: grpcCode,
          message: exception.message,
        }),
      );
    }

    /**
     * Completely unexpected error.
     */
    this.logger.error(
      exception instanceof Error
        ? exception.message
        : 'Unknown error occurred',
      exception instanceof Error
        ? exception.stack
        : undefined,
    );

    return throwError(
      () => ({
        code: status.INTERNAL,
        message: 'Internal server error.',
      }),
    );
  }

  private resolveStatus(
    exception: DomainException<string>,
  ): status {
    const match =
      GRPC_STATUS_MAPPING.find(
        (entry) =>
          exception instanceof entry.exception,
      );

    return match?.status ?? status.INTERNAL;
  }
}