import { status as GrpcStatus } from '@grpc/grpc-js';
import {
firstValueFrom,
Observable,
timeout,
TimeoutError,
} from 'rxjs';

import { UpstreamGrpcException } from '../exceptions/upstream-grpc.exception';

interface GrpcErrorLike {
code?: number;
details?: string;
message?: string;
}

/**

* Executes a gRPC client call, applies a timeout, and converts
* gRPC/client-side failures into UpstreamGrpcException.
*
* The generated ts-proto client returns Observable<T>.
* This utility converts it into Promise<T> so the service layer
* can use the normal async/await pattern.
  */
  export async function callGrpc<T>(
  source$: Observable<T>,
  options: {
  source: string;
  timeoutMs: number;
  },
  ): Promise<T> {
  try {
  return await firstValueFrom(
  source$.pipe(timeout(options.timeoutMs)),
  );
  } catch (error) {
  if (error instanceof TimeoutError) {
     console.log('========== RAW gRPC ERROR ==========');
  console.log('error:', error);
  console.log('code:', (error as any)?.code);
  console.log('details:', (error as any)?.details);
  console.log('message:', (error as any)?.message);
  console.log('====================================');
  throw new UpstreamGrpcException(
  GrpcStatus.DEADLINE_EXCEEDED,
  `${options.source} did not respond within ${options.timeoutMs}ms`,
  options.source,
  );
  }

  const grpcError = error as GrpcErrorLike;

  throw new UpstreamGrpcException(
  grpcError.code ?? GrpcStatus.UNKNOWN,
  grpcError.details ??
  grpcError.message ??
  'Unknown upstream error',
  options.source,
  );
  }
  }
