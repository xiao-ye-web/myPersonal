<template>
<div class="wenti">
  <Wenz></Wenz>
  <Wzbox></Wzbox>
</div>
</template>

<script setup lang="ts" name="Article">
import Wenz from '@/components一般组件/文章组件/wenz.vue'
import Wzbox from '@/components一般组件/文章组件/wzbox.vue'
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
  /* background-color: rgba(187, 159, 119, 0.9); */
  position: absolute;
  top: 50px;
  left: 0;
} 
</style>
