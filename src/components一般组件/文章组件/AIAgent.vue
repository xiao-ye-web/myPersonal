<template>
  <div class="aihead" v-for="item in aiArr" :key="item.aiid">
    <h2>{{item.aititle}}</h2>
    <p>{{item.aicontent}}</p>
  </div>
</template>

<script setup lang="ts" name="AI Agent">
import {ref,reactive} from 'vue'
const aiArr = reactive([
  {aiid:1,aititle:'AI-Agent时代到来',aicontent:'AI-Agent是一种基于AI技术的智能体,它可以执行各种任务,如数据处理、决策、预测等。'},
  {aiid:2,aititle:'AI-Agent的便利',aicontent:'AI的到来,现在社会正在大量淘汰工人,不久后将不再需要人工,社会将迎来大改变,AI时代已经到来。'},
  {aiid:3,aititle:'AI-Agent的冲击',aicontent:'AI时代到来,冲击最大的应该就是程序员这个群体,社会将不再需要初级,中级,程序员,岗位将越来越少,程序员正在吞噬其他行业。'},
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