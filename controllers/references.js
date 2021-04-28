const Reference = require('../models/Reference');
const { checkLengthAndSend } = require('../helpers/helpers');

// @desc      Get all references
// @route     GET /api/v1/references
// @access    Public
exports.getAllReferences = async (req, res, next) => {
  try {
    const references = await Reference.find();

    res.status(200).json({ success: true, count: references.length, data: references }); 
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false })
  }
};

// @desc      Get a single reference by keyword
// @route     GET /api/v1/references/:keyword
// @access    Public
exports.getSingleReference = async (req, res, next) => {
  try {
    const param = req.params.keyword.replace(/_/g, " ");
    const keyword = param.replace(".", "/");

    const reference = await Reference.find({ title: keyword });

    checkLengthAndSend(res, reference);
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false })
  }
};
