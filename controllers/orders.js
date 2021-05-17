const asyncHandler = require('../middleware/async');
const { checkLengthAndSend } = require('../helpers/helpers');
const ErrorResponse = require('../helpers/errorResponse');
const Order = require('../models/Order');


// @desc      Get a user's orders
// @route     GET /api/v1/orders
// @access    Private
exports.getUserOrders = asyncHandler( async (req, res, next) => {

  const user = req.user;

  const orders = await Order.find({ user: user.id})

  checkLengthAndSend(res, orders, next);

});

// @desc      Create an order
// @route     POST /api/v1/orders
// @access    Private
exports.createOrder = asyncHandler( async (req, res, next) => {

  const order = await Order.create({
    user: req.user.id,
    medicines: req.medicines,
  });

  checkLengthAndSend(res, order, next);
});