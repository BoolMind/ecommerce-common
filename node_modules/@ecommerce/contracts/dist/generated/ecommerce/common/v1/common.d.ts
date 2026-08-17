import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "ecommerce.common.v1";
export declare enum SortOrder {
    SORT_ORDER_UNSPECIFIED = 0,
    SORT_ORDER_ASC = 1,
    SORT_ORDER_DESC = 2,
    UNRECOGNIZED = -1
}
export interface PageMeta {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}
export declare const ECOMMERCE_COMMON_V1_PACKAGE_NAME = "ecommerce.common.v1";
export declare const PageMeta: MessageFns<PageMeta>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}
