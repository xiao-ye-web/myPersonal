<template>
  <div class="ml">
    <Mulu></Mulu>
    <Muli2></Muli2>
    <div class="archives">
      <h1>时间的记忆</h1>
    </div>
  </div>
</template>

<script setup lang="ts" name="Archives">
import Mulu from '@/components一般组件/归档组件/mulu.vue'
import Muli2 from '@/components一般组件/归档组件/muli2.vue'

</script>

<style scoped>
.ml{
    width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(167, 192, 192,0.3);
  top: 50px;
  left: 0;
}
.archives{
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 50px;
}
h1{
  width: 180px;
  text-align: center;
  font-family: 'yafeng', sans-serif;
}
</style>