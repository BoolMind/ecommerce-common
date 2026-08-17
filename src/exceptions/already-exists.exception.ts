import { DomainException } from './domain.exception';

export abstract class AlreadyExistsExceptionBase<
  TCode extends string,
> extends DomainException<TCode> {
  protected constructor(
    code: TCode,
    message: string,
  ) {
    super(code, message);
  }
}