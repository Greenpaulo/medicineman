const express = require('express');
const { getEssences, getSingleEssenceById, getSingleEssenceByName, getEssencesByCompany, getEssencesByGroup } = require('../controllers/essences');
// const { protect } = require('../middleware/auth');


const router = express.Router();

router.route('/').get(getEssences);
// router.route('/').get(protect, getEssences);
// router.route('/:id').get(getSingleEssenceById);
router.route('/:name').get(getSingleEssenceByName);
router.route('/company/:company').get(getEssencesByCompany);
router.route('/group/:group').get(getEssencesByGroup);

module.exports = router;