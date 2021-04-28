const mongoose = require('mongoose');

const GroupInfoSchema = new mongoose.Schema({
  company: String,
  group: String,
  description: Array,
  dosage: String,
  frequency: String
});

module.exports = mongoose.model('GroupInfo', GroupInfoSchema);