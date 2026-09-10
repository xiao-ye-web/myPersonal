<template>
  <div class="img-title">点击可爱的一里，可以拿到提示哟！！</div>
<img :src="png02" alt="" title="作者声明:开发不完全需要手动点击文章，实在抱歉">
</template>

<script setup lang="ts" name="Wzimg">
import png02 from '@/assets/png/02.png'
</script>

<style scoped>
img{
  position: absolute;
  width: 300px;
  margin-left: 240px;
  margin-top: 260px;
  background-color: rgba(255, 255, 255, 0);
}
.img-title{
  position: absolute;
  width: 300px;
  margin-left: 240px;
  margin-top: 220px;
  color: rgb(255, 255, 255);
  background-color: rgb(250, 250, 250,0);
  font-family: 'yafeng', sans-serif;
}
</style>