<template>
  <ul class="ul">
    <li></li>
    <li></li>
  </ul>
  <img :src="ttbb" alt="">
</template>
<script setup lang="ts" name="Fsimg">
import ttbb from '@/assets/png/05.png'
</script>
<style scoped>
img{
  position: absolute;
  width: 200px;
  left: 80px;
  top: 100px;
}
ul {
  position: absolute;
  left: 280px;
  top: 120px;
   transform: rotate(45deg);
}
li {
  list-style: none;
  width: 13px;
  height: 18px;
  background-color: #f3c1c1;
  border-radius: 50%;
  margin: 15px 5px;
}
/* 选择第一个li */
li:first-child{
  background-color: #3c6fb7;
  transform: scale(1.5);
}
</style>