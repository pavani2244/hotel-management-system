import axiosInstance from "./axiosConfig"; // Import the Axios instance

// Fetch all dishes
const fetchDishes = async () => {
  try {
    const response = await axiosInstance.get("/dish"); // GET request to /api/dishes
    return response;
  } catch (error) {
    console.error("Error fetching dishes:", error);
  }
};

// Add a new dish
const createDish = async (dishData) => {
  try {
    const response = await axiosInstance.post("/dish", dishData); // POST request to /api/dishes
    console.log("Dish Created:", response);
    return response;
  } catch (error) {
    console.error("Error creating dish:", error);
  }
};

const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response;
  } catch (error) {
    console.error("Error creating dish:", error);
  }
};

const fetchDishByCategories = async (id) => {
  try {
    const apiUrl = `/dish/category/${id}`;
    const response = await axiosInstance.get(apiUrl);
    return response;
  } catch (error) {
    console.error("Error creating dish:", error);
  }
};

const updateDish = async (id, update) => {
  try {
    const apiUrl = `/dish/${id}`;
    const response = await axiosInstance.put(apiUrl, update);
    return response;
  } catch (error) {
    console.error("Error creating dish:", error);
  }
};

const deleteDish = async (id) => {
  try {
    const apiUrl = `/dish/${id}`;
    const response = await axiosInstance.delete(apiUrl);
    return response;
  } catch (error) {
    console.error("Error deleting dish:", error);
  }
};

export {
  fetchDishes,
  createDish,
  fetchCategories,
  fetchDishByCategories,
  updateDish,
  deleteDish,
};
