"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotDeletedException = void 0;
const validation_exception_1 = require("./validation.exception");
const domain_error_code_enum_1 = require("./domain-error-code.enum");
class EntityNotDeletedException extends validation_exception_1.ValidationExceptionBase {
    constructor(entityName, id) {
        super(domain_error_code_enum_1.DomainErrorCode.NOT_DELETED, `${entityName} with id ${id} is not deleted, cannot restore.`);
    }
}
exports.EntityNotDeletedException = EntityNotDeletedException;
//# sourceMappingURL=entity-not-deleted.exception.js.map