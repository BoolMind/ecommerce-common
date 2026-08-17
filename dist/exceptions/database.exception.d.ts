import { AlreadyExistsExceptionBase } from './already-exists.exception';
import { ValidationExceptionBase } from './validation.exception';
import { ConflictExceptionBase } from './conflict.exception';
import { DomainErrorCode } from './domain-error-code.enum';
export declare class EntityAlreadyExistsException extends AlreadyExistsExceptionBase<DomainErrorCode> {
    constructor(entityName: string);
}
export declare class InvalidReferenceException extends ValidationExceptionBase<DomainErrorCode> {
    constructor(entityName: string);
}
export declare class ReferencedResourceException extends ConflictExceptionBase<DomainErrorCode> {
    constructor(entityName: string);
}
