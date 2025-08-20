import axios from 'axios';

export const getApi = () => {
  const api = axios.create({
    baseURL: 'https://wefit-movies.vercel.app/api',
    timeout: 10000,
  })

  api.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api;
}