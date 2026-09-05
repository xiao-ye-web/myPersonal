<template>
  <div class="one">
  <homePreson></homePreson>
  <Music></Music>
  </div>
  <astext></astext>
  <div class="two">
     <forin></forin>
     <day></day>
  </div>
 
</template>

<script setup lang="ts" name="Home">
import homePreson from '@/components一般组件/home/home-preson.vue'
import  Music from '@/components一般组件/home/asMusic.vue'
import astext from '@/components一般组件/home/astext.vue'
import forin from '@/components一般组件/home/forin.vue'
import day from '@/components一般组件/home/day.vue'

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