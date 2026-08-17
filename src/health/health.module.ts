import {  Module } from '@nestjs/common';
import { HealthGrpcController } from './health.grpc.controller';
import { HealthService } from './health.service';

@Module({
  controllers: [
    HealthGrpcController,
  ],

  providers: [
    HealthService,
  ],

  exports: [
    HealthService,
  ],
})
export class HealthModule {}