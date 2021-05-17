const express = require('express');
const { getMedicine, getUserMedicines ,createMedicine, updateMedicine ,deleteMedicine ,addMedicineToBasket, removeMedicineFromBasket } = require('../controllers/medicines');
const { protect } = require('../middleware/auth');

const router = express.Router();

// CRUD for Medicines
router.get('/:id', protect, getMedicine);
router.get('/', protect, getUserMedicines);
router.post('/', protect, createMedicine);
router.put('/:id', protect, updateMedicine);
router.delete('/:id', protect, deleteMedicine);

// Shopping basket
router.post('/addtobasket/:id', protect, addMedicineToBasket);
router.delete('/removefrombasket/:id', protect, removeMedicineFromBasket);

module.exports = router;