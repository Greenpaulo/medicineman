const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../helpers/errorResponse');
const { sendTokenResponse, checkLengthAndSend } = require('../helpers/helpers');
const sendEmail = require('../helpers/sendEmail');
const crypto = require('crypto');
const User = require('../models/User');

// @desc      Register a new user
// @route     POST /api/v1/auth/register
// @access    Public
exports.registerUser = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    // Create user
    const user = await User.create({
      firstName,
      lastName, 
      email, 
      password
    });

    sendTokenResponse(user, 201, res);
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // Validate email and password
    if (!email || !password){
      return next(new ErrorResponse('Please provide an email and password', 400));
    };

    // Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return next(new ErrorResponse('Invalid credentials', 401));
    };

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    sendTokenResponse(user, 200, res);
  });


// @desc      Get current logged in user
// @route     GET /api/v1/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
  // NB: The protect middleware has already verified the token and added the user on to the req object
  const user = await User.findById(req.user.id);

  checkLengthAndSend(res, user, next);
});

// @desc      Forgot password
// @route     GET /api/v1/auth/forgotpassword
// @access    Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user){
    return next(new ErrorResponse('There is no user with that email', 404));
  }

  // Get reset token
  const resetToken = user.getResetPasswordToken();

  // Save the token and expiration into DB - don't need to validate fields first
  await user.save({ validateBeforeSave: false})

  // Create reset URL
  const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetpassword/${resetToken}`;

  const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to : \n\n ${resetUrl}`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Password Reset Token',
      message
    });

    res.status(200).json({ success: true, message: 'Email sent' })

  } catch (err) {
    console.log(err);
    // Clear the reset password fields in DB
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined; 

    await user.save({ validateBeforeSave: false })

    return next(new ErrorResponse('Email could not be sent'), 500);
  }
});

// @desc      Reset password
// @route     PUT /api/v1/auth/resetpassword/:resettoken
// @access    Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
  // Get hashed token
  const resetPasswordToken = crypto.createHash('sha256').update(req.params.resettoken).digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() }
  });

  if(!user) {
    return next(new ErrorResponse('Invalid Token'), 400);
  };

  // Set new password
  user.password = req.body.password;
  // Clear the reset password fields in DB
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined; 

  await user.save();

  // Log in the user
  sendTokenResponse(user, 200, res);

});
  