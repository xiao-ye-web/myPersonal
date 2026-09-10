<template>
  <div class="youlian" :class="{'fsactive':bb}">
    <Fsimg></Fsimg>
    <button class="btn" @click="qiehuan">ざこ!  !   点击切换背景</button>
    <div style="display: flex;gap: 10px; justify-content: center; align-items: center;width: 100%;height: 400px;">
    <img :src="tb" class="one">
    <h1 class="head">期待你的加入</h1>
  </div>
  <div style="display: flex; gap: 3px; align-items: center;margin-left: 300px;">
  <img :src="bt" class="two">
  <h2>友情链接</h2>
  </div>
  <Flink></Flink>
  </div>
</template>

<script setup lang="ts" name="Friends">
import tb from '@/assets/png/03.png'
import bt from '@/assets/png/04.png'
import Flink from '@/components一般组件/友链组件/flink.vue'
import Fsimg from '@/components一般组件/友链组件/fsimg.vue'
import { ref } from 'vue'

// 变量
const bb = ref(false)
// 函数
function qiehuan(){
  bb.value = !bb.value
}
</script>

<style scoped>
.youlian{
  width: 100%;
  height: 1000px;
  background-color: rgb(251, 236, 237);
  position: absolute;
  top: 50px;
  left: 0;
}
.fsactive {
  background-color: rgb(36, 34, 34);
}
.head{
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  font-family: 'yafeng', sans-serif;
  margin-top: 200px;
}
.one{
  width: 40px;
  height: 40px;
  margin-top: 200px;
}
.two{
  width: 30px;
  height: 30px
}
.btn{
  position: absolute;
  width: 180px;
  height: 40px;
  top: 100px;
  left: 320px;
  font-size: 15px;
  /* 字间距 */
  letter-spacing: 1px;
  border-radius:10px;
  background-color: rgb(228, 235, 240);
  border: none;
  box-shadow: 0 0 10px rgba(220, 183, 183, 0.8);
  transition: 0.5s;
}
.btn:hover{
  background-color: rgb(255, 252, 252);
}
</style>