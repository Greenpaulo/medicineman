const express = require('express');
const { getEssenceDataByChakra, getEssenceNamesByChakra } = require('../controllers/chakras');

const router = express.Router();

router.route('/essence-data/:chakra').get(getEssenceDataByChakra);
router.route('/essence-names/:chakra').get(getEssenceNamesByChakra);

module.exports = router;