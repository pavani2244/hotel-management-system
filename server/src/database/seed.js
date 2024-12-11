const mongoose = require('mongoose');
const logger = require('../utils/logger');
const Category = require('../models/Category');

// run the this one time to seed categories
const categories = [
  { name: 'Indian', value: 'indian' },
  { name: 'Chinese', value: 'chinese' },
  { name: 'Arabian', value: 'arabian' },
  { name: 'Italian', value: 'italian' },
  { name: 'Continental', value: 'continental' },
  { name: 'Thai', value: 'thai' },
  { name: 'Dessert', value: 'dessert' },
];

const seedCategories = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/hotel-management', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Connected to MongoDB');

    // Clear existing categories (optional)
    await Category.deleteMany({});
    logger.info('Existing categories removed');

    // Insert new categories
    const result = await Category.insertMany(categories);
    logger.info('Categories seeded successfully:', result);

    // Close connection
    mongoose.connection.close();
  } catch (error) {
    logger.error('Error seeding categories:', error);
    mongoose.connection.close();
  }
};

seedCategories();
