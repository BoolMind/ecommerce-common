"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDatabaseError = handleDatabaseError;
const typeorm_1 = require("typeorm");
const database_exception_1 = require("../exceptions/database.exception");
function handleDatabaseError(error, entityName = 'Resource') {
    if (error instanceof typeorm_1.QueryFailedError) {
        const driverError = error.driverError;
        switch (driverError?.code) {
            case 'ER_DUP_ENTRY':
                throw new database_exception_1.EntityAlreadyExistsException(entityName);
            case 'ER_NO_REFERENCED_ROW_2':
                throw new database_exception_1.InvalidReferenceException(entityName);
            case 'ER_ROW_IS_REFERENCED_2':
                throw new database_exception_1.ReferencedResourceException(entityName);
        }
    }
    throw error;
}
//# sourceMappingURL=handle-database-error-mysql-only.js.map