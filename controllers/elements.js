const ErrorResponse = require('../helpers/errorResponse');
const Essence = require('../models/Essence');
const { checkLengthAndSend } = require('../helpers/helpers');

// @desc      Get essence data by element
// @route     GET /api/v1/elements/essence-data/:element
// @access    Public
exports.getEssenceDataByElement = async (req, res, next) => {
  try {
    const essences = await Essence.find({ elements: req.params.element });

    checkLengthAndSend(res, essences, next);

  } catch (err) {
    next(new ErrorResponse('Essences not found', 404));
  }
};

// @desc      Get essence names by element
// @route     GET /api/v1/elements/essence-names/:element
// @access    Public
exports.getEssenceNamesByElement = async (req, res, next) => {
  try {
    const essences = await Essence.find({ elements: req.params.element });

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
    next(err)
  }
};