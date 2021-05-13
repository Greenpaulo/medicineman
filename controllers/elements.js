const asyncHandler = require('../middleware/async');
const Essence = require('../models/Essence');
const { checkLengthAndSend, getNamesFromData } = require('../helpers/helpers');

// @desc      Get essence data by element
// @route     GET /api/v1/elements/essence-data/:element
// @access    Public
exports.getEssenceDataByElement = asyncHandler(async (req, res, next) => {
    const essences = await Essence.find({ elements: req.params.element });

    checkLengthAndSend(res, essences, next);
});

// @desc      Get essence names by element
// @route     GET /api/v1/elements/essence-names/:element
// @access    Public
exports.getEssenceNamesByElement = asyncHandler(async (req, res, next) => {
    const essences = await Essence.find({ elements: req.params.element });

    const names = getNamesFromData(essences);

    checkLengthAndSend(res, names, next);
});