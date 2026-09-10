<template>
  <div class="aihead" v-for="item in aiArr" :key="item.aiid">
    <h2>{{item.aititle}}</h2>
    <p>{{item.aicontent}}</p>
  </div>
</template>

<script setup lang="ts" name="AI Agent">
import {ref,reactive} from 'vue'
const aiArr = reactive([
  {aiid:1,aititle:'程序员学历问题',aicontent:'作者觉得，在程序员这个行业中，学历固然重要，但是能力也不能欠缺，两者结合才能达到最高的上限。'},
  {aiid:2,aititle:'大专计算机能学吗？',aicontent:'其实作者就是大专计算机，首先承认大专确实是目前程序员里面最低学历，对于很多高于大专学历的人，嘲讽，其实也能够理解，但是大专生只要能够拥有顶尖的能力，或者多年的开发经验，也是能够从事程序员的工作。'},
])

</script>

<style scoped>
.aihead{
width: 95%;
height: 150px;
background-color: rgba(221, 233, 233,0.6);
margin: 25px auto;
 transition: 0.5s;
}
h2{
  font-size: 24px;
  height: 50px;
  line-height: 50px;
  margin: 0 20px;
  font-family: 'yafeng', sans-serif;
}
p {
  width: 100%;
    font-family: 'yafeng', sans-serif;
    line-height: 25px;
    border-radius: 5px;
}
.aihead:hover {
  background-color: rgb(215, 226, 237);
}
</style>