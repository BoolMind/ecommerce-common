"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRPC_STATUS_MAPPING = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const exceptions_1 = require("../exceptions");
exports.GRPC_STATUS_MAPPING = [
    { exception: exceptions_1.NotFoundExceptionBase, status: grpc_js_1.status.NOT_FOUND },
    { exception: exceptions_1.AlreadyExistsExceptionBase, status: grpc_js_1.status.ALREADY_EXISTS },
    { exception: exceptions_1.ValidationExceptionBase, status: grpc_js_1.status.INVALID_ARGUMENT },
    { exception: exceptions_1.ConflictExceptionBase, status: grpc_js_1.status.FAILED_PRECONDITION },
];
//# sourceMappingURL=grpc-status-map.constant.js.map