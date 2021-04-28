const mongoose = require('mongoose');
const slugify = require('slugify');

const ReferenceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  titleSlug: String,
  references: Array,
  related: Array
});

// Middleware to create slug from the name
ReferenceSchema.pre('save', function(next) {
  this.titleSlug = slugify(this.title, { lower: true, replacement: '_' });
  next();
})

module.exports = mongoose.model('Reference', ReferenceSchema);