import axios from "axios";

const API_BASE_URL = "https://api.slingacademy.com/v1/";
const SECONDS = 30;
const MILISECONDS = 1000;
const TIMEOUT = SECONDS * MILISECONDS;

const SERVER = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});

SERVER.interceptors.response.use(
  
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorised
      return Promise.reject(error?.response.data);
    }
    if (error.response?.status === 403) {
      // Forbidden
      return Promise.reject(error?.response.data);
    }

    if (error.response?.status === 500) {
      // Internal Server Error
      return Promise.reject(error?.response.data);
    }
    if (error.response?.status === 508) {
      // Bad Request
      return Promise.reject(error?.response.data);
    }

    return Promise.reject(error?.response?.data);
  }
);

export default SERVER;

