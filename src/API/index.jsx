import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const PORT = process.env.REACT_APP_PORT;

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}:${PORT}`,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = JSON.parse(localStorage.getItem("token"));
  config.headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    const statusCode = error.response.status;
    if (statusCode === 404) {
      window.location.href = "/not-found";
      return;
    }
    if (statusCode === 401) {
      window.location.href = "/login";
      return;
    }
    if (statusCode === 403) {
      window.location.href = "/forbidden";
      return;
    }
    if (statusCode === 500) {
      // show notification
      toast.error("System has an error");
      console.log("error", error);
      return;
    }
    throw error;
  }
);

export default axiosInstance;
