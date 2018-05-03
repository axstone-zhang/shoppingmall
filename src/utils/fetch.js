import axios from 'axios'
import store from '../store'
import router from '../router'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 超时设置
const service = axios.create({
  // baseURL: process.env.BASE_API,  // api的baseURL
  timeout: 5000   // 请求超时时间
})

// 请求拦截器
axios.interceptors.request.use(function(config) {
  return config;
}, function(error) {
  return Promise.reject(error);
})
// 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})

// 封装axios的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default service