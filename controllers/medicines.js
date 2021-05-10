const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../helpers/errorResponse');
const { checkLengthAndSend } = require('../helpers/helpers');
const Medicine = require('../models/Medicine');

// @desc      Get a medicine by id
// @route     GET /api/v1/medicines/:id
// @access    Private    
exports.getMedicine = asyncHandler(async (req, res, next) => {
  const medicine = await Medicine.findById(req.params.id);

  // Check it medicine belongs to logged in user
  if (req.user.id !== (medicine.user).toString()) {
    return next(new ErrorResponse('Not authorized to view this medicine'), 401);
  }

  checkLengthAndSend(res, medicine, next);
});

// @desc      Create a medicine
// @route     POST /api/v1/medicines
// @access    Private    
exports.createMedicine = asyncHandler(async (req, res, next) => {

  const medicine = await Medicine.create({
    name: req.body.name,
    essences: req.body.essences,
    user: req.user.id
  });

  checkLengthAndSend(res, medicine, next);
});