"use strict";

import axios from "axios";

axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '/api/';


let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || "/api/"
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {

      return config;
    },
    function (error) {

      return Promise.reject(error);
    }
);


_axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
);

export const $axios = _axios;

export default {
  install: (app) => {
    app.config.globalProperties.$axios = _axios;
  }
};