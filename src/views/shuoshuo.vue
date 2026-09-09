<template>
    <div class="talks">
      <Header></Header>
      <RiJi></RiJi>
    </div>
</template>

<script setup lang="ts" name="Talks">
import Header from '@/components一般组件/说说组件/header.vue'
import RiJi from '@/components一般组件/说说组件/riji.vue'
</script>

<style scoped>
.talks{
  width: 100%;
  height: 100%;
  position: absolute;
  /* background-color: rgb(185, 209, 209); */
  top: 50px;
  left: 0;
}
</style>