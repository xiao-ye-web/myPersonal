<template>
<div class="deek">
  <input type="text" placeholder="请输入项目名称,技术栈,项目关键字....">
</div>
</template>

<script setup lang="ts" name="Deek">

</script>

<style scoped>
.deek{
  margin: 20px auto;
  width: 500px;
}
input{
  width: 100%;
  height: 40px;
  border-radius: 15px;
  padding-left: 20px;
  font-size: 15px;
  background-color: rgb(255, 255, 255,0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  border: none;
  outline: none;
  transition: 0.5s;
}
input:hover {
  background-color: rgba(211, 211, 211, 0.8);
}
</style>