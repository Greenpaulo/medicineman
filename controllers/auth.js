const ErrorResponse = require('../helpers/errorResponse');
const User = require('../models/User');

// @desc      Register a new user
// @route     GET /api/v1/auth/register
// @access    Public
exports.registerUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Create user
    const user = await User.create({
      firstName,
      lastName, 
      email, 
      password
    });

    res.status(200).json({ success: true, user })

  } catch (err) {
    next(err)
  }


};