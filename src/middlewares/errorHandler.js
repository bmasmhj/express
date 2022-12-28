export const errorHandler = (err, req, res, next) => {
  console.log('error',err);
    if (err && err.statusCode) {
      return res.status(err.statusCode).json({
        status: 'error',
        statusCode: err.statusCode,
        errors: Array.isArray(err.message) ? err.message : [{ message: err.message }],
      });
    }
  
    return res.status(500).json({
      status: 'error',
      statusCode: err.statusCode,
      errors: [{ message: 'Something went wrong!' }],
    });
  };