export declare class PaginationDto {
    page: number;
    limit: number;
    search?: string;
    orderBy?: string;
    order?: 'ASC' | 'DESC';
}
