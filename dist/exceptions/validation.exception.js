"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationExceptionBase = void 0;
const domain_exception_1 = require("./domain.exception");
class ValidationExceptionBase extends domain_exception_1.DomainException {
    constructor(code, message) {
        super(code, message);
    }
}
exports.ValidationExceptionBase = ValidationExceptionBase;
//# sourceMappingURL=validation.exception.js.map