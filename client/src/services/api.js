import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_REST_API_URL,
  withCredentials: true,
});

//const googleApi = axios

export default api;
