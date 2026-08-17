import { status } from '@grpc/grpc-js';

import {
  AlreadyExistsExceptionBase,
  NotFoundExceptionBase,
  ValidationExceptionBase,
  ConflictExceptionBase,
} from '../exceptions';

export const GRPC_STATUS_MAPPING = [
  { exception: NotFoundExceptionBase, status: status.NOT_FOUND },
  { exception: AlreadyExistsExceptionBase, status: status.ALREADY_EXISTS },
  { exception: ValidationExceptionBase, status: status.INVALID_ARGUMENT },
  { exception: ConflictExceptionBase, status: status.FAILED_PRECONDITION },
] as const;