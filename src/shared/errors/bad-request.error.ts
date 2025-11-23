export class BadRequestError extends Error {
  public status: number;

  constructor(message: string, status: number = 400) {
    super(message);
    this.name = 'BadRequestError';
    this.status = status;
  }
}
