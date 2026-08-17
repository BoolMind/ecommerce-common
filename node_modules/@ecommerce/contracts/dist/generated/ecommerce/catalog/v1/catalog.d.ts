import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import type { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { PageMeta, SortOrder } from "../../common/v1/common";
export declare const protobufPackage = "ecommerce.catalog.v1";
export interface ProductServiceCreateRequest {
    name: string;
    description?: string | undefined;
    price: number;
    categoryId: number;
    userId: number;
}
export interface ProductServiceGetByIdRequest {
    id: number;
}
export interface ProductServiceUpdateRequest {
    id: number;
    name?: string | undefined;
    description?: string | undefined;
    price?: number | undefined;
    categoryId?: number | undefined;
}
export interface ProductServiceDeleteRequest {
    id: number;
}
export interface ProductServiceRestoreRequest {
    id: number;
}
export interface ProductServicePaginateRequest {
    page: number;
    limit: number;
    search?: string | undefined;
    orderBy?: string | undefined;
    order: SortOrder;
}
export interface ProductServiceFindByCategoryRequest {
    categoryId: number;
}
export interface ProductServiceFindByUserRequest {
    userId: number;
}
export interface ProductServiceCreateResponse {
    product?: Product | undefined;
}
export interface ProductServiceGetByIdResponse {
    product?: Product | undefined;
}
export interface ProductServiceUpdateResponse {
    product?: Product | undefined;
}
export interface ProductServiceDeleteResponse {
    success: boolean;
}
export interface ProductServiceRestoreResponse {
    product?: Product | undefined;
}
export interface ProductServicePaginateResponse {
    items: Product[];
    meta?: PageMeta | undefined;
}
export interface ProductServiceFindByCategoryResponse {
    items: Product[];
}
export interface ProductServiceFindByUserResponse {
    items: Product[];
}
export interface CategoryServiceCreateRequest {
    name: string;
    description?: string | undefined;
}
export interface CategoryServiceGetByIdRequest {
    id: number;
}
export interface CategoryServiceFindAllRequest {
}
export interface CategoryServiceUpdateRequest {
    id: number;
    name?: string | undefined;
    description?: string | undefined;
}
export interface CategoryServiceDeleteRequest {
    id: number;
}
export interface CategoryServiceRestoreRequest {
    id: number;
}
export interface CategoryServicePaginateRequest {
    page: number;
    limit: number;
    search?: string | undefined;
    orderBy?: string | undefined;
    order: SortOrder;
}
export interface CategoryServiceCreateResponse {
    category?: Category | undefined;
}
export interface CategoryServiceGetByIdResponse {
    category?: Category | undefined;
}
export interface CategoryServiceFindAllResponse {
    items: Category[];
}
export interface CategoryServiceUpdateResponse {
    category?: Category | undefined;
}
export interface CategoryServiceDeleteResponse {
    success: boolean;
}
export interface CategoryServiceRestoreResponse {
    category?: Category | undefined;
}
export interface CategoryServicePaginateResponse {
    items: Category[];
    meta?: PageMeta | undefined;
}
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    userId: number;
    createdAt?: Timestamp | undefined;
    updatedAt?: Timestamp | undefined;
    category?: Category | undefined;
}
export interface Category {
    id: number;
    name: string;
    description: string;
    createdAt?: Timestamp | undefined;
    updatedAt?: Timestamp | undefined;
}
export declare const ECOMMERCE_CATALOG_V1_PACKAGE_NAME = "ecommerce.catalog.v1";
export declare const ProductServiceCreateRequest: MessageFns<ProductServiceCreateRequest>;
export declare const ProductServiceGetByIdRequest: MessageFns<ProductServiceGetByIdRequest>;
export declare const ProductServiceUpdateRequest: MessageFns<ProductServiceUpdateRequest>;
export declare const ProductServiceDeleteRequest: MessageFns<ProductServiceDeleteRequest>;
export declare const ProductServiceRestoreRequest: MessageFns<ProductServiceRestoreRequest>;
export declare const ProductServicePaginateRequest: MessageFns<ProductServicePaginateRequest>;
export declare const ProductServiceFindByCategoryRequest: MessageFns<ProductServiceFindByCategoryRequest>;
export declare const ProductServiceFindByUserRequest: MessageFns<ProductServiceFindByUserRequest>;
export declare const ProductServiceCreateResponse: MessageFns<ProductServiceCreateResponse>;
export declare const ProductServiceGetByIdResponse: MessageFns<ProductServiceGetByIdResponse>;
export declare const ProductServiceUpdateResponse: MessageFns<ProductServiceUpdateResponse>;
export declare const ProductServiceDeleteResponse: MessageFns<ProductServiceDeleteResponse>;
export declare const ProductServiceRestoreResponse: MessageFns<ProductServiceRestoreResponse>;
export declare const ProductServicePaginateResponse: MessageFns<ProductServicePaginateResponse>;
export declare const ProductServiceFindByCategoryResponse: MessageFns<ProductServiceFindByCategoryResponse>;
export declare const ProductServiceFindByUserResponse: MessageFns<ProductServiceFindByUserResponse>;
export declare const CategoryServiceCreateRequest: MessageFns<CategoryServiceCreateRequest>;
export declare const CategoryServiceGetByIdRequest: MessageFns<CategoryServiceGetByIdRequest>;
export declare const CategoryServiceFindAllRequest: MessageFns<CategoryServiceFindAllRequest>;
export declare const CategoryServiceUpdateRequest: MessageFns<CategoryServiceUpdateRequest>;
export declare const CategoryServiceDeleteRequest: MessageFns<CategoryServiceDeleteRequest>;
export declare const CategoryServiceRestoreRequest: MessageFns<CategoryServiceRestoreRequest>;
export declare const CategoryServicePaginateRequest: MessageFns<CategoryServicePaginateRequest>;
export declare const CategoryServiceCreateResponse: MessageFns<CategoryServiceCreateResponse>;
export declare const CategoryServiceGetByIdResponse: MessageFns<CategoryServiceGetByIdResponse>;
export declare const CategoryServiceFindAllResponse: MessageFns<CategoryServiceFindAllResponse>;
export declare const CategoryServiceUpdateResponse: MessageFns<CategoryServiceUpdateResponse>;
export declare const CategoryServiceDeleteResponse: MessageFns<CategoryServiceDeleteResponse>;
export declare const CategoryServiceRestoreResponse: MessageFns<CategoryServiceRestoreResponse>;
export declare const CategoryServicePaginateResponse: MessageFns<CategoryServicePaginateResponse>;
export declare const Product: MessageFns<Product>;
export declare const Category: MessageFns<Category>;
export interface ProductServiceClient {
    create(request: ProductServiceCreateRequest, metadata?: Metadata): Observable<ProductServiceCreateResponse>;
    getById(request: ProductServiceGetByIdRequest, metadata?: Metadata): Observable<ProductServiceGetByIdResponse>;
    update(request: ProductServiceUpdateRequest, metadata?: Metadata): Observable<ProductServiceUpdateResponse>;
    delete(request: ProductServiceDeleteRequest, metadata?: Metadata): Observable<ProductServiceDeleteResponse>;
    restore(request: ProductServiceRestoreRequest, metadata?: Metadata): Observable<ProductServiceRestoreResponse>;
    paginate(request: ProductServicePaginateRequest, metadata?: Metadata): Observable<ProductServicePaginateResponse>;
    findByCategory(request: ProductServiceFindByCategoryRequest, metadata?: Metadata): Observable<ProductServiceFindByCategoryResponse>;
    findByUser(request: ProductServiceFindByUserRequest, metadata?: Metadata): Observable<ProductServiceFindByUserResponse>;
}
export interface ProductServiceController {
    create(request: ProductServiceCreateRequest, metadata?: Metadata): Promise<ProductServiceCreateResponse> | Observable<ProductServiceCreateResponse> | ProductServiceCreateResponse;
    getById(request: ProductServiceGetByIdRequest, metadata?: Metadata): Promise<ProductServiceGetByIdResponse> | Observable<ProductServiceGetByIdResponse> | ProductServiceGetByIdResponse;
    update(request: ProductServiceUpdateRequest, metadata?: Metadata): Promise<ProductServiceUpdateResponse> | Observable<ProductServiceUpdateResponse> | ProductServiceUpdateResponse;
    delete(request: ProductServiceDeleteRequest, metadata?: Metadata): Promise<ProductServiceDeleteResponse> | Observable<ProductServiceDeleteResponse> | ProductServiceDeleteResponse;
    restore(request: ProductServiceRestoreRequest, metadata?: Metadata): Promise<ProductServiceRestoreResponse> | Observable<ProductServiceRestoreResponse> | ProductServiceRestoreResponse;
    paginate(request: ProductServicePaginateRequest, metadata?: Metadata): Promise<ProductServicePaginateResponse> | Observable<ProductServicePaginateResponse> | ProductServicePaginateResponse;
    findByCategory(request: ProductServiceFindByCategoryRequest, metadata?: Metadata): Promise<ProductServiceFindByCategoryResponse> | Observable<ProductServiceFindByCategoryResponse> | ProductServiceFindByCategoryResponse;
    findByUser(request: ProductServiceFindByUserRequest, metadata?: Metadata): Promise<ProductServiceFindByUserResponse> | Observable<ProductServiceFindByUserResponse> | ProductServiceFindByUserResponse;
}
export declare function ProductServiceControllerMethods(): (constructor: Function) => void;
export declare const PRODUCT_SERVICE_NAME = "ProductService";
export interface ProductService {
    create(request: ProductServiceCreateRequest, metadata?: Metadata): Promise<ProductServiceCreateResponse>;
    getById(request: ProductServiceGetByIdRequest, metadata?: Metadata): Promise<ProductServiceGetByIdResponse>;
    update(request: ProductServiceUpdateRequest, metadata?: Metadata): Promise<ProductServiceUpdateResponse>;
    delete(request: ProductServiceDeleteRequest, metadata?: Metadata): Promise<ProductServiceDeleteResponse>;
    restore(request: ProductServiceRestoreRequest, metadata?: Metadata): Promise<ProductServiceRestoreResponse>;
    paginate(request: ProductServicePaginateRequest, metadata?: Metadata): Promise<ProductServicePaginateResponse>;
    findByCategory(request: ProductServiceFindByCategoryRequest, metadata?: Metadata): Promise<ProductServiceFindByCategoryResponse>;
    findByUser(request: ProductServiceFindByUserRequest, metadata?: Metadata): Promise<ProductServiceFindByUserResponse>;
}
export interface CategoryServiceClient {
    create(request: CategoryServiceCreateRequest, metadata?: Metadata): Observable<CategoryServiceCreateResponse>;
    getById(request: CategoryServiceGetByIdRequest, metadata?: Metadata): Observable<CategoryServiceGetByIdResponse>;
    findAll(request: CategoryServiceFindAllRequest, metadata?: Metadata): Observable<CategoryServiceFindAllResponse>;
    update(request: CategoryServiceUpdateRequest, metadata?: Metadata): Observable<CategoryServiceUpdateResponse>;
    delete(request: CategoryServiceDeleteRequest, metadata?: Metadata): Observable<CategoryServiceDeleteResponse>;
    restore(request: CategoryServiceRestoreRequest, metadata?: Metadata): Observable<CategoryServiceRestoreResponse>;
    paginate(request: CategoryServicePaginateRequest, metadata?: Metadata): Observable<CategoryServicePaginateResponse>;
}
export interface CategoryServiceController {
    create(request: CategoryServiceCreateRequest, metadata?: Metadata): Promise<CategoryServiceCreateResponse> | Observable<CategoryServiceCreateResponse> | CategoryServiceCreateResponse;
    getById(request: CategoryServiceGetByIdRequest, metadata?: Metadata): Promise<CategoryServiceGetByIdResponse> | Observable<CategoryServiceGetByIdResponse> | CategoryServiceGetByIdResponse;
    findAll(request: CategoryServiceFindAllRequest, metadata?: Metadata): Promise<CategoryServiceFindAllResponse> | Observable<CategoryServiceFindAllResponse> | CategoryServiceFindAllResponse;
    update(request: CategoryServiceUpdateRequest, metadata?: Metadata): Promise<CategoryServiceUpdateResponse> | Observable<CategoryServiceUpdateResponse> | CategoryServiceUpdateResponse;
    delete(request: CategoryServiceDeleteRequest, metadata?: Metadata): Promise<CategoryServiceDeleteResponse> | Observable<CategoryServiceDeleteResponse> | CategoryServiceDeleteResponse;
    restore(request: CategoryServiceRestoreRequest, metadata?: Metadata): Promise<CategoryServiceRestoreResponse> | Observable<CategoryServiceRestoreResponse> | CategoryServiceRestoreResponse;
    paginate(request: CategoryServicePaginateRequest, metadata?: Metadata): Promise<CategoryServicePaginateResponse> | Observable<CategoryServicePaginateResponse> | CategoryServicePaginateResponse;
}
export declare function CategoryServiceControllerMethods(): (constructor: Function) => void;
export declare const CATEGORY_SERVICE_NAME = "CategoryService";
export interface CategoryService {
    create(request: CategoryServiceCreateRequest, metadata?: Metadata): Promise<CategoryServiceCreateResponse>;
    getById(request: CategoryServiceGetByIdRequest, metadata?: Metadata): Promise<CategoryServiceGetByIdResponse>;
    findAll(request: CategoryServiceFindAllRequest, metadata?: Metadata): Promise<CategoryServiceFindAllResponse>;
    update(request: CategoryServiceUpdateRequest, metadata?: Metadata): Promise<CategoryServiceUpdateResponse>;
    delete(request: CategoryServiceDeleteRequest, metadata?: Metadata): Promise<CategoryServiceDeleteResponse>;
    restore(request: CategoryServiceRestoreRequest, metadata?: Metadata): Promise<CategoryServiceRestoreResponse>;
    paginate(request: CategoryServicePaginateRequest, metadata?: Metadata): Promise<CategoryServicePaginateResponse>;
}
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}
