import { HttpException } from './HttpException.js';

export default class NotAuthorizedError extends HttpException {
    constructor() {
        const statusCode = 401;
        const message = 'Unauthorized access!';

        super(statusCode, message);
    }
}
