import axios from "axios";

const api = axios.create({
  baseURL: 'job-tracker-six-eta.vercel.ap',
});

export default api;
