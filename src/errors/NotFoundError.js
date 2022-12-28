import { HttpException } from './HttpException.js';

export class NotFoundError extends HttpException {
  constructor() {
    const statusCode = 404;
    const message = 'Not Found!';
    super(statusCode, message);
  }
}
