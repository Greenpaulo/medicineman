const Essence = require('../models/Essence')

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

// @desc      Get a single essence
// @route     GET /api/v1/essences/:id
// @access    Public
exports.getSingleEssence = (req, res, next) => {
  res.status(200).json({ success: true, data: { msg: `Show essence ${req.params.id}` }});
}

// @desc      Get essences by company
// @route     GET /api/v1/essences/company/:company
// @access    Public
exports.getEssencesByCompany = async (req, res, next) => {
  try {
    const company = req.params.company.replace(/([A-Z]+)/g, ' $1').trim();
    
    const essences = await Essence.find({ company });

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
    const group = req.params.group.replace(/([A-Z]+)/g, ' $1').trim();
    
    const essences = await Essence.find({ group });

    res.status(200).json({ success: true, count: essences.length, data: essences });
  } catch (err) {
    res.status(400).json({ success: false, msg: err})
  }
};
