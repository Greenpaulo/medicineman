const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  medicines: {
    type: Array,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('Order', OrderSchema);