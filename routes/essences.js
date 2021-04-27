const express = require('express');
const { getEssences, getSingleEssence, getEssencesByCompany, getEssencesByGroup } = require('../controllers/essences');

const router = express.Router();

router.route('/').get(getEssences);
router.route('/:id').get(getSingleEssence);
router.route('/company/:company').get(getEssencesByCompany);
router.route('/group/:group').get(getEssencesByGroup);

module.exports = router;