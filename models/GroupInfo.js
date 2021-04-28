const mongoose = require('mongoose');
const slugify = require('slugify');

const GroupInfoSchema = new mongoose.Schema({
  company: String,
  companySlug: String,
  group: String,
  groupSlug: String,
  description: Array,
  dosage: String,
  frequency: String
});

// Middleware to create slugs
GroupInfoSchema.pre('save', function(next) {
  this.companySlug = slugify(this.company, { lower: true, replacement: '_' });
  this.groupSlug = slugify(this.group, { lower: true, replacement: '_' });
  next();
})

module.exports = mongoose.model('GroupInfo', GroupInfoSchema);