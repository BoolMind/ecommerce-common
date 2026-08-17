"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpstreamGrpcException = void 0;
class UpstreamGrpcException extends Error {
    grpcCode;
    source;
    constructor(grpcCode, message, source) {
        super(message);
        this.grpcCode = grpcCode;
        this.source = source;
        this.name = 'UpstreamGrpcException';
    }
}
exports.UpstreamGrpcException = UpstreamGrpcException;
//# sourceMappingURL=upstream-grpc.exception.js.map