<template>
<div class="png"
@mouseenter="stopTimer" 
@mouseleave="startTimer">
<transition name="fade">
  <img :src="imgArr[arrIndex]?.src" :key="arrIndex">
</transition>
  <ul>
    <li v-for="(item,index) in imgArr" :key="item.imgid" @click="arrIndex = index" :class="{'active':arrIndex == index}"></li>
  </ul>
  <p class="p1">ANIME CAROUSEL  #梦想</p>
  <h3 @click="shijie">喧嚣--避难所--梦想--热爱</h3>
  <p class="p2">动漫是喧嚣现实里的一方温柔避难所，用治愈的笔触，抚平我们在生活里留下的每一道褶皱。</p>
</div>
</template>

<script setup lang="ts" name="forin">
import lunbo01 from '@/assets/jpg/lunbo01.jpg'
import lunbo02 from '@/assets/jpg/lunbo02.jpg'
import lunbo03 from '@/assets/jpg/lunbo03.jpg'
import lunbo04 from '@/assets/jpg/lunbo04.jpg'
import lunbo05 from '@/assets/jpg/lunbo05.jpg'

import { useRouter } from 'vue-router'
const router = useRouter()
// 跳转
function shijie(){
  router.push('/view')
}
import {ref,reactive,onMounted,onUnmounted} from 'vue'
// 数据
const arrIndex = ref(0)
const imgArr = reactive([
  {imgid:1,src:lunbo01},
  {imgid:2,src:lunbo02},
  {imgid:3,src:lunbo03},
  {imgid:4,src:lunbo04},
  {imgid:5,src:lunbo05},
])

let timr:number | null = null
// 判断下标 实现循环
function nextImg(){
  arrIndex.value = arrIndex.value>=imgArr.length-1?0:arrIndex.value+1
}
// 封装定时器 开启
function startTimer(){
  stopTimer()
   timr = setInterval(()=>{
    nextImg()
  }
  ,1200)}
// 停止
function stopTimer(){
if(timr){
  clearInterval(timr)
  timr = null
}
}
onMounted(()=>{
  startTimer()
})
onUnmounted(()=>{
  stopTimer()
})
</script>

<style scoped>
.png {
   width: 450px;
  height: 300px;
  background-color: rgba(242, 242, 242, 0.5);
  border-radius: 15px;
  margin-left: 22%;
    border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  margin-top: 20px;
  position:relative;
}
img {
  width: 100%;
  height: 100%;
   border-radius: 15px;
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 400px;
  height: 30px;
  color: aliceblue;
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
}
ul li {
  list-style: none;
  width: 8px;
  height: 4px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255);
}
ul li.active{
  transition: 0.3s;
  transform: scale(1.3);
  background-color: rgb(105, 204, 234);
  box-shadow: 0 0 15px rgb(110, 219, 176);
}
.p1 {
  width: 160px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid rgb(255, 255, 255);
  font-size: 10px;
  /* 字间距 */
  letter-spacing: 2px;
  border-radius: 15px;
  position: absolute;
  left: 10px;
  bottom: 90px;
  background-color: rgb(145, 150, 236);
  color: aliceblue;
}
h3 {
  position: absolute;
  bottom: 60px;
  left: 10px;
  color: rgb(242, 245, 247);
}
.p2 {
  position: absolute;
  bottom: 20px;
  font-size: 12px;
  left: 10px;
  color: rgba(222, 230, 237,0.8);
}
</style>
<style>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.4s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 0.4s;
  position: absolute;
  top: 0;
  left: 0;
}
.fade-leave-to{
  opacity: 0;
}
</style>