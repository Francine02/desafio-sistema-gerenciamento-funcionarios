export class EntityAlreadyExistsError extends Error {
  public status: number;

  constructor(message: string, status: number = 409) {
    super(message);
    this.name = 'EntityAlreadyExistsError';
    this.status = status;
  }
}
