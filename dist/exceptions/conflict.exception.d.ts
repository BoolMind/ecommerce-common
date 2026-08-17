import { DomainException } from './domain.exception';
export declare abstract class ConflictExceptionBase<TCode extends string> extends DomainException<TCode> {
    protected constructor(code: TCode, message: string);
}
