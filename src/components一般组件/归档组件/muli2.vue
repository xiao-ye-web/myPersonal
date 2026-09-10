<template>
  <div class="shugan"></div>
  <div class="shubox" v-for="item in shuye" :key="item.syid">
    <div class="shuzhi"></div>
    <div class="shuye">
      <h2 style="margin: 20px;  font-family: 'yafeng', sans-serif;">{{item.title}}</h2>
      <p>{{item.lo}}</p>
    </div>
  </div>
</template>

<script setup lang="ts" name="Mulu">
import { ref ,reactive} from 'vue'
const shuye = reactive([
  {syid:1,title:'Vue3',lo: '关于Vue3的一些看法与见解'},
   {syid:2,title:'博客',lo: '博客还有许多可以优化'},
  {syid:3,title:'JavaScript',lo: '关于JavaScript的一些看法与见解'},
])
</script>

<style scoped>
.shubox{
  width: 360px;
  height: 210px;
  /* background-color: rgb(24, 24, 102); */
  margin-bottom: 20px;
  position: relative;
  top: -2100px;
  left: 880px;

}
.shuzhi {
  width: 120px;
  height: 23px;
  background-color: rgba(143,78,53,0.6);
  transform: rotate(-25deg);
  position: absolute;
  border-radius: 2px;
  top: 150px;
  left: -10px;
}
.shuye {
  width: 230px;
  height: 120px;
  background-color: rgba(50, 89, 40,0.6);
  position: absolute;
  border-radius: 10px;
  margin-left: 100px;
  margin-top: 50px;
  transition: 0.5s;
    border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
}
.shuye:hover{
  transform: translateY(-10px);
  transform: scale(1.03);
  background-color: #ebd2d2;
}
p {
  text-align: center;
  font-family: 'yafeng', sans-serif;
}
</style>