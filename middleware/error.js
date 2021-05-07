const ErrorResponse = require('../helpers/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = {...err};
  error.message = err.message;

  // Log to console for dev
  console.log(err.stack.red);
  
  // if (field !== undefined) {
    //   message = err.errors.field.properties.message;
    //   error = new ErrorResponse(message, 400);
    // } else {
      //   message = 'Resource not found';
      //   error = new ErrorResponse(message, 404);
      // }
  let message;

  // Check for a field property on the error object
  if (Object.values(err)[0] !== undefined) {
    const field = Object.keys(Object.values(Object.values(err))[0])[0];
    
    // If there is a field, then return the message within that field
    if (field) {
      switch(field) {
        case 'email':
          message = err.errors.email.properties.message;
          error = new ErrorResponse(message, 400);
          break;
        case 'firstName':
          message = err.errors.firstName.properties.message;
          error = new ErrorResponse(message, 400);
          break;
        case 'lastName':
          message = err.errors.lastName.properties.message;
          error = new ErrorResponse(message, 400);
          break;
        case 'password':
          message = err.errors.password.properties.message;
          error = new ErrorResponse(message, 400);
          break;
        default:
          message = 'Resource not found';
          error = new ErrorResponse(message, 404);
      }
    }
  }

  if (err.code === 11000){
    const message = 'Email address already taken';
    error = new ErrorResponse(message, 400);
  }

  if (err.statusCode === 401 || err.statusCode === 400) {
    const message = err.message;
    error = new ErrorResponse(message, err.statusCode)
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  })
}

module.exports = errorHandler;