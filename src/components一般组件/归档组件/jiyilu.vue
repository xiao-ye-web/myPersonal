<template>

<div class="jiyu" v-for="item in jyArr" :key="item.id">
<img :src="item.src" class="img11">
<h1 class="title">{{item.time}}</h1>
<p>{{item.title}}</p>

</div>

</template>
<script setup lang="ts" name="Jiyilu">
import jy01 from '@/assets/youlian/jy01.jpg'
import jy02 from '@/assets/youlian/jy02.jpg'
import jy03 from '@/assets/youlian/jy03.jpg'
import jy04 from '@/assets/youlian/jy04.jpg'
import jy05 from '@/assets/youlian/jy05.jpg'

import {ref , reactive} from 'vue'
// 数据
const jyArr = reactive([
  {id:1,src:jy01,time:'2001',title:'少女手持流光溢彩的长剑，独自伫立于繁华都市的最高点。脚下是万家灯火的喧嚣，眼中却是超越尘世的清冷与坚定。'},
  {id:2,src:jy02,time:'2003',title:'少女手持流光溢彩的长剑，独自伫立于繁华都市的最高点。脚下是万家灯火的喧嚣，眼中却是超越尘世的清冷与坚定。'},
  {id:3,src:jy03,time:'2005',title:'少女手持流光溢彩的长剑，独自伫立于繁华都市的最高点。脚下是万家灯火的喧嚣，眼中却是超越尘世的清冷与坚定。'},
  {id:4,src:jy04,time:'2007',title:'少女手持流光溢彩的长剑，独自伫立于繁华都市的最高点。脚下是万家灯火的喧嚣，眼中却是超越尘世的清冷与坚定。'},
  {id:5,src:jy05,time:'2009',title:'少女手持流光溢彩的长剑，独自伫立于繁华都市的最高点。脚下是万家灯火的喧嚣，眼中却是超越尘世的清冷与坚定。'},
])
</script>
<style scoped> 
.jiyu{
  width: 420px;
  height:450px;
  /* background-color: rgb(255, 255, 255); */
  margin-left: 370px;
  /* margin-top: -270px; */
  margin-top: -250px;
  margin-bottom: 400px;
}
.img11 {
  width: 420px;
  border: 1px solid #ffffff;
  box-shadow: 0 0 10px 3px #f4dada;
  border-radius: 3px;
  transition: 0.5s;
}
.img11:hover{
  transform: scale(1.05);
  box-shadow: 0 0 10px 3px #ffffff;
}
.title{
  margin-left: 10px;
  font-size: 40px;
  color: rgba(159, 242, 236, 0.6);
}
p {
  line-height: 25px;
  /* 字间距 */
  letter-spacing: 2px;
  padding-left: 5px;
}

</style>