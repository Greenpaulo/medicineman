const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../helpers/errorResponse');
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

    // Create token
    const token = user.getSignedJwtToken();

    res.status(200).json({ success: true, token })
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

    // Create token
    const token = user.getSignedJwtToken();

    res.status(200).json({ success: true, token })
});