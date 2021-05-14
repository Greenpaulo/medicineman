const Medicine = require('../models/Medicine');
const ErrorResponse = require('../helpers/errorResponse');

exports.checkExistsAndOwnership = async (req, next) => {
  
  const medicine = await Medicine.findById(req.params.id);

  if(!medicine) {
    return next(new ErrorResponse('No such medicine', 404));
  }

  // Check it medicine belongs to logged in user
  if (req.user.id !== (medicine.user).toString()) {
    return next(new ErrorResponse('Not authorized to interact with this medicine', 401));
  }
  
  return medicine;
};

