export const errorHandler = (err, req , res , next )=>{
    if(err & err.statusCode){
        return res.status(err.statusCode).json({
            status : 'error',
            statusCode : err.statusCode,
            errors : Array.isArray(err.message) ? err.message : [{message : err.message}],
        });
    }
}