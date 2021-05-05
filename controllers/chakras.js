const asyncHandler = require('../middleware/async');
const Essence = require('../models/Essence');
const { checkLengthAndSend } = require('../helpers/helpers');

// @desc      Get essence data by chakra
// @route     GET /api/v1/essences/chakras/essence-data/:chakra
// @access    Public
exports.getEssenceDataByChakra = asyncHandler(async (req, res, next) => {
    const chakra = req.params.chakra.replace(/_/g, " ");
    
    const essences = await Essence.find({$or: [{chakras: chakra}, {chakrasSecondary: chakra} ]});

    checkLengthAndSend(res, essences, next)
});


// @desc      Get essence names by chakra
// @route     GET /api/v1/essences/chakras/essence-names/:chakra
// @access    Public
exports.getEssenceNamesByChakra = asyncHandler(async (req, res, next) => {
    const chakra = req.params.chakra.replace(/_/g, " ");
    
    const essences = await Essence.find({$or: [{chakras: chakra}, {chakrasSecondary: chakra} ]});

    const convertEssences = (essences) => {
      let names = [];
      essences.forEach(essence => {
        names.push(essence.name)
      })
      return names;
    }
    const names = convertEssences(essences);

    checkLengthAndSend(res, names, next);
});