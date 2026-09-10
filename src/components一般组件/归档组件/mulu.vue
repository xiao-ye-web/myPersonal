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
  {syid:1,title:'AI时代',lo: '关于AI的一些看法与见解'},
   {syid:2,title:'AI便利',lo: '关于AI的一些便利与优势'},
  {syid:3,title:'AI冲击',lo: '关于AI的一些冲击与挑战'},
])
</script>

<style scoped>
.shugan{
  width: 60px;
  height: 1500px;
  background-color: rgba(143,78,53);
  margin: 0 auto;
}
.shubox{
  width: 360px;
  height: 210px;
  /* background-color: rgb(24, 24, 102); */
  margin-bottom: 20px;
  position: relative;
  top: -1500px;
  left: 461px;

}
.shuzhi {
  width: 120px;
  height: 23px;
  background-color: rgba(143,78,53,0.6);
  transform: rotate(25deg);
  position: absolute;
  border-radius: 2px;
  top: 150px;
  left: 255px;
}
.shuye {
  width: 230px;
  height: 120px;
  background-color: rgba(50, 89, 40,0.6);
  position: absolute;
  border-radius: 10px;
  margin-left: 35px;
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