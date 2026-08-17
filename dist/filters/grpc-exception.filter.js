"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GrpcExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const grpc_js_1 = require("@grpc/grpc-js");
const rxjs_1 = require("rxjs");
const exceptions_1 = require("../exceptions");
const constants_1 = require("../constants");
let GrpcExceptionFilter = GrpcExceptionFilter_1 = class GrpcExceptionFilter {
    logger = new common_1.Logger(GrpcExceptionFilter_1.name);
    catch(exception, _host) {
        if (exception instanceof microservices_1.RpcException) {
            return (0, rxjs_1.throwError)(() => exception.getError());
        }
        if (exception instanceof exceptions_1.UpstreamGrpcException) {
            this.logger.error(`Upstream gRPC error from ${exception.source}: ` +
                `code=${exception.grpcCode}, ` +
                `message=${exception.message}`);
            return (0, rxjs_1.throwError)(() => ({
                code: exception.grpcCode,
                message: exception.message,
            }));
        }
        if (exception instanceof exceptions_1.DomainException) {
            const grpcCode = this.resolveStatus(exception);
            this.logger.error(`Domain exception: ${exception.constructor.name}, ` +
                `code=${exception.code}, ` +
                `grpcCode=${grpcCode}, ` +
                `message=${exception.message}`);
            return (0, rxjs_1.throwError)(() => ({
                code: grpcCode,
                message: exception.message,
            }));
        }
        this.logger.error(exception instanceof Error
            ? exception.message
            : 'Unknown error occurred', exception instanceof Error
            ? exception.stack
            : undefined);
        return (0, rxjs_1.throwError)(() => ({
            code: grpc_js_1.status.INTERNAL,
            message: 'Internal server error.',
        }));
    }
    resolveStatus(exception) {
        const match = constants_1.GRPC_STATUS_MAPPING.find((entry) => exception instanceof entry.exception);
        return match?.status ?? grpc_js_1.status.INTERNAL;
    }
};
exports.GrpcExceptionFilter = GrpcExceptionFilter;
exports.GrpcExceptionFilter = GrpcExceptionFilter = GrpcExceptionFilter_1 = __decorate([
    (0, common_1.Catch)()
], GrpcExceptionFilter);
//# sourceMappingURL=grpc-exception.filter.js.map