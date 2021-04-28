const Essence = require('../models/Essence');

// @desc      Get essence data by meridian
// @route     GET /api/v1/meridians/essence-data/:meridian
// @access    Public
exports.getEssenceDataByMeridian = async (req, res, next) => {
  try {
    const meridian = req.params.meridian.replace(/_/g, " ");
    
    const essences = await Essence.find({$or: [{meridians: meridian}, {meridiansSecondary: meridian} ]});

    res.status(200).json({ success: true, count: essences.length, data: essences });
  } catch (err) {
    res.status(400).json({ success: false, msg: err})
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

    res.status(200).json({ success: true, count: essences.length, data: names });
  } catch (err) {
    res.status(400).json({ success: false, msg: err})
  }
};