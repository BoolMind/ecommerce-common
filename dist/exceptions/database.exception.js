"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferencedResourceException = exports.InvalidReferenceException = exports.EntityAlreadyExistsException = void 0;
const already_exists_exception_1 = require("./already-exists.exception");
const validation_exception_1 = require("./validation.exception");
const conflict_exception_1 = require("./conflict.exception");
const domain_error_code_enum_1 = require("./domain-error-code.enum");
class EntityAlreadyExistsException extends already_exists_exception_1.AlreadyExistsExceptionBase {
    constructor(entityName) {
        super(domain_error_code_enum_1.DomainErrorCode.CONFLICT, `${entityName} already exists.`);
    }
}
exports.EntityAlreadyExistsException = EntityAlreadyExistsException;
class InvalidReferenceException extends validation_exception_1.ValidationExceptionBase {
    constructor(entityName) {
        super(domain_error_code_enum_1.DomainErrorCode.VALIDATION_ERROR, `Referenced ${entityName} does not exist.`);
    }
}
exports.InvalidReferenceException = InvalidReferenceException;
class ReferencedResourceException extends conflict_exception_1.ConflictExceptionBase {
    constructor(entityName) {
        super(domain_error_code_enum_1.DomainErrorCode.RESOURCE_IN_USE, `Cannot delete ${entityName} because it is referenced elsewhere.`);
    }
}
exports.ReferencedResourceException = ReferencedResourceException;
//# sourceMappingURL=database.exception.js.map