"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = void 0;
class DomainException extends Error {
    code;
    constructor(code, message) {
        super(message);
        this.code = code;
        this.name = new.target.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.DomainException = DomainException;
//# sourceMappingURL=domain.exception.js.map