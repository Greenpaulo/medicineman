const express = require('express')
const { getAllReferences, getSingleReference, getAllReferenceTitles } = require('../controllers/references');

const router = express.Router();

router.get('/', getAllReferences);
router.get('/titles', getAllReferenceTitles);
router.get('/:keyword', getSingleReference);

module.exports = router;