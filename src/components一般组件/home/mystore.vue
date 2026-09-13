<template>
  <div class="store" @click="guanyu">
    <img :src="touxiang03" alt="">
  <h3>今日状态</h3>
  <p>#学习 #抑郁</p>
  </div>
</template>

<script setup lang="ts" name="myStore">
import touxiang03 from '@/assets/jpg/touxiang03.jpg'

import { useRouter } from 'vue-router'
const router = useRouter()
function guanyu() {
  router.push('/guanyu')
}
</script>

<style scoped>
.store {
   width: 150px;
  height: 120px;
  background-color: rgba(221, 229, 225, 0.5);
  border-radius: 15px;
  margin-left: 3%;
  margin-top:19px ;
  position: relative;
}
img {
  width: 150px;
  height: 120px;
  border-radius: 15px;
object-fit: cover;
}
h3 {
  position: absolute;
  color: rgb(18, 18, 18);
  left: 10px;
  bottom: 30px;
  font-size: 15px;
}
p {
  position: absolute;
  color: rgb(18, 18, 18);
  left: 10px;
  bottom: 10px;
  font-size: 12px;
  font-family: 'yafeng', sans-serif;
}
</style>