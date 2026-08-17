"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callGrpc = callGrpc;
const grpc_js_1 = require("@grpc/grpc-js");
const rxjs_1 = require("rxjs");
const upstream_grpc_exception_1 = require("../exceptions/upstream-grpc.exception");
async function callGrpc(source$, options) {
    try {
        return await (0, rxjs_1.firstValueFrom)(source$.pipe((0, rxjs_1.timeout)(options.timeoutMs)));
    }
    catch (error) {
        if (error instanceof rxjs_1.TimeoutError) {
            console.log('========== RAW gRPC ERROR ==========');
            console.log('error:', error);
            console.log('code:', error?.code);
            console.log('details:', error?.details);
            console.log('message:', error?.message);
            console.log('====================================');
            throw new upstream_grpc_exception_1.UpstreamGrpcException(grpc_js_1.status.DEADLINE_EXCEEDED, `${options.source} did not respond within ${options.timeoutMs}ms`, options.source);
        }
        const grpcError = error;
        throw new upstream_grpc_exception_1.UpstreamGrpcException(grpcError.code ?? grpc_js_1.status.UNKNOWN, grpcError.details ??
            grpcError.message ??
            'Unknown upstream error', options.source);
    }
}
//# sourceMappingURL=grpc-call.util.js.map