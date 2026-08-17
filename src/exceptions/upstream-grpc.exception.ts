import { status as GrpcStatus } from '@grpc/grpc-js';

export class UpstreamGrpcException extends Error {
constructor(
public readonly grpcCode: GrpcStatus,
message: string,
public readonly source: string,
) {
super(message);
this.name = 'UpstreamGrpcException';
}
}
