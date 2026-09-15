<template>
  <div class="box">
    <div class="min-box" v-for="item in arr" :key="item.id">
      <h3 class="time">{{item.time}}</h3>
      <hr>
      <div class="cont">{{item.tit}}</div>
      <div class="const">
        <img :src="item.src">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="Topics">
import bj12 from '@/assets/bj/bj12.jpg'
import bj13 from '@/assets/bj/bj13.jpg'
import bj14 from '@/assets/bj/bj14.jpg'
import bj15 from '@/assets/bj/bj15.png'
import { reactive } from 'vue';
const arr = reactive([
  {id:4,src:bj15,time:'9月14日',tit:'音乐:今天完善博客的音乐模块，第一次做音乐模块花了很多时间，踩了很多坑，歌单，歌词，内容位置计算真的很烦！'},
  {id:3,src:bj14,time:'9月06日',tit:'筑基:目前框架已经搭建差不多了，剩下的就是补全组件内容，还有一些创新的UI思路，还是决定动漫风格，今天博客完成20%'},
  {id:2,src:bj13,time:'9月04日',tit:'启航:今天开始了我博客的搭建，没有UI的灵感，需要思考的比较多，第一天进度非常慢，第一个页面的一半组件都没有写完，还是感觉很累'},
  {id:1,src:bj12,time:'8月09日',tit:'博客的设计:作者80%以动漫为元素，运用了Vue3、Vite搭建，用网站的形式记录自己的日常，目前还只是静态网页，后续作者可能会开发为全栈博客'},
])
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  margin-top: 30px;
  /* background-color: rgba(255, 255, 255, 0.9); */
  position: absolute;
}
.min-box {
  width: 710px;
  height: 160px;
  margin-top: 100px;
  margin-left: 480px;
  /* background-color: rgb(243, 235, 235); */
  position: relative;
}
h3 {
  margin-left: 20px;
  position: absolute;
  color: rgb(69, 66, 66);
}
hr {
  width: 550px;
  height: 1px;
  background-color: rgba(254, 254, 254, 0.3);
  position: absolute;
  border: none;
  top: 12px;
  left: 115px;
}
.cont {
  width: 680px;
  height: 80px;
  line-height: 20px;
  font-size: 16px;
  letter-spacing: 1px;
  margin-top: 43px;
  margin-left: 10px;
  background-color: rgb(175, 220, 230);
  border-radius: 15px;
  padding: 20px 20px;
  color: rgb(40, 36, 36);
  font-family: 'yafeng', sans-serif;
  border: 1px solid rgba(223, 217, 217, 0.2);
  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.8);
  transform: rotate(-3deg);
  position: absolute;
  z-index: 1;
  transition: 0.5s;
}
.cont:hover {
  transform: rotate(3deg);
  transform: translate(-10px, -10px);
}
.const {
  width: 680px;
  height: 80px;
  background-color: rgb(255, 255, 255);
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 15px;
  border: 1px solid rgba(223, 217, 217, 0.2);
  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.8);
  position: absolute;
  top: 50px;
  left: 5px;
  transform: rotate(1deg);
  transition: 0.5s;
}
img {
  width: 680px;
  height: 80px;
  object-fit: cover;
  border-radius: 15px;
}
.const:hover {
  transform: rotate(0deg);
  transform: translateY(50px);
}
</style>