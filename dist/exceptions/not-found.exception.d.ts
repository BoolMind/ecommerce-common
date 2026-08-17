import { DomainException } from './domain.exception';
export declare abstract class NotFoundExceptionBase<TCode extends string> extends DomainException<TCode> {
    protected constructor(code: TCode, message: string);
}
