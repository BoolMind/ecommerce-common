import { ValidationExceptionBase } from './validation.exception';
import { DomainErrorCode } from './domain-error-code.enum';

export class EntityNotDeletedException extends ValidationExceptionBase<DomainErrorCode> {
  constructor(entityName: string, id: number | string) {
    super(
      DomainErrorCode.NOT_DELETED,
      `${entityName} with id ${id} is not deleted, cannot restore.`,
    );
  }
}