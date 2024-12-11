const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'category',
      autopopulate: true,
    },
  },
  { timestamps: true },
);

dishSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('dish', dishSchema);
