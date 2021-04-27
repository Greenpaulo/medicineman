const Essence = require('../models/Essence')

// @desc      Get essence data by chakra
// @route     GET /api/v1/essences/chakras/essence-data/:chakra
// @access    Public
exports.getEssenceDataByChakra = async (req, res, next) => {
  try {
    const chakra = req.params.chakra.replace(/_/g, " ");
    
    const essences = await Essence.find({$or: [{chakras: chakra}, {chakrasSecondary: chakra} ]});

    res.status(200).json({ success: true, count: essences.length, data: essences });
  } catch (err) {
    res.status(400).json({ success: false, msg: err})
  }
};


// @desc      Get essence names by chakra
// @route     GET /api/v1/essences/chakras/essence-names/:chakra
// @access    Public
exports.getEssenceNamesByChakra = async (req, res, next) => {
  try {
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

    res.status(200).json({ success: true, count: essences.length, data: names });
  } catch (err) {
    res.status(400).json({ success: false, msg: err})
  }
};