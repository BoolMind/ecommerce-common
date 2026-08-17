"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcLoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const app_logger_1 = require("../logger/app.logger");
let GrpcLoggingInterceptor = class GrpcLoggingInterceptor {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    intercept(context, next) {
        const startedAt = Date.now();
        const method = context.getHandler()?.name ?? 'unknown';
        const service = context.getClass()?.name ?? 'unknown';
        this.logger.log(`gRPC request started: ${service}.${method}`, 'GrpcLoggingInterceptor');
        return next.handle().pipe((0, operators_1.tap)(() => {
            const duration = Date.now() - startedAt;
            this.logger.log(`gRPC request completed: ${service}.${method} (${duration}ms)`, 'GrpcLoggingInterceptor');
        }), (0, operators_1.catchError)((error) => {
            const duration = Date.now() - startedAt;
            this.logger.error(`gRPC request failed: ${service}.${method} (${duration}ms)`, error instanceof Error
                ? error.stack
                : String(error), 'GrpcLoggingInterceptor');
            return (0, rxjs_1.throwError)(() => error);
        }));
    }
};
exports.GrpcLoggingInterceptor = GrpcLoggingInterceptor;
exports.GrpcLoggingInterceptor = GrpcLoggingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [app_logger_1.AppLogger])
], GrpcLoggingInterceptor);
//# sourceMappingURL=grpc-logging.interceptor.js.map