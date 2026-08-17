"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcController = GrpcController;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
function GrpcController(serviceName) {
    return (target) => {
        (0, common_1.Controller)()(target);
        const methods = Object.getOwnPropertyNames(target.prototype).filter((method) => method !== 'constructor');
        methods.forEach((method) => {
            const descriptor = Object.getOwnPropertyDescriptor(target.prototype, method);
            if (descriptor) {
                (0, microservices_1.GrpcMethod)(serviceName)(target.prototype, method, descriptor);
            }
        });
    };
}
//# sourceMappingURL=grpc-controller.decorator.js.map