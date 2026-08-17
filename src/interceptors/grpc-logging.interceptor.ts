import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AppLogger } from '../logger/app.logger';

@Injectable()
export class GrpcLoggingInterceptor implements NestInterceptor {
  constructor(
    private readonly logger: AppLogger,
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<unknown> {
    const startedAt = Date.now();

    const method =
      context.getHandler()?.name ?? 'unknown';

    const service =
      context.getClass()?.name ?? 'unknown';

    this.logger.log(
      `gRPC request started: ${service}.${method}`,
      'GrpcLoggingInterceptor',
    );

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - startedAt;

        this.logger.log(
          `gRPC request completed: ${service}.${method} (${duration}ms)`,
          'GrpcLoggingInterceptor',
        );
      }),

      catchError((error: unknown) => {
        const duration = Date.now() - startedAt;

        this.logger.error(
          `gRPC request failed: ${service}.${method} (${duration}ms)`,
          error instanceof Error
            ? error.stack
            : String(error),
          'GrpcLoggingInterceptor',
        );

        return throwError(() => error);
      }),
    );
  }
}