const asyncHandler = require('../middleware/async');
const Essence = require('../models/Essence');
const { checkLengthAndSend, getNamesFromData } = require('../helpers/helpers');
const ErrorResponse = require('../helpers/errorResponse');

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

    const names = getNamesFromData(essences);

    checkLengthAndSend(res, names, next);
});

// @desc      Get essence names from a certain company by chakra
// @route     GET /api/v1/essences/chakras/essence-names/:company/:chakra
// @access    Public
exports.getCompanyEssenceNamesByChakra = asyncHandler(async (req, res, next) => {
    const chakra = req.params.chakra.replace(/_/g, " ");
    
    const essences = await Essence.find({
      $or: [{chakras: chakra}, {chakrasSecondary: chakra} ], 
      companySlug: req.params.company
    });

    const names = getNamesFromData(essences);

    checkLengthAndSend(res, names, next);
});

// @desc      Get essence names from a certain company with chakra priority - primary or secondary
// @route     GET /api/v1/essences/chakras/essence-names/:company/:chakra/:priority
// @access    Public
exports.getCompanyEssenceNamesByChakraPriority = asyncHandler(async (req, res, next) => {
    const chakra = req.params.chakra.replace(/_/g, " ");

    const priority = req.params.priority;

    console.log(priority)

    let essences;
    
    if (priority === "primary") {
      essences = await Essence.find({
        chakras: chakra, 
        companySlug: req.params.company
      });
    } else if (priority === "secondary") {
      essences = await Essence.find({
        chakrasSecondary: chakra, 
        companySlug: req.params.company
      });
    } else (
       next(new ErrorResponse('Invalid URL parameter', 400))
    )
    
    const names = getNamesFromData(essences);

    res.status(200).json({ success: true, count: essences.length, data: names })
});