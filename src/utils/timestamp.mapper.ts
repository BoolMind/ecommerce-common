import { Timestamp } from '@ecommerce/contracts/generated/google/protobuf/timestamp';


export function dateToTimestamp(
  date: Date,
): Timestamp {

  return {
    seconds: Math.floor(
      date.getTime() / 1000,
    ),

    nanos:
      (date.getTime() % 1000) * 1000000,
  };
}