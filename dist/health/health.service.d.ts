import { DataSource } from 'typeorm';
import { HealthCheckRequest, HealthCheckResponse } from '@ecommerce/contracts/generated/ecommerce/common/v1/health';
export declare class HealthService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    check(_request: HealthCheckRequest): Promise<HealthCheckResponse>;
}
