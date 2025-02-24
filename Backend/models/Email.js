const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  body: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: Date, default: Date.now },
  category: { type: String, default: 'Uncategorized' },
});

module.exports = mongoose.model('Email', emailSchema);