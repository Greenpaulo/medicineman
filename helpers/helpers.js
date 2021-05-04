const ErrorResponse = require('./errorResponse');

exports.checkLengthAndSend = (res, resource, next) => {
  if (resource.length === 0) {
      // Call custom error handler - note: Passing an error to next() calls any custom error handler
      next(new ErrorResponse('File Not Found', 404))
    } else {
      res.status(200).json({ success: true, count: resource.length, data: resource });
    }
}