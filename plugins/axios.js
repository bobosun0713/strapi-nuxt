import axios from "axios";
import Cookies from "js-cookie";

let service;
if (process.client) {
  service = axios.create({
    baseURL: "/api/",
    timeout: 60000,
  });
} else {
  service = axios.create({
    baseURL: "http://localhost:1337/api/",
    timeout: 60000,
  });
}

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const get = (url, params, config = {}) =>
  service.get(url, {
    ...config,
    params,
  });
const deletes = (url, params, config = {}) =>
  service.delete(url, {
    ...config,
    params,
  });
const post = (url, params, config = {}) => service.post(url, params, config);
const put = (url, params, config = {}) => service.put(url, params, config);

export default {
  get,
  deletes,
  post,
  put,
};
