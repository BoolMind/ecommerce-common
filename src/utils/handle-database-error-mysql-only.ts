import { QueryFailedError } from 'typeorm';

import {
  EntityAlreadyExistsException,
  InvalidReferenceException,
  ReferencedResourceException,
} from '../exceptions/database.exception';

export function handleDatabaseError(
  error: unknown,
  entityName = 'Resource',
): never {
  if (error instanceof QueryFailedError) {
    const driverError = (
      error as QueryFailedError & {
        driverError?: { code?: string; errno?: number };
      }
    ).driverError;

    switch (driverError?.code) {
      case 'ER_DUP_ENTRY': // MySQL: unique constraint violation
        throw new EntityAlreadyExistsException(entityName);

      case 'ER_NO_REFERENCED_ROW_2': // MySQL: insert/update references a missing parent
        throw new InvalidReferenceException(entityName);

      case 'ER_ROW_IS_REFERENCED_2': // MySQL: delete blocked, still referenced by children
        throw new ReferencedResourceException(entityName);
    }
  }

  throw error; // unexpected — GrpcExceptionFilter's catch-all handles it as INTERNAL
}
