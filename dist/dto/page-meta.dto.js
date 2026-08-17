"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageMetaDto = void 0;
class PageMetaDto {
    page;
    limit;
    totalItems;
    totalPages;
    hasPreviousPage;
    hasNextPage;
    constructor({ page, limit, totalItems, }) {
        this.page = page;
        this.limit = limit;
        this.totalItems = totalItems;
        this.totalPages = Math.ceil(totalItems / limit);
        this.hasPreviousPage = page > 1;
        this.hasNextPage = page < this.totalPages;
    }
}
exports.PageMetaDto = PageMetaDto;
//# sourceMappingURL=page-meta.dto.js.map