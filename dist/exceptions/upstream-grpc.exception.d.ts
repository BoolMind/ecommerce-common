import { status as GrpcStatus } from '@grpc/grpc-js';
export declare class UpstreamGrpcException extends Error {
    readonly grpcCode: GrpcStatus;
    readonly source: string;
    constructor(grpcCode: GrpcStatus, message: string, source: string);
}
