const Essence = require('../models/Essence');

// @desc      Get essence data by element
// @route     GET /api/v1/elements/essence-data/:element
// @access    Public
exports.getEssenceDataByElement = async (req, res, next) => {
  try {
    const essences = await Essence.find({ elements: req.params.element });

    res.status(200).json({ success: true, count: essences.length, data: essences });
  } catch (err) {
    res.status(400).json({ success: false, msg: err})
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

    res.status(200).json({ success: true, count: essences.length, data: names });
  } catch (err) {
    res.status(400).json({ success: false, msg: err})
  }
};