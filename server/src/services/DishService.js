const DishModel = require('../models/Dish');

const createDish = async (dish) => {
  try {
    const { name, price, quantity, category } = dish;
    const newDish = new DishModel({
      name: name,
      price: parseInt(price),
      quantity: parseInt(quantity),
      category,
    });

    const data = await newDish.save();

    return data;
  } catch (error) {
    return error;
  }
};

const getAllDishes = async () => {
  try {
    const dishes = await DishModel.find();
    return dishes;
  } catch (error) {
    return error;
  }
};

const getDishById = async (id) => {
  try {
    const dish = await DishModel.findById(id);
    return dish;
  } catch (error) {
    return error;
  }
};

const updateDish = async (id, update) => {
  try {
    const dish = await DishModel.findByIdAndUpdate(id, update);
    return dish;
  } catch (error) {
    return error;
  }
};

const deleteDish = async (id) => {
  try {
    const dish = await DishModel.findByIdAndDelete(id);
    return dish;
  } catch (error) {
    return error;
  }
};

const fetchDishesByCategory = async (category) => {
  try {
    const dishes = await DishModel.find({ category });
    return dishes;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createDish,
  getAllDishes,
  getDishById,
  updateDish,
  deleteDish,
  fetchDishesByCategory,
};
