<template>
  <div class="ml">
    <h1 class="title">时间的记忆</h1>
    <p>“把散落的时光串成线，将那些闪光的瞬间妥帖收藏。欢迎来到我的时间记忆馆。”</p>
      <div class="xian">
  </div>
    <Jiyilu></Jiyilu>
    <Jy02></Jy02>
  </div>
</template>

<script setup lang="ts" name="Archives">
import Jiyilu from '@/components一般组件/归档组件/jiyilu.vue'
import Jy02 from '@/components一般组件/归档组件/jy02.vue'
</script>

<style scoped>
.ml{
    width: 100%;
  height: 100%;
  position: absolute;
  /* background-color: rgb(225, 233, 233); */
  top: 50px;
  left: 0;
}
.title{
  width: 50px;
  /* 字体 */
    font-family: 'yafeng', sans-serif;
    /* 字间距 */
    letter-spacing: 14px;
    writing-mode: vertical-rl;
    /* 字体大小 */
    font-size: 40px;
    margin :50px;
    color: rgba(160, 231, 146, 0.9);
}
.xian{
  width: 3px;
  height: 4000px;
  margin-left: 50%;
  background-color: #fbf3f3;
  position: absolute;
  border-radius:3px;
  top: 0px;
}
p {
    width: 150px;
    height: 500px;
    line-height: 30px;
  /* 字体 */
    font-family: 'yafeng', sans-serif;
    /* 字间距 */
    letter-spacing: 5px;
    writing-mode: vertical-rl;
    /* 字体大小 */
    font-size: 15px;
    position: absolute;
    left: 50px;
    top: 190px;
    color: rgba(36, 34, 34, 0.9);
}
</style>