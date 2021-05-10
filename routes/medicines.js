const express = require('express');
const { getMedicine, createMedicine } = require('../controllers/medicines');
const { protect } = require('../middleware/auth');


const router = express.Router();

router.get('/:id', protect, getMedicine);
router.post('/', protect, createMedicine);

module.exports = router;