import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import type { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "ecommerce.common.v1";
export interface HealthCheckRequest {
}
export interface HealthCheckResponse {
    status: HealthCheckResponse_ServingStatus;
}
export declare enum HealthCheckResponse_ServingStatus {
    SERVING_STATUS_UNSPECIFIED = 0,
    SERVING = 1,
    NOT_SERVING = 2,
    UNRECOGNIZED = -1
}
export declare const ECOMMERCE_COMMON_V1_PACKAGE_NAME = "ecommerce.common.v1";
export declare const HealthCheckRequest: MessageFns<HealthCheckRequest>;
export declare const HealthCheckResponse: MessageFns<HealthCheckResponse>;
export interface HealthServiceClient {
    check(request: HealthCheckRequest, metadata?: Metadata): Observable<HealthCheckResponse>;
}
export interface HealthServiceController {
    check(request: HealthCheckRequest, metadata?: Metadata): Promise<HealthCheckResponse> | Observable<HealthCheckResponse> | HealthCheckResponse;
}
export declare function HealthServiceControllerMethods(): (constructor: Function) => void;
export declare const HEALTH_SERVICE_NAME = "HealthService";
export interface HealthService {
    check(request: HealthCheckRequest, metadata?: Metadata): Promise<HealthCheckResponse>;
}
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}
