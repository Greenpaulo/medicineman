const asyncHandler = require('../middleware/async');
const Essence = require('../models/Essence');
const { checkLengthAndSend, getNamesFromData } = require('../helpers/helpers');

// @desc      Get essence data by meridian
// @route     GET /api/v1/meridians/essence-data/:meridian
// @access    Public
exports.getEssenceDataByMeridian = asyncHandler(async (req, res, next) => {
    const meridian = req.params.meridian.replace(/_/g, " ");
    
    const essences = await Essence.find({$or: [{meridians: meridian}, {meridiansSecondary: meridian} ]});

    checkLengthAndSend(res, essences, next);
});

// @desc      Get essence names by meridian
// @route     GET /api/v1/meridians/essence-names/:meridian
// @access    Public
exports.getEssenceNamesByMeridian = asyncHandler(async (req, res, next) => {
    const meridian = req.params.meridian.replace(/_/g, " ");
    
    const essences = await Essence.find({$or: [{meridians: meridian}, {meridiansSecondary: meridian} ]});

    const names = getNamesFromData(essences);

    checkLengthAndSend(res, names, next);
});