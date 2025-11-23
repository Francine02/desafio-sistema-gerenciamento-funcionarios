export class NotFoundError extends Error {
  public status: number;

  constructor(message: string, status: number = 404) {
    super(message);
    this.name = 'NotFoundError';
    this.status = status;
  }
}
