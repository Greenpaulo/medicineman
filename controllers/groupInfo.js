const asyncHandler = require('../middleware/async');
const GroupInfo = require('../models/GroupInfo');
const { checkLengthAndSend } = require('../helpers/helpers');

// @desc      Get the info for a group of essences
// @route     /groupinfo/:company/:group
// @access    Public
exports.getGroupInfo = asyncHandler(async (req, res, next) => {
    const info = await GroupInfo.find({ companySlug: req.params.company, groupSlug: req.params.group });

    checkLengthAndSend(res, info, next);
});