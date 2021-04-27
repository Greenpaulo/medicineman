const mongoose = require('mongoose');
const slugify = require('slugify');

const EssenceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
    trim: true
  },
  group: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  slug: String,
  latin: {
    type: String,
    trim: true
  },
  description: Array,
  indications: Array,
  effects: Array,
  chakras: Array,
  chakrasSecondary: Array,
  meridians: Array,
  meridiansSecondary: Array,
  elements: Array,
  keywords: Array,
  stock: Boolean
});

// Middleware to create slug from the name
EssenceSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
})

module.exports = mongoose.model('Essence', EssenceSchema);