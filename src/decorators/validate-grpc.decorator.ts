import { SetMetadata } from '@nestjs/common';

export const GRPC_VALIDATE_MESSAGE_TYPE =
  'grpc:validate-message-type';

export const ValidateGrpc = (
  protoMessageFullName: string,
) =>
  SetMetadata(
    GRPC_VALIDATE_MESSAGE_TYPE,
    protoMessageFullName,
  );