<template>
<div class="view" 
@mouseenter="guanbi"
@mouseleave="kaiqi" >
<transition name="fade">
  <img :src="bjImgArr[bjIndex]?.bjImg" :key="bjIndex">
  </transition>
  <ul>
    <li v-for="(item,index) in bjImgArr" :key="item.bjid" @click="bjIndex = index" :class="{'active':bjIndex == index}"></li>
  </ul>
  <h3 @click="shijie">叽叽喵</h3>
  <p class="p1">岁月执笔、光影研墨，在人间大地上写就的一首无言长诗。</p>
</div>
</template>

<script setup lang="ts" name="Day">
// 数据
import { useRouter } from 'vue-router'
const router = useRouter()

// 引入图片数据
import {ref,reactive,onMounted,onUnmounted} from 'vue'
import bjImg01 from '@/assets/jpg/fengjing01.jpg'
import bjImg02 from '@/assets/jpg/fengjing02.jpg'
import bjImg03 from '@/assets/jpg/fengjing03.jpg'
import bjImg04 from '@/assets/jpg/fengjing04.jpg'
import bjImg05 from '@/assets/jpg/fengjing05.jpg'
// 声明一个下标
const bjIndex = ref(0)
// 定义timer ts规范要么是数字或者是空值
let timer:number | null = null

const bjImgArr = reactive([
  {bjid:1,bjImg:bjImg01},
  {bjid:2,bjImg:bjImg02},
  {bjid:3,bjImg:bjImg03},
  {bjid:4,bjImg:bjImg04},
  {bjid:5,bjImg:bjImg05},
])
// 新值赋值
function gImg(){
  bjIndex.value = bjIndex.value>=bjImgArr.length-1?0:bjIndex.value+1
}
function shijie(){
  router.push('/view')
}
// 开启定时器
 const kaiqi = ()=>{
  guanbi()
  timer = setInterval(()=>{
    gImg()
  },2500)
}
// 关闭定时器
const guanbi = ()=>{
  if(timer){
    clearInterval(timer)
  }
  timer = null
}
onMounted(()=>{
  kaiqi()
})

onUnmounted(()=>{
  guanbi()
})



</script>

<style scoped>
.view {
   width: 460px;
  height: 160px;
  background-color: rgba(231, 216, 216, 0.5);
  border-radius: 15px;
  margin-left: 3%;
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
  position: absolute;
  color: aliceblue;
  transform: translateX(-50%);
  width: 100px;
  gap: 10px;
  left: 88%;
  bottom: 10px;
}
ul li {
  width: 10px;
  height: 4px;
  list-style: none;
  background-color: aliceblue;
  border-radius: 10px;
}
.active {
  background-color: #eba5a5;
}
h3 {
  position: absolute;
  bottom: 50px;
  left: 10px;
  height: 30px;
  border-bottom: 3px solid rgb(231, 117, 184);
  color:aliceblue ;
  font-family: 'yafeng', sans-serif;
  }
  .p1 {
    position: absolute;
    bottom: 20px;
    color: aliceblue;
    font-size: 12px;
    left: 10px;
  }
</style>

