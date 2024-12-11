const { fetchAllCategories } = require('../services/CategoryService');
const httpError = require('../utils/httpError');
const httpResponse = require('../utils/httpResponse');
const logger = require('../utils/logger');

const fetchAllCategoriesApi = async (req, res, next) => {
  try {
    const data = await fetchAllCategories();
    return httpResponse(req, res, 200, 'Categories fetched', data);
  } catch (error) {
    logger.error('INTERNAL SERVER ERROR', { meta: { error: error } });
    httpError(next, error, req, 500);
  }
};

module.exports = { fetchAllCategoriesApi };
