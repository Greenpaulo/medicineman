const mongoose = require('mongoose');

const ReferenceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  references: Array,
  related: Array
});

module.exports = mongoose.model('Reference', ReferenceSchema);