"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundExceptionBase = void 0;
const domain_exception_1 = require("./domain.exception");
class NotFoundExceptionBase extends domain_exception_1.DomainException {
    constructor(code, message) {
        super(code, message);
    }
}
exports.NotFoundExceptionBase = NotFoundExceptionBase;
//# sourceMappingURL=not-found.exception.js.map