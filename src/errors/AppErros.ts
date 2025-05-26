/*export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor (message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}*/

class AppError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export { AppError };

