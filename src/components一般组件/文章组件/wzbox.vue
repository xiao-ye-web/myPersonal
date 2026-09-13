<template>
  <div class="wzbox">
    <div class="min-box" v-for="item in arr" :key="item.id">
      <div class="min-img">
      <img :src="item.src"></div>
      <div>
      <h3>{{item.title}}</h3>
      <p>{{item.cont}}</p>
      <div style="display: flex; gap: 5px;">
      <span>{{item.tag}}</span>
      <span>{{item.tag1}}</span>
      <span>{{item.tag2}}</span>
    </div>
    </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="Wzbox">
import bj01 from '@/assets/bj/bj01.jpg'
import bj02 from '@/assets/bj/bj02.png'
import bj03 from '@/assets/bj/bj03.png'
import bj04 from '@/assets/bj/bj04.png'
import bj05 from '@/assets/bj/bj05.png'
import bj06 from '@/assets/bj/bj06.png'
import bj07 from '@/assets/bj/bj07.png'
import bj08 from '@/assets/bj/bj08.png'
import bj09 from '@/assets/bj/bj09.png'
import bj10 from '@/assets/bj/bj10.png'
import bj11 from '@/assets/bj/bj11.png'
import {reactive} from 'vue'

const arr = reactive([
  {id:1,src:bj01,title:'迷雾之雨',cont:'优雅处理API竞态条件',tag:'#Vue.js',tag1:'#异步',tag2:'#JavaScript'},
  {id:2,src:bj02,title:'破晓之光',cont:'引入Wasm实现动画',tag:'#WebAssembly',tag1:'#Rust',tag2:'#性能优化'},
  {id:3,src:bj03,title:'数据之森',cont:'海量数据的美学平衡点',tag:'#ECharts',tag1:'#数据可视化',tag2:'#前端设计'},
  {id:4,src:bj04,title:'深蓝之海',cont:'构建高可用数据库集群',tag:'MySQL',tag1:'#分布式架构',tag2:'#暗紫长发'},
  {id:5,src:bj05,title:'暗夜独行',cont:'告别环境玄学，一键部署',tag:'Docker',tag1:'#DevOps',tag2:'#Linux'},
  {id:6,src:bj06,title:' 暗影低语',cont:'彻底搞懂z-index失效',tag:'CSS3',tag1:'#前端基础',tag2:'#Bug排查'},
  {id:7,src:bj07,title:'摸鱼指南',cont:'用脚本解放双手，拒绝加班',tag:'Python',tag1:'#自动化办公',tag2:'#J效率工具'},
  {id:8,src:bj08,title:'破晓之剑',cont:'构筑前后端防线抵御攻击',tag:'网络安全',tag1:'#全栈开发',tag2:'#漏洞防御'},
  {id:9,src:bj09,title:'夏日微风',cont:'用代码复刻夏日的清凉动感',tag:'CSS3',tag1:'#前端动画',tag2:'#创意设计'},
  {id:10,src:bj10,title:' 森林秘境',cont:'像植物光合作用般处理请求',tag:'Node.js',tag1:'#后端开发',tag2:'#服务器'},
  {id:11,src:bj11,title:'雨后初霁',cont:'告别代码冲突，理清分支脉络',tag:'Git',tag1:'#团队协作',tag2:'#版本管理'},
])
</script>
<style scoped>
.wzbox{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 1320px;
  height: 400px;
  margin-top: 180px;
  margin-left: 220px;
  /* background-color: rgba(156, 189, 220, 0.9); */
  position: absolute;
} 
.min-box{
  width: 270px;
  height: 260px;
  margin-top: 30px;
  margin-left: 30px;
  background-color: rgba(245, 245, 245, 0.8);
  border-radius: 10px;
 border: 1px solid rgba(223, 217, 217, 0.2);
  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.8);
  transition: 0.5s;
}
.min-box:hover{
  transform: translateY(-5px);
  img{
    transform: scale(1.1);
  }
}
.min-img{
  border-radius: 10px 10px 0 0;
  width: 270px;
  height: 152px;
  overflow: hidden;
}
img {
  width: 270px;
  height: 152px;
  border-radius: 10px 10px 0 0;
  transition: 0.3s;
}
h3,p,span {
  margin-left: 10px;
  font-family: 'yafeng', sans-serif;
}
h3 {
  font-size: 20px;
  margin-top: 15px;
  color: rgb(35, 36, 37);
}
p {
  font-size: 13px;
  margin-top: 15px;

}
span {
  display: block;
  margin-top: 15px;
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 5px;
  color: rgb(146, 132, 229);
  background-color: aliceblue;
}
</style>