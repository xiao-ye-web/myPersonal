// 引入axios
import axios from 'axios'
// 实例化一个axios
// 调用函数 参数是一个配置对象
// 负责基地址  以及请求超时时间
const server = axios.create({
  // 基地址
  baseURL: 'http://localhost:3000',
  // 请求超时时间
  timeout: 5000
})
// 给server添加请求拦截器
// 返回config配置
server.interceptors.request.use(config => config,
  // 请求失败返回
  e => Promise.reject(e)
)
// 添加响应拦截器
server.interceptors.response.use(res => res),
  // 响应失败返回
  (e: any) => Promise.reject(e)

// 默认导出封装好的基地址
export default server