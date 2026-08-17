export function toGrpcDeleteResponse(): { success: true } {
  return { success: true };
}

export interface PageMetaInput {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export function toGrpcPageMeta(meta: PageMetaInput): PageMetaInput {
  return {
    page: meta.page,
    limit: meta.limit,
    totalItems: meta.totalItems,
    totalPages: meta.totalPages,
    hasNextPage: meta.hasNextPage,
    hasPreviousPage: meta.hasPreviousPage,
  };
}