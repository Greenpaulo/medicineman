const GroupInfo = require('../models/GroupInfo');
const { checkLengthAndSend } = require('../helpers/helpers');

// @desc      Get the info for a group of essences
// @route     /groupinfo/:company/:group
// @access    Public
exports.getGroupInfo = async (req, res, next) => {
  try {
    const company = req.params.company.replace(/_/g, " ");
    const group = req.params.group.replace(/_/g, " ");
    console.log(company, group);
    const info = await GroupInfo.find({ company, group });

    checkLengthAndSend(res, info);
    
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
}