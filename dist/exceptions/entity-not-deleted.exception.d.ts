import { ValidationExceptionBase } from './validation.exception';
import { DomainErrorCode } from './domain-error-code.enum';
export declare class EntityNotDeletedException extends ValidationExceptionBase<DomainErrorCode> {
    constructor(entityName: string, id: number | string);
}
