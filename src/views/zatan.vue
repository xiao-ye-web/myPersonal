<template>
  <div class="zt01">
    <h1 class="zt">生活与日记</h1>
    <p>分享自己的学习经历，记录自己的日常生活</p>
    <hr>
    <Topics></Topics>
  </div>
</template>

<script setup lang="ts" name="Topics">
import Topics from '@/components一般组件/杂谈组件/zt01.vue'
</script>

<style scoped>
.zt01 {
      width: 100%;
  height: 2000px;
  /* background-color: rgb(251, 236, 237); */
  position: absolute;
  top: 50px;
  left: 0;
}
.zt{
    font-size: 40px;
  font-weight: bold;
  font-family: 'yafeng', sans-serif;
  margin-top: 50px;
  margin-left: 400px;
}
p{
    font-size: 15px;
    font-family: 'yafeng', sans-serif;
    margin-top: 20px;
    margin-left: 450px;
}
hr {
  width: 800px;
  background-color: rgb(205, 235, 204);
  height: 2px;
  margin-left: 400px;
  margin-top: 20px;
  border: none;
}
</style>