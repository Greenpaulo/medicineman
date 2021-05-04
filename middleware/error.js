const ErrorResponse = require('../helpers/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = {...err};
  error.message = err.message;

  // Log to console for dev
  console.log(err.stack.red);

  let message;

  const field = Object.keys(Object.values(Object.values(err))[0])[0];
  console.log(field);
  console.log(Object.values(Object.values(err))[0]);

  // if (field !== undefined) {
  //   message = err.errors.field.properties.message;
  //   error = new ErrorResponse(message, 400);
  // } else {
  //   message = 'Resource not found';
  //   error = new ErrorResponse(message, 404);
  // }

  switch(Object.keys(Object.values(Object.values(err))[0])[0]) {
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

  if (err.code === 11000){
    const message = 'Email address already taken';
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  })
}

module.exports = errorHandler;