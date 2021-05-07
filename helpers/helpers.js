const ErrorResponse = require('./errorResponse');

exports.checkLengthAndSend = (res, resource, next) => {
  if (resource.length === 0) {
      // Call custom error handler - note: Passing an error to next() calls any custom error handler
      next(new ErrorResponse('File Not Found', 404))
    } else {
      res.status(200).json({ success: true, count: resource.length, data: resource });
    }
};

// Get token from model, create cookie and send response
exports.sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true
  };

  // Set secure flag on cookie to send with https in production
  if(process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ success: true, token })
};