"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictExceptionBase = void 0;
const domain_exception_1 = require("./domain.exception");
class ConflictExceptionBase extends domain_exception_1.DomainException {
    constructor(code, message) {
        super(code, message);
    }
}
exports.ConflictExceptionBase = ConflictExceptionBase;
//# sourceMappingURL=conflict.exception.js.map