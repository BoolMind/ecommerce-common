import { GrpcController } from '../decorators';

import {
  HealthCheckRequest,
  HealthCheckResponse,
  HealthServiceController,
  HealthServiceControllerMethods,
} from '@ecommerce/contracts/generated/ecommerce/common/v1/health';

import { HealthService } from './health.service';

@HealthServiceControllerMethods()
export class HealthGrpcController implements HealthServiceController {
  constructor(private readonly healthService: HealthService) {}

  async check(request: HealthCheckRequest): Promise<HealthCheckResponse> {
    return this.healthService.check(request);
  }
}