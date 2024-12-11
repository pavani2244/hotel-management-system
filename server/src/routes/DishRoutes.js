const express = require('express');
const {
  getAllDishesApi,
  getDishByIdApi,
  updateDishApi,
  createNewDishApi,
  deleteDishApi,
  fetchDishesByCategoryApi,
} = require('../controllers/DishController');

const router = express.Router();

/**
 * @swagger
 * '/api/dish':
 *  post:
 *     tags:
 *     - Dishes
 *     summary: Add new dish to db
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - price
 *              - name
 *              - quantity
 *              - category
 *            properties:
 *              price:
 *                type: number
 *              name:
 *                type: string
 *              quantity:
 *                type: number
 *              category:
 *                type: string
 *     responses:
 *      201:
 *        description: Dish created
 *      400:
 *        description: validation error
 *      500:
 *        description: Server Error
 */
router.post('/', createNewDishApi);

/**
 * @swagger
 * '/api/dish':
 *  get:
 *     tags:
 *     - Dishes
 *     summary: Get all dishes from DB
 *     responses:
 *      200:
 *        description: dishes fetched
 *      500:
 *        description: Server Error
 */
router.get('/', getAllDishesApi);

/**
 * @swagger
 * '/api/dish/{id}':
 *  put:
 *     tags:
 *     - Dishes
 *     summary: Update a dish in DB
 *     parameters:
 *     - in: path
 *       required: true
 *       name: id
 *       schema:
 *        type: string
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - price
 *              - name
 *              - quantity
 *              - category
 *            properties:
 *              price:
 *                type: number
 *              name:
 *                type: string
 *              quantity:
 *                type: number
 *              category:
 *                type: string
 *     responses:
 *      201:
 *        description: Dish created
 *      400:
 *        description: validation error
 *      500:
 *        description: Server Error
 */
router.put('/:id', updateDishApi);

/**
 * @swagger
 * '/api/dish/{id}':
 *  get:
 *     tags:
 *     - Dishes
 *     summary: Get a dish from db
 *     parameters:
 *     - in: path
 *       required: true
 *       name: id
 *       schema:
 *        type: string
 *     responses:
 *      200:
 *        description: dish fetched
 *      500:
 *        description: Server Error
 */
router.get('/:id', getDishByIdApi);

/**
 * @swagger
 * '/api/dish/category/{id}':
 *  get:
 *     tags:
 *     - Dishes
 *     summary: Get all dishes by category from db
 *     parameters:
 *     - in: path
 *       required: true
 *       name: id
 *       schema:
 *        type: string
 *     responses:
 *      200:
 *        description: dishes fetched
 *      500:
 *        description: Server Error
 */
router.get('/category/:id', fetchDishesByCategoryApi);

/**
 * @swagger
 * '/api/dish/{id}':
 *  delete:
 *     tags:
 *     - Dishes
 *     summary: Delete a dish from db
 *     parameters:
 *     - in: path
 *       required: true
 *       name: id
 *       schema:
 *        type: string
 *     responses:
 *      200:
 *        description: dish deleted
 *      500:
 *        description: Server Error
 */
router.delete('/:id', deleteDishApi);

module.exports = router;
