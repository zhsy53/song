import { BaseError } from "../utils/BaseError";

export enum HttpError {
  ABORT,
  ERROR,
  TIMEOUT
}

export class AbortError extends BaseError {
  constructor() {
    super(HttpError[HttpError.ABORT]);
  }
  static of() {
    return new AbortError();
  }
}
export class ErrorError extends BaseError {
  constructor(message: string) {
    super(message);
  }
  static of(message: string) {
    return new ErrorError(message);
  }
}
export class TimeoutError extends BaseError {
  constructor() {
    super(HttpError[HttpError.TIMEOUT]);
  }
  static of() {
    return new TimeoutError();
  }
}
