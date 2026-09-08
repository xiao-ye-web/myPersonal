// 引入axios共享
import request from '@/utils工具封装/axios共享'
// 将封装好的axios函数向外暴露
export const getRequest = () => {
  return request.get('/request')
}
// 如果有需要获取更精确的数据就在地址后面加一个配置对象，里面就可以params和headers
// return request.get('/request',{
//   params: {id: 1},
//   headers: {'Content-Type': 'application/json'}
// })
// 这个看起来逻辑更清晰，但是不实用

// export const getRequest = () => {
//   return request({
//     url: '/request',
//     method: 'get'
//   })
// }

// 取值
// 1先引入接口文件
// 2利用async和await 存储返回数据
// 3使用数据
// import { getRequest } from '@/apis/request'
// try{
//      const shuju = async ()=>{
//   const res = await getRequest()
//   console.log(res)
// }
// }catch(e){
//   console.log(e)
// }