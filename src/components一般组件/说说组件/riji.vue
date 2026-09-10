<template>
<!-- 第一个盒子格式，遍历 -->
 <div class="content" v-for="item in rijiArr" :key="item.rijiid">
<img :src="item.src">
<div class="tog">{{ item.time }}</div>
<div class="tog">{{item.tog}}</div>
<div class="title">{{item.title}}</div>
 </div>
</template>

<script setup lang="ts" name="RiJi">
import shuo01 from '@/assets/jpg/shuo01.jpg'
import shuo02 from '@/assets/jpg/shuo02.jpg'
import {ref,reactive} from 'vue'
const rijiArr = reactive([
  {rijiid:1,src:shuo02,tog:'#劳累  #想休息',time:'2026-08-15',title:'突然生出的想法，打算自己搭建一个博客网站，今天也是很累，不过成就感也是慢慢的。'},
  {rijiid:2,src:shuo01,tog:'#舒服  #喜欢夏天',time:'2026-08-09',title:'在房间呆久了，今天突然想出门，没想到刚好碰到了日落，空气环境也很好。'},
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