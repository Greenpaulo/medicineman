const asyncHandler = require('../middleware/async');
const Reference = require('../models/Reference');
const { checkLengthAndSend, getNamesFromData } = require('../helpers/helpers');

// @desc      Get all references
// @route     GET /api/v1/references
// @access    Public
exports.getAllReferences = asyncHandler(async (req, res, next) => {
    const references = await Reference.find();

    checkLengthAndSend(res, references, next)
});

// @desc      Get all reference names
// @route     GET /api/v1/references/names
// @access    Public
exports.getAllReferenceTitles = asyncHandler(async (req, res, next) => {
    const references = await Reference.find();

    const getTitlesFromData = (references) => {
      let titles = [];
      references.forEach(ref => {
        titles.push(ref.title)
      })
      return titles;
    };

    const titles = getTitlesFromData(references)
    
    checkLengthAndSend(res, titles, next)
});

// @desc      Get a single reference by keyword
// @route     GET /api/v1/references/:keyword
// @access    Public
exports.getSingleReference = asyncHandler(async (req, res, next) => {
    const reference = await Reference.find({ titleSlug: req.params.keyword });

    checkLengthAndSend(res, reference, next);
});
