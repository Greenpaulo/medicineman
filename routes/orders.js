const express = require('express');
const { protect } = require('../middleware/auth');
const { getUserOrders, createOrder } = require('../controllers/orders');

const router = express.Router();

router.get('/', protect, getUserOrders)
// router.get('/:id', protect, getOrder);
router.post('/', protect, createOrder);

module.exports = router;
