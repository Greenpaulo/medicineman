const express = require('express');
const { getEssenceDataByElement, getEssenceNamesByElement } = require('../controllers/elements');

const router = express.Router();

router.route('/essence-data/:element').get(getEssenceDataByElement);
router.route('/essence-names/:element').get(getEssenceNamesByElement);

module.exports = router;