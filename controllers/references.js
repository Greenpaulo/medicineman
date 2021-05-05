const asyncHandler = require('../middleware/async');
const Reference = require('../models/Reference');
const { checkLengthAndSend } = require('../helpers/helpers');

// @desc      Get all references
// @route     GET /api/v1/references
// @access    Public
exports.getAllReferences = asyncHandler(async (req, res, next) => {
    const references = await Reference.find();

    res.status(200).json({ success: true, count: references.length, data: references }); 
});

// @desc      Get a single reference by keyword
// @route     GET /api/v1/references/:keyword
// @access    Public
exports.getSingleReference = asyncHandler(async (req, res, next) => {
    const reference = await Reference.find({ titleSlug: req.params.keyword });

    checkLengthAndSend(res, reference, next);
});
