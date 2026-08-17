"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlreadyExistsExceptionBase = void 0;
const domain_exception_1 = require("./domain.exception");
class AlreadyExistsExceptionBase extends domain_exception_1.DomainException {
    constructor(code, message) {
        super(code, message);
    }
}
exports.AlreadyExistsExceptionBase = AlreadyExistsExceptionBase;
//# sourceMappingURL=already-exists.exception.js.map