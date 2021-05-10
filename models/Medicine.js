const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  essences: {
    type: Array,
    minItems: 1
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  expireAt: {
    type: Date,
    default: Date.now() + 60 * 24 * 7 * 60 * 1000,  // Expires in 7 days
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
});


module.exports = mongoose.model('Medicine', MedicineSchema);