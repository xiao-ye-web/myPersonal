<template>
  <div class="store">
    <div style="display: flex;">
    <div class="time">
      <h3>白露凝霜</h3>
      <div class="day">
      <span>时辰:{{ hour }}</span><span>更:{{ minute }}</span><span>刻:{{ second }}</span>
    </div>
    <div class="nian">
      <span>星霜:{{ year }}</span><span>桂魄:{{ month }}</span><span>旦夕:{{ day }}</span>
    </div>
    </div>
    <div class="Tech-Stack">
<div class="title">技术栈</div>
<div style="display: flex; gap:60px;justify-content: center;
 margin-top: -17px;">
<div class="js">JavaScript</div><div class="js">Typescript</div>
<div class="js">Python</div><div class="ts">Vue3</div>
</div>
<div style="display: flex; gap:40px; justify-content: center;
 margin-top: 13px;" >
<div class="js">HTML5</div>
<div class="ts">Node.js</div><div class="ts">WebPack</div>
<div class="ts">CSS3</div>
</div>

    </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="myTime">
import {ref,onMounted,onUnmounted} from 'vue'

function getTime() {
const newTime = new Date()
return {
  year:newTime.getFullYear(),
  month:newTime.getMonth()+1,
  day:newTime.getDate(),
  hour:newTime.getHours(),
  minute:newTime.getMinutes(),
  second:newTime.getSeconds()
}
}
const year = ref(0)
const month = ref(0)
const day = ref(0)
const hour = ref(0)
const minute = ref(0)
const second = ref(0)
// 补零
function padZero(num:any) {
  return num < 10 ? '0' + num : num
}
function updateTime() {
  const res = getTime()
hour.value= padZero(res.hour)
minute.value = padZero(res.minute)
second.value = padZero(res.second)
month.value = padZero(res.month)
day.value = padZero(res.day)
year.value = padZero(res.year)
}
// 生命周期
let timer:number
onMounted(()=>{
  updateTime()
  timer = setInterval(() =>
  {updateTime()},1000)
})
onUnmounted(()=>{
  clearInterval(timer)}
)
</script>

<style scoped>
.store {
   width: 920px;
  height: 100px;
  background-color: rgba(247, 245, 246, 0.5);
  border-radius: 15px;
  margin-left: 22%;
  margin-top:19px ;
    border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
}
.time {
  width: 270px;
  height: 100px;
  color: aliceblue;
  background-color: rgb(34, 30, 30);
  border-radius: 15px 0 0 15px;
  transition: 0.5s;
}
.time:hover{
   background-color: rgba(34, 30, 30,0.6);
}
.Tech-Stack {
  width: 650px;
  height: 100px;
  background-color: rgba(220, 183, 183, 0.5);
  border-radius: 0 15px 15px 0;
  transition: 0.5s;
}
.Tech-Stack:hover{
  background-color: rgba(255, 255, 255, 0.8);
}
.js {
  width: 85px;
  height: 30px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  line-height: 30px;
  text-align: center;

}
.ts{
    width: 85px;
  height: 30px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  line-height: 30px;
  text-align: center;
}
h3 {
  margin-top: 5px;
  text-align: center;
  margin-bottom: 5px;
}
.day {
  margin-top: 5px;
  text-align: center;
}
.day,.nian>span{
  margin: 0 5px;
}
.nian {
  margin-top: 5px;
  text-align: center;
}
.title{
  width: 40px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 5px;
  background-color: antiquewhite;
  margin: 5px 5px;
  font-size: 10px;
}
</style>