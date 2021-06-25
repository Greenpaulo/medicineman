const express = require('express');
const { getGroupInfo, getGroupsByCompany} = require('../controllers/groupInfo');

const router = express.Router();

router.route('/:company/:group').get(getGroupInfo);
router.route('/:company').get(getGroupsByCompany);

module.exports = router;