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
exports.HealthGrpcController = void 0;
const health_1 = require("@ecommerce/contracts/generated/ecommerce/common/v1/health");
const health_service_1 = require("./health.service");
let HealthGrpcController = class HealthGrpcController {
    healthService;
    constructor(healthService) {
        this.healthService = healthService;
    }
    async check(request) {
        return this.healthService.check(request);
    }
};
exports.HealthGrpcController = HealthGrpcController;
exports.HealthGrpcController = HealthGrpcController = __decorate([
    (0, health_1.HealthServiceControllerMethods)(),
    __metadata("design:paramtypes", [health_service_1.HealthService])
], HealthGrpcController);
//# sourceMappingURL=health.grpc.controller.js.map