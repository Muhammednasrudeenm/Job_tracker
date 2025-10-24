import axios from "axios";

const api = axios.create({
  baseURL: 'https://job-tracker-2-s0yd.onrender.com',
});

export default api;
