<template>
  <!-- <div class="page-wrap"> -->
<div class="nav" :class="{'navbg':isshow}">
<h3 title="欢迎来到我的小窝" style="font-family: 'yafeng', sans-serif;">ポチ酱 <span style="font-size: 25px;color:cyan;">の</span> 记忆回声</h3>
<ul>
  <li v-for="item in navArr" :key="item.navid">
    <RouterLink :to="item.src" active-class="active">{{ item.name }}</RouterLink>
  </li>
</ul>
<div style="width:200px;">
<input type="text" placeholder="搜索文章..." class="sou-suo">
</div>
</div>
<!-- </div> -->
   <div class="bg-blur">
  </div>

<!-- 内容展示区域 --> 
  <div class="content">

  <RouterView v-slot="{Component,route}">
    <Transition name="page" mode="out-in">
      <component :is="Component"
      v-if="Component"
      :key="route.path"
      />
    </Transition>
  </RouterView>
  </div>
</template>

<script setup lang="ts" name="App">
// 引入所有的路由工具
import { RouterView ,RouterLink} from 'vue-router'
// 导入过渡工具


import {ref,reactive,onMounted,onUnmounted} from 'vue'

// 数据
const navArr = reactive([
  {navid:1,src:'/shouye',name:'首页'},
  {navid:2,src:'/xiangmu',name:'项目'},
  {navid:3,src:'/shuoshuo',name:'说说'},
  {navid:4,src:'/wenzhang',name:'文章'},
  {navid:5,src:'/yinyue',name:'音乐'},
  {navid:10,src:'/view',name:'视界'},
  {navid:6,src:'/jiyi',name:'归档'},
  {navid:7,src:'/youlian',name:'友链'},
  {navid:8,src:'/zatan',name:'杂谈'},
  {navid:9,src:'/guanyu',name:'关于'},
  
])
// 导航背景色开关
// const islode = ref(true)
const isshow = ref(false)
const navht = ref(50)
// 封装函数
function scrollNav (){
  // 获取网页的滚动距离
  const srcollTop = window.scrollY
  // 配置
  if (srcollTop >= navht.value){
    isshow.value = true
  }else{
    isshow.value = false
  }
}
// 页面挂载时，开始监听滚动事件
onMounted(()=>{
  window.addEventListener('scroll',scrollNav)
  scrollNav()
})
// 跳转删除
onUnmounted(()=>{
  window.removeEventListener('scroll',scrollNav)
})
</script>

<style scoped>
.nav{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  /* 水平居中 */
  justify-content: center;
  align-items: center;
  /* 间距 */
  gap: 200px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: rgba(255, 201, 201, 0.6);
  transition: 0.3s;
  }
  .navbg{
    /* background-color: rgba(255, 201, 201, 0.6); */
   background-color: rgba(255, 255, 255,0.9);
  }

.content {
  width: 100%;
  height: 100vh;
  margin: 450px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  /* position: relative; */
}
.sou-suo {
display: block;
width: 150px;
height: 30px;
border-radius: 8px;
background-color: rgba(255, 255, 255, 0.5);
border:none;
box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
/* 提示文本空一格 */
padding-left: 10px;
transition: 0.3s;
outline:none;
}
/* 表单获取焦点变宽 */
.sou-suo:focus {
  width: 200px;
  box-shadow: 0 0 3px #eba5a5;
}
    .bg-blur {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      background-image: url('@/assets/jpg/beijing02.jpg');
      /* 背景重复 */
      background-repeat: no-repeat;
      /* 撑满背景 */
      background-size: cover;
      /* 背景固定 */
      background-position: center;
      background-attachment: fixed;
      /* filter: blur(7px); */
      /* opacity: 0.9; */
      transform: scale(1.1);
    }
/* .page-wrap{
min-width: 1200px; */
/* } */

  ul {
    display: flex;
      /* 水平居中 */
  justify-content: center;
  align-items: center;
  /* 间距 */
  gap: 25px;
    list-style: none;
    font-size: 12px;
    text-align: center;
    height: 40px;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #000;
    font-size: 12px;
  }
  li:hover{
    a {
    color: rgb(179, 222, 208);
    };
    background-color: rgba(255, 255, 255, 0.6);
  }
  .active {
    color: rgb(179, 222, 208);
    background-color: rgba(255, 255, 255, 0.6);
    
  }
  li {
    width: 50px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    flex-shrink: 0;
    transition: 0.3s;
  }
</style>
<style>
  #app {
    padding-top: 50px;
  }
  @font-face{
  font-family: 'yafeng';
  src: url('./assets/fonts/LiyuShoushu.ttf')format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
</style>
<style>
.page-holder{
  width: 100%;
  min-height: 100%;
}

.page-enter-from{
  opacity: 0;
  transform: translateY(20px);
}
.page-enter-active {
  transition: all 0.5s ease;
}
.page-enter-to{
  opacity: 1;
  transform: translateY(0);
}
.page-leave-from{
  opacity: 1;
}
.page-leave-active{
  transition: all 0.5s ease;
}
.page-leave-to{
  opacity: 0;
}
</style>