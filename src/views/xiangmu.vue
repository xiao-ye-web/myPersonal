<template>
  <div class="xiangmu">
    <Header></Header>
    <Deek></Deek>
    <Xiangmu01></Xiangmu01>
  </div>
  
</template>

<script setup lang="ts" name="Projects">
// 引入项目子组件
import Header from '@/components一般组件/项目组件/header.vue'
import Deek from '@/components一般组件/项目组件/deek.vue'
import Xiangmu01 from '@/components一般组件/项目组件/xiangmu01.vue'
</script>

<style scoped>
.xiangmu{
  width: 100%;
  height: 100%;
  position: absolute;
   /* background-color: rgb(195, 226, 226); */
  top: 50px;
  left: 0;
}
</style>