const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    value: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('category', categorySchema);
