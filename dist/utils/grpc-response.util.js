"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGrpcDeleteResponse = toGrpcDeleteResponse;
exports.toGrpcPageMeta = toGrpcPageMeta;
function toGrpcDeleteResponse() {
    return { success: true };
}
function toGrpcPageMeta(meta) {
    return {
        page: meta.page,
        limit: meta.limit,
        totalItems: meta.totalItems,
        totalPages: meta.totalPages,
        hasNextPage: meta.hasNextPage,
        hasPreviousPage: meta.hasPreviousPage,
    };
}
//# sourceMappingURL=grpc-response.util.js.map