const ErrorResponse = require('../helpers/errorResponse');
const Reference = require('../models/Reference');
const { checkLengthAndSend } = require('../helpers/helpers');

// @desc      Get all references
// @route     GET /api/v1/references
// @access    Public
exports.getAllReferences = async (req, res, next) => {
  try {
    const references = await Reference.find();

    res.status(200).json({ success: true, count: references.length, data: references }); 
  } catch (err) {
    next(new ErrorResponse('References not found', 404));
  }
};

// @desc      Get a single reference by keyword
// @route     GET /api/v1/references/:keyword
// @access    Public
exports.getSingleReference = async (req, res, next) => {
  try {
    const reference = await Reference.find({ titleSlug: req.params.keyword });

    checkLengthAndSend(res, reference, next);
  } catch (err) {
    next(new ErrorResponse('Reference not found', 404));
  }
};
