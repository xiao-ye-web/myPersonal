<template>
  <div class="zhimeng">
   <h1 class="title">织梦</h1>
   <h3 class="t01">破土动工</h3>
   <div style="display: flex; gap: 40px;margin-left: 16%;margin-top: 50px;">

    <div class="textImg01" :class="asshow ? 'active' : 'not'">
    <img :src="textImg1">
  </div>
   <span class="text01"><p>“<span style="font-size: 25px;color:rgb(131, 221, 231)">叮！</span>我的小窝终于搭起框架啦！
虽然现在还只是个光秃秃的‘毛坯房’，</p><p>但每一行代码都是我自己敲下的砖瓦。</p><p>接下来，我要慢慢给它挂上小彩灯，铺上软软的地毯，再养一只赛博小猫。慢慢来，慢慢住满～ ”我的小窝正在施工中...</p><p>
虽然目前看起来还像个简陋的小帐篷，欢迎随时来我的数字小窝里做客呀～ ️”</p></span>
</div>
   <div style="display: flex; gap: 40px;margin-left: 16%;margin-top: 50px;">
   <span class="text02"><p>“<span style="font-size: 25px;color:rgb(131, 221, 231)">哇！</span>“历经沉淀与打磨，我的网站现已正式迈入第二阶段。</p><p>如果说第一阶段是初建时的探索与破土，那么现在的它，则更像是一座精心修剪、枝繁叶茂的线上花园。</p><p>在这里，我们不仅有了更深度的内容沉淀，也迎来了更流畅的交互体验。</p><p>愿这个全新的起点，能继续为你提供一个安放热爱、治愈现实的温柔角落。”</p></span>
    <div class="textImg02" :class="asshow01 ? 'active01' : 'not01'">
    <img :src="textImg2">
  </div>
</div>
  </div>
</template>

<script setup lang="ts" name="zhiMeng">
import {ref,onMounted,onUnmounted} from 'vue'
// 接收数据
import textImg1 from '@/assets/jpg/shuo01.jpg'
import textImg2 from '@/assets/jpg/shuo02.jpg'
// 数据
const asshow = ref(true)
const asshow01 = ref(false)
// 函数
function scrollNav (){
  // 获取网页的滚动距离
  const srcollTop = window.scrollY
  // 配置
  if (srcollTop >= 650){
     asshow.value = true
  }else{
     asshow.value = false
  }
  if (srcollTop >= 1000){
      asshow01.value = true
  }else{
     asshow01.value = false
  }
  }

onMounted(()=>{
  window.addEventListener('scroll',scrollNav)
  scrollNav()
})
// 跳转删除
onUnmounted(()=>{
  window.removeEventListener('scroll',scrollNav)
})
</script>

<style scoped>
.zhimeng {
  width: 100%;
  height: 1000px;
  /* background-color: rgba(215, 95, 159, 0.5); */
  border-radius: 15px;
  margin: 120px auto;
  /* background-color: rgba(255, 255, 255, 0.3); */
  /* position: absolute; */
}
.title {
  text-align: center;
  width: 90px;
  margin-left: 19%;
  font-family: 'yafeng', sans-serif;
  font-size: 45px;
  color: rgb(48, 47, 45);
}
.t01 {
    text-align: center;
  width: 120px;
  margin-top: 50px;
  margin-left: 18%;
  font-family: 'yafeng', sans-serif;
  font-size: 30px;
  color: rgb(231, 129, 129);
}
img {
width: 100%;
height:100%;
border-radius: 5px;
object-fit: cover;
}
p {
  margin: 15px 10px;
  color: rgb(32, 35, 35);
  font-size: 17px;
}
.text01 {
  width: 700px;
  height: 260px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  margin-bottom: 50px;
  transition: 0.7s;
}
.text01:hover {
  background-color: rgba(225, 231, 236,0.6);
}
.text02 {
  width: 700px;
  height: 260px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  margin-bottom: 50px;
  transition: 0.7s;
}
.text02:hover {
  background-color: rgba(225, 231, 236,0.6);
}
.textImg01 {
  width: 350px;
  height: 260px;
  border-radius: 5px;
  border: 1px solid rgba(68, 60, 60, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  opacity: 0;
}
/* 定义动画 */
@keyframes donghua {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes tuichu {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-20px);
  }
}
.active {
  animation: donghua 0.8s ease forwards;
}
.not {
  animation: tuichu 0.8s ease forwards;
}
.textImg02 {
  width: 350px;
  height: 260px;
  border-radius: 5px;
  border: 1px solid rgba(68, 60, 60, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  opacity: 0;
}
@keyframes donghua01 {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes tuichu01 {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(20px);
  }
}
.active01 {
  animation: donghua01 0.8s ease forwards;
}
.not01 {
  animation: tuichu01 0.8s ease forwards;
}
</style>