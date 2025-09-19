import axios from "axios";

// We define the base URL of our backend API.
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export { api };