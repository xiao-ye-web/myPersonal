<template>
<div class="wenti">
  <Wenz></Wenz>
  <div class="wzcont">
    <Wzimg></Wzimg>
<div class="nrNav">
  <ul>
    <li v-for="item in nrArr" :key="item.nrid">
      <RouterLink :to="`/wenzhang/${item.src}`" active-class="active">{{item.name}}</RouterLink>
    </li>
  </ul>
</div>
<div class="nrCont">
    <RouterView></RouterView>
</div>
</div>
</div>
</template>

<script setup lang="ts" name="Article">
import Wenz from '@/components一般组件/文章组件/wenz.vue'
import Wzimg from '@/components一般组件/文章组件/wzimg.vue'
// 引入字路由
import { RouterLink,RouterView} from 'vue-router'
import { reactive } from 'vue'

// 数据
const nrArr = reactive([
  {nrid:1,src:'AIAgent',name:'AI-Agent'},
  {nrid:2,src:'Chuowu',name:'Problem'},
  {nrid:3,src:'neixin',name:'Inner-self'},
])
</script>

<style scoped>
.wenti{
  width: 100%;
  height: 100%;
  background-color: rgba(140, 110, 69,0);
  position: absolute;
  top: 50px;
  left: 0;
} 
.wzcont{
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255,0);
  position: absolute;
}
.nrNav{
  margin: 60px auto;
  width:30%;
  height: 50px;
  background-color: rgb(250, 209, 209,0);
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}
ul {
list-style: none;
display: flex;
justify-content: center;
align-items: center;
gap: 110px;
font-size: 12px;
height: 40px;
margin-top:5px;
}
 a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #000;
    font-size: 12px;
  }
   .active {
    color: rgb(179, 222, 208);
    background-color: rgba(255, 255, 255, 0.6);
  }
    li {
    width: 80px;
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255);
    flex-shrink: 0;
    transition: 0.3s;
    text-align: center;
  }
    li:hover{
    a {
    color: rgb(179, 222, 208);
    };
    background-color: rgba(255, 255, 255, 0.6);
  }
  .nrCont{
    width: 30%;
    height: 100%;
    background-color: rgb(255, 255, 255,0);
    margin: 290px auto;
  }
</style>
<style>
.slidePage-enter-from {
  transform: translateY(100px);
  opacity: 0;
}
.slidePage-enter-active {
  transition: all 0.4s ease;
}
.slidePage-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
.slidePage-leave-active {
  transition: all 0.4s ease;
}
</style>
