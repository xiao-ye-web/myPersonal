<template>
<div class="logo">
  <div class="logo-text">ChooChoo</div>
  <div class="logo-line">Welcome to My Bouncing Code World</div>
  </div>
</template>

<script setup lang="ts" name="Logo">

</script>

<style scoped>
.logo {
  width: 300px;
  height: 100px;
  background-color: rgba(200, 214, 227,0);
  margin-top: -300px;
  position: absolute;
  text-align: center;
  transform: translateX(50%);
  margin-left: 550px;
  color: rgb(55, 47, 47);
}
.logo-text{
  font-size: 30px;
  /* 加粗 */
  font-weight: bold;
  /* 每个自己间距 */
  letter-spacing: 3px;
}
.logo-line{
  margin-top: 10px;
  font-size: 15px;
  /* 加粗 */
  /* font-weight: bold; */
  /* 每个自己间距 */
  letter-spacing: 2px;
}

</style>