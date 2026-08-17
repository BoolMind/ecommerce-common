import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import {
  HealthCheckRequest,
  HealthCheckResponse,
  HealthCheckResponse_ServingStatus,
} from '@ecommerce/contracts/generated/ecommerce/common/v1/health';

@Injectable()
export class HealthService {
  constructor(
    private readonly dataSource: DataSource,
  ) {}

  async check(
    _request: HealthCheckRequest,
  ): Promise<HealthCheckResponse> {
    if (!this.dataSource.isInitialized) {
      return {
        status:
          HealthCheckResponse_ServingStatus.NOT_SERVING,
      };
    }

    try {
      await this.dataSource.query('SELECT 1');

      return {
        status:
          HealthCheckResponse_ServingStatus.SERVING,
      };
    } catch {
      return {
        status:
          HealthCheckResponse_ServingStatus.NOT_SERVING,
      };
    }
  }
}