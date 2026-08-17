export declare function toGrpcDeleteResponse(): {
    success: true;
};
export interface PageMetaInput {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}
export declare function toGrpcPageMeta(meta: PageMetaInput): PageMetaInput;
