<template>
<div class="null">
<div class="jiyu" v-for="item in jyArr01" :key="item.id">
<img :src="item.src" class="img11">
<h1 class="title">{{item.time}}</h1>
<p>{{item.title}}</p>
</div>
</div>

</template>
<script setup lang="ts" name="Jiyilu">

import jy06 from '@/assets/youlian/jy06.jpg'
import jy07 from '@/assets/youlian/jy07.jpg'
import jy08 from '@/assets/youlian/jy08.jpg'
import jy09 from '@/assets/youlian/jy09.jpg'
import jy10 from '@/assets/youlian/jy10.jpg'
import {ref , reactive} from 'vue'
// 数据

const jyArr01 = reactive([
  {id:6,src:jy06,time:'2002',title:'少女手持流光溢彩的长剑，独自伫立于繁华都市的最高点。脚下是万家灯火的喧嚣，眼中却是超越尘世的清冷与坚定。'},
  {id:7,src:jy07,time:'2004',title:'少女手持流光溢彩的长剑，独自伫立于繁华都市的最高点。脚下是万家灯火的喧嚣，眼中却是超越尘世的清冷与坚定。'},
  {id:8,src:jy08,time:'2006',title:'少女手持流光溢彩的长剑，独自伫立于繁华都市的最高点。脚下是万家灯火的喧嚣，眼中却是超越尘世的清冷与坚定。'},
  {id:9,src:jy09,time:'2008',title:'少女手持流光溢彩的长剑，独自伫立于繁华都市的最高点。脚下是万家灯火的喧嚣，眼中却是超越尘世的清冷与坚定。'},
  {id:10,src:jy10,time:'2010',title:'少女手持流光溢彩的长剑，独自伫立于繁华都市的最高点。脚下是万家灯火的喧嚣，眼中却是超越尘世的清冷与坚定。'},
])
</script>
<style scoped> 
.jiyu{
  width: 420px;
  height:450px;
  /* background-color: rgb(255, 255, 255); */
  margin-left: 920px;
  margin-bottom: 150px;
  /* margin-top: -270px; */

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
.null{
  position: absolute;
  width: 400px;
  left: 0;
  top: 400px;
}
</style>