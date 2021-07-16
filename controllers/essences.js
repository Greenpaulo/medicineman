const asyncHandler = require('../middleware/async');
const Essence = require('../models/Essence');
const { checkLengthAndSend } = require('../helpers/helpers');

// @desc      Get all essences
// @route     GET /api/v1/essences
// @access    Public
exports.getEssences = asyncHandler(async (req, res, next) => {
    const essences = await Essence.find();

    checkLengthAndSend(res, essences, next);
});

// @desc      Get a single essence by id
// @route     GET /api/v1/essences/:id
// @access    Public
exports.getSingleEssenceById = (req, res, next) => {
  res.status(200).json({ success: true, data: { msg: `Show essence ${req.params.id}` }});
}

// @desc      Get a single essence by name
// @route     GET /api/v1/essences/:name
// @access    Public
exports.getSingleEssenceByName = asyncHandler(async (req, res, next) => {
    const essence = await Essence.find({ nameSlug: req.params.name })

    checkLengthAndSend(res, essence, next);
});

// @desc      Get essences by company
// @route     GET /api/v1/essences/company/:company
// @access    Public
exports.getEssencesByCompany = asyncHandler(async (req, res, next) => {
    const essences = await Essence.find({ companySlug: req.params.company });

    checkLengthAndSend(res, essences, next);
});

// @desc      Get essences by group
// @route     GET /api/v1/essences/group/:group
// @access    Public
exports.getEssencesByGroup = asyncHandler(async (req, res, next) => {
    const essences = await Essence.find({ groupSlug: req.params.group }).sort([['name', 1]]);

    checkLengthAndSend(res, essences, next);
});
