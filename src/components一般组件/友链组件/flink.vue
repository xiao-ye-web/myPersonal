<template>
  <div class="flink">
<div class="min-box" v-for="item in fsArr" :key="item.id">
  <img :src="item.bj" alt="" class="boxImg">
  <div style="display: flex; gap: 15px;">
  <el-avatar class="svg" shape="circle" :size="45" :src="item.toux"/>
  <div style="margin-top:8px;">
  <div class="fsid">{{item.fname}}</div>
  <p class="fsid">{{item.title}}</p>
</div>
  </div>
</div>
  </div>
</template>
<script setup lang="ts" name="Friends">
import fs1 from '@/assets/youlian/01.webp'
import fs2 from '@/assets/youlian/02.webp'
import { ref ,reactive} from 'vue'
// 数据
const fsArr = reactive([
  {id:1,fname:'朋友名称1',title:'朋友网站简介1',bj:fs1,toux:fs1},
  {id:2,fname:'朋友名称2',title:'朋友网站简介2',bj:fs2,toux:fs2},
])
</script>
<style scoped>
.flink{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 76%;
  /* height: 1000px; */
  align-content: flex-start;
  /* background-color: rgb(150, 73, 78); */
  position: absolute;
  left: 220px;
  top: 500px;
}
.min-box{
  width: 290px;
  height: 220px;
  margin-left: 20px;
  margin-top: 40px;
}
.boxImg{
  width: 260px;
  margin-left: 15px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  transition: 0.5s;
}
.boxImg:hover {
  transform: scale(1.03);
   border: 1px solid rgba(148, 235, 201, 0.8);
  box-shadow: 0 2px 5px rgba(148, 235, 201, 0.8);
}
.svg {
  margin-top: 5px;
  margin-left: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  transition: 0.5s;
}
.svg:hover {
    transform: scale(1.05);
   border: 1px solid rgba(148, 235, 201, 0.8);
  box-shadow: 0 2px 5px rgba(148, 235, 201, 0.8);
}
.fsid{
  line-height: 20px;
  font-family: 'yafeng', sans-serif;
  color: rgb(151, 195, 234);
}
</style>