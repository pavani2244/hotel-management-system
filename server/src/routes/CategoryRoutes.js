const express = require('express');
const { fetchAllCategoriesApi } = require('../controllers/CategoryController');

const router = express.Router();

/**
 * @swagger
 * '/api/categories':
 *  get:
 *     tags:
 *     - Categories
 *     summary: Get all categories from DB
 *     responses:
 *      200:
 *        description: categories fetched
 *      500:
 *        description: Server Error
 */
router.get('/', fetchAllCategoriesApi);

module.exports = router;
