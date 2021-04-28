const express = require('express');
const { getGroupInfo } = require('../controllers/groupInfo');

const router = express.Router();

router.route('/:company/:group').get(getGroupInfo);

module.exports = router;