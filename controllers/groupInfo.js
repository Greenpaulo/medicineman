const ErrorResponse = require('../helpers/errorResponse');
const GroupInfo = require('../models/GroupInfo');
const { checkLengthAndSend } = require('../helpers/helpers');

// @desc      Get the info for a group of essences
// @route     /groupinfo/:company/:group
// @access    Public
exports.getGroupInfo = async (req, res, next) => {
  try {
    const info = await GroupInfo.find({ companySlug: req.params.company, groupSlug: req.params.group });

    checkLengthAndSend(res, info, next);
    
  } catch (err) {
    next(new ErrorResponse('Group info not found', 404));
  }
}