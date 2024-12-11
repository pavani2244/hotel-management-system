import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Base URL for the backend APIs
  timeout: 10000, // Request timeout (optional, in milliseconds)
  headers: {
    "Content-Type": "application/json", // Default content type
    Accept: "application/json", // Default accept type
  },
});

// Add a response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response.data; // Simplify response by returning only the data
  },
  (error) => {
    // Handle errors (e.g., 4xx or 5xx responses)
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error.response?.data || error.message);
  }
);

export default axiosInstance;
