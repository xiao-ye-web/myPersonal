<template>
  <div class="aihead" v-for="item in aiArr" :key="item.aiid">
    <h2>{{item.aititle}}</h2>
    <p>{{item.aicontent}}</p>
  </div>
</template>

<script setup lang="ts" name="AI Agent">
import {ref,reactive} from 'vue'
const aiArr = reactive([
  {aiid:1,aititle:'Vue3的动画问题',aicontent:'作者在开发的过程中，经常出现路由页面渲染空白，以及动画失效等问题，我觉得这应该是一个可以注意的问题，希望可以得到解决。'},
  {aiid:2,aititle:'博客网站的优化',aicontent:'这个博客，还有许多可以优化的地方，作者也是第一次搭建这种大型的博客网站，还请各位在使用的时候，可以提出问题与需求，作者收到后，会尽快优化。'},
  {aiid:3,aititle:'前端看法',aicontent:'作者的第一个语言就是JavaScript，也是比较喜欢这个语言，不仅能够实现许多有趣的效果，而且生态也十分完善，在前端种有着绝对的地位，虽然现在AI的冲击对前端非常大，但是作者认为只要肯为自己赋能，那就肯定能够继续发展。'},
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