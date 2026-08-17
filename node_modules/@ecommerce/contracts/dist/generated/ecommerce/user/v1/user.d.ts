import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import type { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { PageMeta, SortOrder } from "../../common/v1/common";
export declare const protobufPackage = "ecommerce.user.v1";
export interface UserServiceCreateRequest {
    name: string;
    email: string;
}
export interface UserServiceGetByIdRequest {
    id: number;
}
export interface UserServiceUpdateRequest {
    id: number;
    name?: string | undefined;
    email?: string | undefined;
}
export interface UserServiceDeleteRequest {
    id: number;
}
export interface UserServiceRestoreRequest {
    id: number;
}
export interface UserServicePaginateRequest {
    page: number;
    limit: number;
    search?: string | undefined;
    orderBy?: string | undefined;
    order: SortOrder;
}
export interface UserServiceCreateResponse {
    user?: User | undefined;
}
export interface UserServiceGetByIdResponse {
    user?: User | undefined;
}
export interface UserServiceUpdateResponse {
    user?: User | undefined;
}
export interface UserServiceDeleteResponse {
    success: boolean;
}
export interface UserServiceRestoreResponse {
    user?: User | undefined;
}
export interface UserServicePaginateResponse {
    items: User[];
    meta?: PageMeta | undefined;
}
export interface User {
    id: number;
    name: string;
    email: string;
    createdAt?: Timestamp | undefined;
    updatedAt?: Timestamp | undefined;
}
export declare const ECOMMERCE_USER_V1_PACKAGE_NAME = "ecommerce.user.v1";
export declare const UserServiceCreateRequest: MessageFns<UserServiceCreateRequest>;
export declare const UserServiceGetByIdRequest: MessageFns<UserServiceGetByIdRequest>;
export declare const UserServiceUpdateRequest: MessageFns<UserServiceUpdateRequest>;
export declare const UserServiceDeleteRequest: MessageFns<UserServiceDeleteRequest>;
export declare const UserServiceRestoreRequest: MessageFns<UserServiceRestoreRequest>;
export declare const UserServicePaginateRequest: MessageFns<UserServicePaginateRequest>;
export declare const UserServiceCreateResponse: MessageFns<UserServiceCreateResponse>;
export declare const UserServiceGetByIdResponse: MessageFns<UserServiceGetByIdResponse>;
export declare const UserServiceUpdateResponse: MessageFns<UserServiceUpdateResponse>;
export declare const UserServiceDeleteResponse: MessageFns<UserServiceDeleteResponse>;
export declare const UserServiceRestoreResponse: MessageFns<UserServiceRestoreResponse>;
export declare const UserServicePaginateResponse: MessageFns<UserServicePaginateResponse>;
export declare const User: MessageFns<User>;
export interface UserServiceClient {
    create(request: UserServiceCreateRequest, metadata?: Metadata): Observable<UserServiceCreateResponse>;
    getById(request: UserServiceGetByIdRequest, metadata?: Metadata): Observable<UserServiceGetByIdResponse>;
    update(request: UserServiceUpdateRequest, metadata?: Metadata): Observable<UserServiceUpdateResponse>;
    delete(request: UserServiceDeleteRequest, metadata?: Metadata): Observable<UserServiceDeleteResponse>;
    restore(request: UserServiceRestoreRequest, metadata?: Metadata): Observable<UserServiceRestoreResponse>;
    paginate(request: UserServicePaginateRequest, metadata?: Metadata): Observable<UserServicePaginateResponse>;
}
export interface UserServiceController {
    create(request: UserServiceCreateRequest, metadata?: Metadata): Promise<UserServiceCreateResponse> | Observable<UserServiceCreateResponse> | UserServiceCreateResponse;
    getById(request: UserServiceGetByIdRequest, metadata?: Metadata): Promise<UserServiceGetByIdResponse> | Observable<UserServiceGetByIdResponse> | UserServiceGetByIdResponse;
    update(request: UserServiceUpdateRequest, metadata?: Metadata): Promise<UserServiceUpdateResponse> | Observable<UserServiceUpdateResponse> | UserServiceUpdateResponse;
    delete(request: UserServiceDeleteRequest, metadata?: Metadata): Promise<UserServiceDeleteResponse> | Observable<UserServiceDeleteResponse> | UserServiceDeleteResponse;
    restore(request: UserServiceRestoreRequest, metadata?: Metadata): Promise<UserServiceRestoreResponse> | Observable<UserServiceRestoreResponse> | UserServiceRestoreResponse;
    paginate(request: UserServicePaginateRequest, metadata?: Metadata): Promise<UserServicePaginateResponse> | Observable<UserServicePaginateResponse> | UserServicePaginateResponse;
}
export declare function UserServiceControllerMethods(): (constructor: Function) => void;
export declare const USER_SERVICE_NAME = "UserService";
export interface UserService {
    create(request: UserServiceCreateRequest, metadata?: Metadata): Promise<UserServiceCreateResponse>;
    getById(request: UserServiceGetByIdRequest, metadata?: Metadata): Promise<UserServiceGetByIdResponse>;
    update(request: UserServiceUpdateRequest, metadata?: Metadata): Promise<UserServiceUpdateResponse>;
    delete(request: UserServiceDeleteRequest, metadata?: Metadata): Promise<UserServiceDeleteResponse>;
    restore(request: UserServiceRestoreRequest, metadata?: Metadata): Promise<UserServiceRestoreResponse>;
    paginate(request: UserServicePaginateRequest, metadata?: Metadata): Promise<UserServicePaginateResponse>;
}
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}
