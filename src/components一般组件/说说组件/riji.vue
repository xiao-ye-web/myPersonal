<template>
<!-- 第一个盒子格式，遍历 -->
 <div class="content" v-for="item in rijiArr" :key="item.rijiid">
<img :src="item.src">
<div class="tog">{{item.tog}}</div>
<div class="title">{{item.title}}</div>
 </div>
</template>

<script setup lang="ts" name="RiJi">
import shuo01 from '@/assets/jpg/shuo01.jpg'
import {ref,reactive} from 'vue'
const rijiArr = reactive([
  {rijiid:1,src:shuo01,tog:'#劳累  #想休息',title:'好久没有看到过这么美丽的天空了'},
  {rijiid:2,src:shuo01,tog:'#劳累  #想休息',title:'好久没有看到过这么美丽的天空了'},
])
</script>

<style scoped>
.content{
  width: 1000px;
  height: 600px;
  /* background-color: aqua; */
  margin-left: 380px;
  margin-bottom: 100px;
  margin-top: 100px;
}
img {
  width: 50%;
  height: 300px;
  background-color: rgb(255, 255, 255);
  margin: 20px 50px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
}
.tog {
  font-size: 18px;
  font-weight: bold;
  color: rgb(30, 28, 28);
  margin: 20px 50px;
  font-family: 'yafeng', sans-serif;
}
.title{
  height: 42px;
  font-size: 18px;
  /* font-weight: bold; */
  color: rgb(30, 28, 28);
  margin: 20px 50px;
  font-family: 'yafeng', sans-serif;
}
</style>