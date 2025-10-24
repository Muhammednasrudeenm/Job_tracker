import axios from "axios";

const api = axios.create({
  baseURL: 'https://job-tracker-1-ybir.onrender.com',
});

export default api;
