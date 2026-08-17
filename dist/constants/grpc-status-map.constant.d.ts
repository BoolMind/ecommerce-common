import { status } from '@grpc/grpc-js';
import { AlreadyExistsExceptionBase, NotFoundExceptionBase, ValidationExceptionBase, ConflictExceptionBase } from '../exceptions';
export declare const GRPC_STATUS_MAPPING: readonly [{
    readonly exception: typeof NotFoundExceptionBase;
    readonly status: status.NOT_FOUND;
}, {
    readonly exception: typeof AlreadyExistsExceptionBase;
    readonly status: status.ALREADY_EXISTS;
}, {
    readonly exception: typeof ValidationExceptionBase;
    readonly status: status.INVALID_ARGUMENT;
}, {
    readonly exception: typeof ConflictExceptionBase;
    readonly status: status.FAILED_PRECONDITION;
}];
