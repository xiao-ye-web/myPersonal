<template>
<div class="header">
  <h1 class="title" title="冲开迷雾，迎接我们的黎明">迷雾-破晓</h1>
  <h3>深度探索</h3>
  <p>自己开发项目的时候一些问题和解决方式，与大家分享。</p>
  <input type="text" placeholder="   搜索文章...">
</div>
</template>

<script setup lang="ts" name="Wenz">

</script>

<style scoped>
.header{
  width: 100%;
  height: 80px;
  background-color: rgba(234, 245, 241, 0);
} 
.title{
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  color: #312d2d;
  font-family: 'yafeng', sans-serif;
text-align: center;
margin-top: 50px;
}
h3{
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  font-family: 'yafeng', sans-serif;
  letter-spacing: 2px;
}
p {
  font-size: 15px;
  color: #251f1f;
  font-family: 'yafeng', sans-serif;
  text-align: center;
  margin-top: 30px;
}
input {
  width: 465px;
  height: 40px;
  margin-top: 40px;
  margin-left: 36%;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 15px;
  background-color: rgb(255, 255, 255,0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  transition: 0.5s;
}
input:hover {
  background-color: rgba(214, 206, 206, 0.8);
}
</style>