const asyncHandler = require('../middleware/async');
const { checkExistsAndOwnership } = require('../helpers/medicines');
const { checkLengthAndSend } = require('../helpers/helpers');
const Medicine = require('../models/Medicine');

// @desc      Get a medicine by id
// @route     GET /api/v1/medicines/:id
// @access    Private    
exports.getMedicine = asyncHandler(async (req, res, next) => {
  
  const medicine = await checkExistsAndOwnership(req, next);

  checkLengthAndSend(res, medicine, next);
});

// @desc      Create a medicine
// @route     POST /api/v1/medicines
// @access    Private    
exports.createMedicine = asyncHandler(async (req, res, next) => {

  const medicine = await Medicine.create({
    name: req.body.name,
    essences: req.body.essences,
    user: req.user.id
  });

  checkLengthAndSend(res, medicine, next);
});

// @desc      Update a medicine
// @route     PUT /api/v1/medicines/:id
// @access    Private    
exports.updateMedicine = asyncHandler(async (req, res, next) => {

  const medicine = await checkExistsAndOwnership(req, next);

  medicine.name = req.body.name;
  medicine.essences = req.body.essences;
  await medicine.save();

  checkLengthAndSend(res, medicine, next);
});

// @desc      Delete a medicine
// @route     DELETE /api/v1/medicines/:id
// @access    Private    
exports.deleteMedicine = asyncHandler(async (req, res, next) => {

  const medicineId = req.params.id;
  const user = req.user;

  const medicine = await checkExistsAndOwnership(req, next);
  await medicine.delete();
  
  // Remove medicine from shopping basket
  if (user.shoppingBasket.includes(medicineId)) {
    user.shoppingBasket = user.shoppingBasket.filter((id) => {
      return id !== medicineId
    });
    
    await user.save();
  }

  res.status(200).json({ success: true, msg: "Medicine deleted"})
});

// @desc      Adds a medicine to the shopping basket
// @route     POST /api/v1/medicines/addtobasket/:id
// @access    Private    
exports.addMedicineToBasket = asyncHandler(async (req, res, next) => {

  const medicineId = req.params.id;
  const user = req.user;

  const medicine = await checkExistsAndOwnership(req, next);

  // Remove expire time from medicine
  medicine.expireAt = null;
  await medicine.save()
  
  // Add to shoppingBasket on User model
  user.shoppingBasket.push(medicineId);
  await user.save();
  
  checkLengthAndSend(res, user, next);
});

// @desc      Remove a medicine from the shopping basket
// @route     DELETE /api/v1/medicines/removefrombasket/:id
// @access    Private    
exports.removeMedicineFromBasket = asyncHandler(async (req, res, next) => {

  const medicineId = req.params.id;
  const user = req.user;

  const medicine = await checkExistsAndOwnership(req, next);
  
  // Filter from user shopping basket
  user.shoppingBasket = user.shoppingBasket.filter((id) => {
    return id !== medicineId
  });
  await user.save();

  // Add expire time back on
  medicine.expireAt = Date.now() + 60 * 24 * 7 * 60 * 1000
  await medicine.save()

  checkLengthAndSend(res, user, next);
});



