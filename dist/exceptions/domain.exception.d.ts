export declare abstract class DomainException<TCode extends string> extends Error {
    readonly code: TCode;
    constructor(code: TCode, message: string);
}
