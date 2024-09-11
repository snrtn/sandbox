import axios from "axios";
import { getCookie, clearAuthToken } from "./auth";

const axiosInstance = axios.create({
  baseURL: "https://portfolioapi-liart.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      clearAuthToken();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
