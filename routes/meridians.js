const express = require('express');
const { getEssenceDataByMeridian, getEssenceNamesByMeridian } = require('../controllers/meridians');

const router = express.Router();

router.route('/essence-data/:meridian').get(getEssenceDataByMeridian);
router.route('/essence-names/:meridian').get(getEssenceNamesByMeridian);

module.exports = router;