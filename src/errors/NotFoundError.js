export class NotFoundError extends Error {
    statusCode;
    status;
    errors;
    constructor(statusCode , message){
        super('pkl');
        this.statusCode = statusCode;
        this.status = 'error';
        this.errors = 'pkl';
    }
}   