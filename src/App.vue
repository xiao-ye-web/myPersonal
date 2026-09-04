<template>
  <!-- <div class="page-wrap"> -->
<div class="nav">
<h3>ポチ酱の记忆回声</h3>
<ul>
  <li v-router-link-active><RouterLink to="/shouye" active-class="active">首页</RouterLink></li>
  <li v-router-link-active><RouterLink to="/xiangmu" active-class="active">项目</RouterLink></li>
  <li v-router-link-active><RouterLink to="/jiyi" active-class="active">归档</RouterLink></li>
  <li v-router-link-active><RouterLink to="/wenzhang" active-class="active">文章</RouterLink></li>
  <li v-router-link-active><RouterLink to="/yinyue" active-class="active">音乐</RouterLink></li>
  <li v-router-link-active><RouterLink to="/shuoshuo" active-class="active">说说</RouterLink></li>
  <li v-router-link-active><RouterLink to="/youlian" active-class="active">友链</RouterLink></li>
  <li v-router-link-active><RouterLink to="/zatan" active-class="active">杂谈</RouterLink></li>
  <li v-router-link-active><RouterLink to="/guanyu" active-class="active">关于</RouterLink></li>
</ul>
<div style="width:200px;">
<input type="text" placeholder="搜索文章..." class="sou-suo">
</div>
</div>
<!-- </div> -->
   <div class="bg-blur">
  </div>
  <div style="margin: 0 auto;width: 300px;height:65px;font-size: 20px;text-align: center;">
<h3 style="margin-top: 50px;font-family: 'yafeng', sans-serif;color:black;">後藤独ひとり</h3>
<p style="margin-top: 20px;font-size: 15px;font-family: 'yafeng', sans-serif;color:azure;d">欢迎来到ポチの记忆小窝</p>
  </div>
  <!-- <div style="width: 100px;height: 1000px;background-color: blue;">
  </div> -->

<!-- 内容展示区域 -->
 <div class="content">
  <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts" name="App">
// 引入所有的路由工具
import { RouterView ,RouterLink} from 'vue-router'
</script>

<style scoped>

.content {
  width: 90%;
  height: 300px;
  margin: 200px auto;
  background-color: antiquewhite;
  border: 1px solid #000;
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
}
/* 表单获取焦点变宽 */
.sou-suo:focus {
  width: 200px;
}
    .bg-blur {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      background-image: url('@/assets/jpg/beijing01.jpg');
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
  }
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
