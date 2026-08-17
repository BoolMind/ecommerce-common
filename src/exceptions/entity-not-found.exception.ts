import { NotFoundExceptionBase } from './not-found.exception';

export enum CommonErrorCode {
  ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND',
}

export class EntityNotFoundException extends NotFoundExceptionBase<CommonErrorCode> {
  constructor(entityName: string, id: number | string) {
    super(
      CommonErrorCode.ENTITY_NOT_FOUND,
      `${entityName} with id ${id} not found`,
    );
  }
}