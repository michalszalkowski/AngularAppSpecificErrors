export interface AppError {
  code: number;
  message: String;
}

export class AppBaseError implements AppError {

  public code: number = 0;
  public message: string = "unknow";

  constructor(public error: Response) {
    this.message = error.statusText;
  }
}

export class NotFoundError extends AppBaseError {
  public code: number = 404;
}

export class ServerError extends AppBaseError {
  public code: number = 505;
}

export class CrazyShitError extends AppBaseError {

}
