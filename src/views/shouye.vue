<template>
  <div>
    <logo></logo>
  <div class="one">
  <homePreson></homePreson>
  <Music></Music>
  </div>
  <astext></astext>
  <div class="two">
     <forin></forin>
     <div>
     <day></day>
     <div style="display: flex;">
   <myStore></myStore>
   <myStore02></myStore02>
  </div>
  </div>
  </div>
  <myTime></myTime>
  <zhiMeng></zhiMeng>
  </div>
</template>

<script setup lang="ts" name="Home">
import homePreson from '@/components一般组件/home/home-preson.vue'
import  Music from '@/components一般组件/home/asMusic.vue'
import astext from '@/components一般组件/home/astext.vue'
import forin from '@/components一般组件/home/forin.vue'
import day from '@/components一般组件/home/day.vue'
import myStore from '@/components一般组件/home/mystore.vue'
import myStore02 from '@/components一般组件/home/mystore02.vue'
import myTime from '@/components一般组件/home/myTime.vue'
import zhiMeng from '@/components一般组件/home/zhiMeng.vue'
import logo from '@/components一般组件/home/logo.vue'

import 'animate.css'
</script>

<style scoped>
.one {
  display: flex;
}
.two {
  display: flex;
}
</style>