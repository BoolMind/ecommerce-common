import { IPageMetaParameters } from '../interfaces';
export declare class PageMetaDto {
    readonly page: number;
    readonly limit: number;
    readonly totalItems: number;
    readonly totalPages: number;
    readonly hasPreviousPage: boolean;
    readonly hasNextPage: boolean;
    constructor({ page, limit, totalItems, }: IPageMetaParameters);
}
