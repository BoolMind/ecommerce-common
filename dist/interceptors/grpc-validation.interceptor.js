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
exports.GrpcValidationInterceptor = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const grpc_js_1 = require("@grpc/grpc-js");
const rxjs_1 = require("rxjs");
const protobuf_1 = require("@bufbuild/protobuf");
const protovalidate_1 = require("@bufbuild/protovalidate");
const descriptor_registry_1 = require("../validation/descriptor-registry");
const validate_grpc_decorator_1 = require("../decorators/validate-grpc.decorator");
const validator = (0, protovalidate_1.createValidator)();
let GrpcValidationInterceptor = class GrpcValidationInterceptor {
    reflector;
    constructor(reflector) {
        this.reflector = reflector;
    }
    intercept(context, next) {
        const messageFullName = this.reflector.get(validate_grpc_decorator_1.GRPC_VALIDATE_MESSAGE_TYPE, context.getHandler());
        if (!messageFullName) {
            return next.handle();
        }
        const descriptorRegistry = (0, descriptor_registry_1.getDescriptorRegistry)();
        const messageDescriptor = descriptorRegistry.getMessage(messageFullName);
        if (!messageDescriptor) {
            return (0, rxjs_1.throwError)(() => new microservices_1.RpcException({
                code: grpc_js_1.status.INTERNAL,
                message: `No protobuf descriptor found for "${messageFullName}".`,
            }));
        }
        const requestData = context.switchToRpc().getData();
        let message;
        try {
            message = (0, protobuf_1.fromJson)(messageDescriptor, requestData, {
                ignoreUnknownFields: true,
            });
        }
        catch (error) {
            return (0, rxjs_1.throwError)(() => new microservices_1.RpcException({
                code: grpc_js_1.status.INVALID_ARGUMENT,
                message: `Malformed request for ${messageFullName}: ${error instanceof Error
                    ? error.message
                    : 'Unknown error'}`,
            }));
        }
        const result = validator.validate(messageDescriptor, message);
        if (result.kind === 'valid') {
            return next.handle();
        }
        if (result.kind === 'error') {
            return (0, rxjs_1.throwError)(() => new microservices_1.RpcException({
                code: grpc_js_1.status.INTERNAL,
                message: `Validation failed to execute for ${messageFullName}: ${result.error instanceof Error
                    ? result.error.message
                    : 'Unknown validation error'}`,
            }));
        }
        const details = result.violations
            .map((violation) => {
            const field = violation.field?.toString() ||
                'field';
            const message = violation.message ||
                'Invalid value';
            return `${field}: ${message}`;
        })
            .join('; ');
        return (0, rxjs_1.throwError)(() => new microservices_1.RpcException({
            code: grpc_js_1.status.INVALID_ARGUMENT,
            message: details ||
                'Request validation failed.',
        }));
    }
};
exports.GrpcValidationInterceptor = GrpcValidationInterceptor;
exports.GrpcValidationInterceptor = GrpcValidationInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], GrpcValidationInterceptor);
//# sourceMappingURL=grpc-validation.interceptor.js.map