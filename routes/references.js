const express = require('express')
const { getAllReferences, getSingleReference } = require('../controllers/references');

const router = express.Router();

router.route('/').get(getAllReferences);
router.route('/:keyword').get(getSingleReference);

module.exports = router;