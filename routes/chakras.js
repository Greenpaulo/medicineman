const express = require('express');
const { getEssenceDataByChakra, getEssenceNamesByChakra, getCompanyEssenceNamesByChakra, getCompanyEssenceNamesByChakraPriority } = require('../controllers/chakras');

const router = express.Router();

router.route('/essence-data/:chakra').get(getEssenceDataByChakra);
router.route('/essence-names/:chakra').get(getEssenceNamesByChakra);
router.route('/essence-names/:company/:chakra').get(getCompanyEssenceNamesByChakra);
router.route('/essence-names/:company/:chakra/:priority').get(getCompanyEssenceNamesByChakraPriority);

module.exports = router;