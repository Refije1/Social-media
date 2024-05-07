import axios from "axios";

export const BASE_URL = "http://localhost:4200";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((request) => {
  if (!request.headers) {
    request.headers = {};
  }
  request.headers.Accept = "application/json";

  // Attach token to request if available
  const jwtToken = localStorage.getItem("authToken");
  if (jwtToken) {
    request.headers.Authorization = `Bearer ${jwtToken}`;
  }

  // Send content-type with POST/PUT requests
  if (request.method === "POST" || request.method === "PUT") {
    request.headers["Content-Type"] = "application/json";
  }

  return request;
});

// if request succeeds with status code 1001 throw error
axiosInstance.interceptors.response.use((response) => {
  if (response.data.code === 1001) {
    localStorage.removeItem("authToken");
    window.location.reload();
  }

  return response;
});
