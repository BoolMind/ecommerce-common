"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateGrpc = exports.GRPC_VALIDATE_MESSAGE_TYPE = void 0;
const common_1 = require("@nestjs/common");
exports.GRPC_VALIDATE_MESSAGE_TYPE = 'grpc:validate-message-type';
const ValidateGrpc = (protoMessageFullName) => (0, common_1.SetMetadata)(exports.GRPC_VALIDATE_MESSAGE_TYPE, protoMessageFullName);
exports.ValidateGrpc = ValidateGrpc;
//# sourceMappingURL=validate-grpc.decorator.js.map