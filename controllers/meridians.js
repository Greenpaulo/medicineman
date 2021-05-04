const ErrorResponse = require('../helpers/errorResponse');
const Essence = require('../models/Essence');
const { checkLengthAndSend } = require('../helpers/helpers');

// @desc      Get essence data by meridian
// @route     GET /api/v1/meridians/essence-data/:meridian
// @access    Public
exports.getEssenceDataByMeridian = async (req, res, next) => {
  try {
    const meridian = req.params.meridian.replace(/_/g, " ");
    
    const essences = await Essence.find({$or: [{meridians: meridian}, {meridiansSecondary: meridian} ]});

    checkLengthAndSend(res, essences, next);

  } catch (err) {
    next(new ErrorResponse('Essences not found', 404));
  }
};

// @desc      Get essence names by meridian
// @route     GET /api/v1/meridians/essence-names/:meridian
// @access    Public
exports.getEssenceNamesByMeridian = async (req, res, next) => {
  try {
    const meridian = req.params.meridian.replace(/_/g, " ");
    
    const essences = await Essence.find({$or: [{meridians: meridian}, {meridiansSecondary: meridian} ]});

    const convertEssences = (essences) => {
      let names = [];
      essences.forEach(essence => {
        names.push(essence.name)
      })
      return names;
    }
    const names = convertEssences(essences);

    checkLengthAndSend(res, names, next);

  } catch (err) {
      next(new ErrorResponse('Essences not found', 404));
  }
};