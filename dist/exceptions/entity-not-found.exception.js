"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotFoundException = exports.CommonErrorCode = void 0;
const not_found_exception_1 = require("./not-found.exception");
var CommonErrorCode;
(function (CommonErrorCode) {
    CommonErrorCode["ENTITY_NOT_FOUND"] = "ENTITY_NOT_FOUND";
})(CommonErrorCode || (exports.CommonErrorCode = CommonErrorCode = {}));
class EntityNotFoundException extends not_found_exception_1.NotFoundExceptionBase {
    constructor(entityName, id) {
        super(CommonErrorCode.ENTITY_NOT_FOUND, `${entityName} with id ${id} not found`);
    }
}
exports.EntityNotFoundException = EntityNotFoundException;
//# sourceMappingURL=entity-not-found.exception.js.map