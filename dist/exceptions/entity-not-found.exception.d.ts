import { NotFoundExceptionBase } from './not-found.exception';
export declare enum CommonErrorCode {
    ENTITY_NOT_FOUND = "ENTITY_NOT_FOUND"
}
export declare class EntityNotFoundException extends NotFoundExceptionBase<CommonErrorCode> {
    constructor(entityName: string, id: number | string);
}
