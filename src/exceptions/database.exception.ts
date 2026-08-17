// common/exceptions/database.exception.ts
import { AlreadyExistsExceptionBase } from './already-exists.exception';
import { ValidationExceptionBase } from './validation.exception';
import { ConflictExceptionBase } from './conflict.exception';
import { DomainErrorCode } from './domain-error-code.enum';

export class EntityAlreadyExistsException extends AlreadyExistsExceptionBase<DomainErrorCode> {
  constructor(entityName: string) {
    super(DomainErrorCode.CONFLICT, `${entityName} already exists.`);
  }
}

export class InvalidReferenceException extends ValidationExceptionBase<DomainErrorCode> {
  constructor(entityName: string) {
    super(DomainErrorCode.VALIDATION_ERROR, `Referenced ${entityName} does not exist.`);
  }
}

export class ReferencedResourceException extends ConflictExceptionBase<DomainErrorCode> {
  constructor(entityName: string) {
    super(DomainErrorCode.RESOURCE_IN_USE, `Cannot delete ${entityName} because it is referenced elsewhere.`);
  }
}