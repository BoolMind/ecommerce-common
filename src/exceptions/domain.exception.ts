export abstract class DomainException<
  TCode extends string,
> extends Error {
  constructor(
    public readonly code: TCode,
    message: string,
  ) {
    super(message);

    this.name = new.target.name;

    Object.setPrototypeOf(
      this,
      new.target.prototype,
    );
  }
}