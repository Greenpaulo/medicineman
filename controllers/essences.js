const Essence = require('../models/Essence');
const { checkLengthAndSend } = require('../helpers/helpers');

// @desc      Get all essences
// @route     GET /api/v1/essences
// @access    Public
exports.getEssences = async (req, res, next) => {
  try {
    const essences = await Essence.find();

    res.status(200).json({ success: true, data: essences }); 
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false })
  }
};

// @desc      Get a single essence by id
// @route     GET /api/v1/essences/:id
// @access    Public
exports.getSingleEssenceById = (req, res, next) => {
  res.status(200).json({ success: true, data: { msg: `Show essence ${req.params.id}` }});
}

// @desc      Get a single essence by name
// @route     GET /api/v1/essences/:name
// @access    Public
exports.getSingleEssenceByName = async (req, res, next) => {
  try {
    // const name = req.params.name.replace(".", "/");

    console.log(req.params.name);
    const essence = await Essence.find({ nameSlug: req.params.name })

    checkLengthAndSend(res, essence);
    
  } catch (err) {
    
  }
}

// @desc      Get essences by company
// @route     GET /api/v1/essences/company/:company
// @access    Public
exports.getEssencesByCompany = async (req, res, next) => {
  try {
    const essences = await Essence.find({ companySlug: req.params.company });

    res.status(200).json({ success: true, count: essences.length, data: essences });
  } catch (err) {
    res.status(400).json({ success: false, msg: err})
  }
};

// @desc      Get essences by group
// @route     GET /api/v1/essences/group/:group
// @access    Public
exports.getEssencesByGroup = async (req, res, next) => {
  try {
    const essences = await Essence.find({ groupSlug: req.params.group });

    res.status(200).json({ success: true, count: essences.length, data: essences });
  } catch (err) {
    res.status(400).json({ success: false, msg: err})
  }
};
