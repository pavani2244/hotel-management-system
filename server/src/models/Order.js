const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: Number, required: true },
    orderedDishes: [
      {
        dish: { type: mongoose.Schema.Types.ObjectId, ref: 'dish' }, // Reference to Dish model
        quantity: { type: Number, required: true }, // Quantity of the dish
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model('dish', dishSchema);
