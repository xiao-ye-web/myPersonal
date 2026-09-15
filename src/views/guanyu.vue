<template>
  <div class="about">
    <div class="about-box">
      <div class="about-img-box">
      <img :src="bj16" alt="" class="about-img">
    </div>
      <img :src="tx02" alt="" class="about-tx">
      <div class="about-cont">
        <h2>关于我</h2>
        <p class="jj">WELCOME TO MY BLOG,I'M ONE LI</p>
        <p class="person">个人简介</p>
        <p class="person">你好，我是 One Li</p>
        <p class="person">专注于前端，后端，以及AI Agent相关的技术开发应用</p>
        <div style="display: flex;align-items: center;margin-top: 8px;margin-left: 60px;">
          <img :src="feiji" alt="" class="fj">
          <span class="one">研究路线及方向</span>
        </div>
        <ul>
          <li class="li1">介绍:基于Vue.js框架搭建的个人博客，整体动漫风格，多个页面及组件，功能多种</li>
          <li class="li1">内容:博客内容丰富，主要以日常生活记录为主，作者个人觉得比较有意思的是"图片"、"标签"板块</li>
          <li class="li1">功能:目前仅为观赏性的静态博客，后续将持续更新为全栈动态功能博客</li>
        </ul>
        <div style="display: flex;align-items: center;margin-top: 8px;margin-left: 60px;">
          <img :src="diannao" alt="" class="fj">
          <span class="one">软件工程能力</span></div>
          <ul>
            <li class="li2">前端:熟练使用Vue.js、TypeScript、Vite等技术栈开发业务及各类后台管理系统</li>
            <li class="li2">后端:Python、FastAPI ....</li>
            <li class="li2">AI Agent:暂无，后续更新</li>
          </ul>
          <p class="person1">期待各位的评论，一起探讨技术！</p>
          <hr class="hr1">
      </div>
      <div class="about-comment">评论区待更新</div>
    </div>
  </div>
</template>

<script setup lang="ts" name="AboutUs">
import feiji from '@/assets/jpg/feiji.png'
import diannao from '@/assets/jpg/diannao.png'
import tx02 from '@/assets/jpg/touxiang02.jpg'
import bj16 from '@/assets/bj/bj16.png'
</script>

<style scoped>
.about {
  position: absolute;
  top: 50px;
  left: 0px;
  width: 100%;
  height: 100%;
  /* background-color: rgb(206, 233, 233); */
}
.about-box {
  width: 650px;
  height: 930px;
  margin-top: 30px;
  margin-left: 525px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255,0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  position: relative;
}
.about-img-box,.about-img {
  width: 650px;
  height: 200px;
  object-fit: cover;
  background-position-y: -80px;
  background-color: rgb(186, 208, 228);
  border-radius: 25px 25px 0 0;
  transition: 0.5s;
  overflow: hidden;
}
.about-img:hover {
      transform: scale(1.1);
}
.about-tx {
  width:90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  z-index: 10;
  position: absolute;
  left: 60px;
  top: 155px;
  transition: 0.5s;
}
.about-tx:hover {
  transform: scale(1.1);
}
.about-cont {
  width: 650px;
  height: 500px;
  /* background-color: rgba(255, 255, 255,0.8); */
  position: absolute;
}
h2 {
  width: 100px;
  margin-left: 60px;
  margin-top: 50px;
  /* background-color: aqua; */
}
.jj {
  width: 500px;
  margin-left: 60px;
  margin-top: 5px;
  margin-bottom: 60px;
  font-weight: 700;
  font-size: 15px;
  color: rgb(195, 115, 213);
  /* background-color: aqua; */
  font-family: 'yafeng', sans-serif;
}
.person,.li1,.li2,.person1 {
  width: 650px;
  margin-left: 60px;
  margin-top: 8px;
  font-size: 13px;
  font-family: 'yafeng', sans-serif;
}
.person1 {
  margin-top: 20px;
  font-size: 15px;
  font-family: 'yafeng', sans-serif;
}
.li1,.li2 {
  list-style: none;
  margin-left:60px;
}
.fj {
  width: 20px;
  margin-right: 5px;
}
.one {
  color: rgb(208, 122, 132);
}
.about-comment {
  width: 650px;
  height: 250px;
  background-color: rgba(164, 225, 225, 0.3);
  margin-top: 500px;
}
.hr1 {
  margin-top:20px;
  width:550px;
  margin-left: 50px;
  height: 1px;
   border: none;
   background-color: rgb(188, 226, 226);
}
</style>
