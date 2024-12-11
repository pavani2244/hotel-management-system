const {
  createDish,
  getAllDishes,
  getDishById,
  updateDish,
  deleteDish,
  fetchDishesByCategory,
} = require('../services/DishService');
const httpError = require('../utils/httpError');
const httpResponse = require('../utils/httpResponse');
const logger = require('../utils/logger');

const createNewDishApi = async (req, res, next) => {
  try {
    const { name, price, quantity, category } = req.body;
    if (!name || !price || !quantity || !category) {
      httpResponse(req, res, 400, 'Validation error', {
        error: 'Please enter all fields',
      });
      return;
    }

    const data = await createDish(req.body);

    if (data) {
      return httpResponse(req, res, 201, 'Dish created', data);
    }
    httpResponse(req, res, 400, 'failed to create dish', data);
  } catch (error) {
    logger.error('INTERNAL SERVER ERROR', { meta: { error: error } });
    httpError(next, error, req, 500);
  }
};

const getAllDishesApi = async (req, res, next) => {
  try {
    const data = await getAllDishes();

    if (data) {
      return httpResponse(req, res, 200, 'Dishes fetched', data);
    }
    httpResponse(req, res, 400, 'failed to fetch dishes', null);
  } catch (error) {
    logger.error('INTERNAL SERVER ERROR', { meta: { error: error } });
    httpError(next, error, req, 500);
  }
};

const getDishByIdApi = async (req, res, next) => {
  try {
    const dish = await getDishById(req.params.id);
    if (dish) {
      return httpResponse(req, res, 200, 'Dish fetched', dish);
    }
    httpResponse(req, res, 400, 'failed to fetch dish', null);
  } catch (error) {
    logger.error('INTERNAL SERVER ERROR', { meta: { error: error } });
    httpError(next, error, req, 500);
  }
};

const updateDishApi = async (req, res, next) => {
  try {
    const data = await updateDish(req.params.id, req.body);

    if (data) {
      return httpResponse(req, res, 200, 'Dish updated', data);
    }
    httpResponse(req, res, 400, 'failed to update dish', null);
  } catch (error) {
    logger.error('INTERNAL SERVER ERROR', { meta: { error: error } });
    httpError(next, error, req, 500);
  }
};

const deleteDishApi = async (req, res, next) => {
  try {
    const data = await deleteDish(req.params.id);

    if (data) {
      return httpResponse(req, res, 200, 'Dish deleted', data);
    }
    httpResponse(req, res, 400, 'failed to delete dish', null);
  } catch (error) {
    logger.error('INTERNAL SERVER ERROR', { meta: { error: error } });
    httpError(next, error, req, 500);
  }
};

const fetchDishesByCategoryApi = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await fetchDishesByCategory(id);
    if (data) {
      return httpResponse(req, res, 200, 'Dishes fetched', data);
    }
    httpResponse(req, res, 400, 'failed to fetch dish', null);
  } catch (error) {
    logger.error('INTERNAL SERVER ERROR', { meta: { error: error } });
    httpError(next, error, req, 500);
  }
};

module.exports = {
  createNewDishApi,
  getAllDishesApi,
  getDishByIdApi,
  updateDishApi,
  deleteDishApi,
  fetchDishesByCategoryApi,
};
