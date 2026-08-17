import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

export function GrpcController(serviceName: string): ClassDecorator {
  return (target: Function) => {
    Controller()(target);

    const methods = Object.getOwnPropertyNames(target.prototype).filter(
      (method) => method !== 'constructor',
    );

    methods.forEach((method) => {
      const descriptor = Object.getOwnPropertyDescriptor(
        target.prototype,
        method,
      );

      if (descriptor) {
        GrpcMethod(serviceName)(target.prototype, method, descriptor);
      }
    });
  };
}
