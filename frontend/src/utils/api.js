import axios from 'axios';
import { cacheManager } from './performance';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for caching
apiClient.interceptors.request.use(
  (config) => {
    // Only cache GET requests
    if (config.method === 'get') {
      const cached = cacheManager.get(config.url);
      if (cached) {
        // Return cached data as fulfilled promise
        return Promise.reject({
          config,
          cached: true,
          data: cached,
        });
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Cache successful GET responses
    if (response.config.method === 'get') {
      cacheManager.set(response.config.url, response.data);
    }
    return response;
  },
  (error) => {
    // Handle cached responses
    if (error.cached) {
      return Promise.resolve({ data: error.data, cached: true });
    }
    return Promise.reject(error);
  }
);

export { apiClient, API };
export default apiClient;
