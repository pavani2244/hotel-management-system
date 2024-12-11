const CategoryModel = require('../models/Category');

const fetchAllCategories = async () => {
  try {
    const categories = await CategoryModel.find();
    return categories;
  } catch (error) {
    return error;
  }
};

module.exports = { fetchAllCategories };
