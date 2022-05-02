import axios from 'axios'; //*导入axios插件
import { Toast } from "antd-mobile";
import { getToken } from "@/tools"

// 允许后端将数据保存到cookie
axios.defaults.withCredentials = true;

// loading 相关 ------- start --------
let loadingRequestCount = 0;
let toast = 0;

function openLoading() {
  if (loadingRequestCount === 0) {
    toast = Toast.show({
      content: '加载中...',
      icon: 'loading',
    })
  }
  loadingRequestCount++;
}

function closeLoading() {
  loadingRequestCount--;
  if (loadingRequestCount === 0) {
    toast.close();
  }
}

// loading 相关 ------- end --------


// 请求拦截器
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000 * 10,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    token: getToken() || ''
  }
});

// 请求统一处理
instance.interceptors.request.use(
  async (config) => {
    const {closeL} = config;
    // closeL 可以控制是否打开loading 默认开启
    !closeL && openLoading();
    return config
  },
  (error) => Promise.reject(error)
)

// 对返回的内容做统一处理
instance.interceptors.response.use(
  (response) => {
    closeLoading()
    let { data, status } = response;
    if (status === 200) {
      switch (data.code) {
        case 2000:
          return data.data;
      }
    }
    return Promise.reject(response.data.msg)
  },
  (error) => {
    closeLoading()
    if (error) {
      console.log(error)
    }
    return Promise.reject(error)
  }
)

export default instance;
