<template>
<div class="text" 
@mouseenter="stopTimer" 
@mouseleave="startTimer">
  <transition name="fade" mode="out-in">
<p :key="txindex">{{ textArr[txindex].title }}</p>
</transition>
</div>
<span v-for="(item,index) in textArr" :key="item.textid" @click="txindex = index">
</span>
</template>

<script setup lang="ts" name="text">
import {ref,reactive,onMounted,onUnmounted} from 'vue'
let txindex:any = ref(0)
const textArr:any = reactive([
  {textid:1,title:'把烦恼交给风，把目光留给山川与湖海，在这里，让眼睛去旅行。'},
  {textid:2,title:'收集世间的光影与微风，只为在每一次滚动中，与你分享大自然的温柔。'},
  {textid:3,title:'脚步丈量不到的地方，目光可以抵达；愿你在这里，遇见未知的风景。'},
  {textid:4,title:'定格每一瞬的惊艳，收藏每一帧的热爱，这里是属于自然的视觉档案馆。'},
  {textid:5,title:'万物皆有裂痕，那是光照进来的地方；而风景，是地球写给人类的情书。'},
])
// 函数
let timr:number | null = null
function nextImg(){
  txindex.value = txindex.value>=textArr.length-1?0:txindex.value+1
}
function startTimer(){
  stopTimer()
   timr = setInterval(()=>{
    nextImg()
  }
  ,2500)}
  function stopTimer(){
if(timr){
  clearInterval(timr)
  timr = null
}
}
onMounted(()=>{
  startTimer()
})
onUnmounted(()=>{
  stopTimer()
})
</script>

<style scoped>
.text {
  width: 35%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: rgba(73, 70, 70, 0.5);
  border-radius: 15px;
  margin: 18px auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  transition: 0.5s;
  color: rgb(237, 225, 225);
  position: relative;
}
p {width: 100%;
  height: 50px;
margin:0 auto;
}
.text:hover {
  transition: 0.7s;
background-color: rgb(23, 19, 19);
}
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.4s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 0.4s;
  position: absolute;
  top: 0;
  left: 0;
}
.fade-leave-to{
  opacity: 0;
}
</style>