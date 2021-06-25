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

// @desc      Get essence groups made by a company
// @route     /groupinfo/:company
// @access    Public
exports.getGroupsByCompany = asyncHandler(async (req, res, next) => {
    const info = await GroupInfo.find({ companySlug: req.params.company});

    // Return just the group names and slugs
    let groupNames = [];
    info.forEach(entry => {
      if (entry.group !== "General") {
        groupNames.push({
          name: entry.group, 
          slug: entry.groupSlug
        })
      }
    })

    checkLengthAndSend(res, groupNames, next);
});