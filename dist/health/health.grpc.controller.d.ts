import { HealthCheckRequest, HealthCheckResponse, HealthServiceController } from '@ecommerce/contracts/generated/ecommerce/common/v1/health';
import { HealthService } from './health.service';
export declare class HealthGrpcController implements HealthServiceController {
    private readonly healthService;
    constructor(healthService: HealthService);
    check(request: HealthCheckRequest): Promise<HealthCheckResponse>;
}
