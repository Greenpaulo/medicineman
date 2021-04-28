const mongoose = require('mongoose');
const slugify = require('slugify');

const EssenceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
    trim: true
  },
  companySlug: String,
  group: {
    type: String,
    trim: true
  },
  groupSlug: String,
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  nameSlug: String,
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

// Middleware to create slugs
EssenceSchema.pre('save', function(next) {
  this.companySlug = slugify(this.company, { lower: true, replacement: '_' });
  this.groupSlug = slugify(this.group, { lower: true, replacement: '_' });
  this.nameSlug = slugify(this.name, { lower: true, replacement: '_' });

  function convertArrayToLowercase (array) {
      const newArray = array.map(el => {
      return el.toLowerCase();
    })
    return newArray;
  }

  this.chakras = convertArrayToLowercase(this.chakras);
  this.chakrasSecondary = convertArrayToLowercase(this.chakrasSecondary);
  this.meridians = convertArrayToLowercase(this.meridians);
  this.meridiansSecondary = convertArrayToLowercase(this.meridiansSecondary);
  this.elements = convertArrayToLowercase(this.elements);
  this.keywords = convertArrayToLowercase(this.keywords);
  
  next();
})

module.exports = mongoose.model('Essence', EssenceSchema);