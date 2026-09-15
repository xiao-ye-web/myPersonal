<template>
<div class="home-preson">
  <div class="one-line">
<el-avatar @click="zw" class="avatar" shape="square" :size="90" :src="touxiang02"/>
<div class="text">
<h2 @click="zw">One Li</h2>
<p style="font-size: 12px;margin-top: 10px;">很开心与大家学习交流技术喵！！！</p>
</div>
</div>
<div class="two-line">
<div class="wen-zhang">

  <span @click="wen"><h2 class="num1">11</h2>
<span class="biao-qian">文章</span></span>

  <span @click="say"><h2 class="num2">4</h2>
<span class="biao-qian">杂谈</span></span>

  <span @click="link"><h2 class="num3">2</h2>
<span class="biao-qian">链</span></span>
</div>
<!-- <div class="link"> -->
<ul>
  <li style="list-style: none;" v-for="item in linkArr" :key="item.id">
<el-avatar shape="square" :size="20" :src="item.src"/>
  </li>
</ul>
</div>
</div>
<!-- </div> -->
</template>

<script setup lang="ts" name="home-preson">
import touxiang02 from '@/assets/jpg/touxiang02.jpg'
import { useRouter } from 'vue-router'
import { ref ,reactive} from 'vue'
import bilibili from '@/assets/jpg/bilibili.png'
import email from '@/assets/jpg/email.png'
import github from '@/assets/jpg/github.png'
const router = useRouter()
// 数据
const linkArr = reactive([
  {id:1,name:'b站',src:bilibili},
  {id:2,name:'邮箱',src:email},
  {id:3,name:'github',src:github},
])

// 函数方法
function wen() {
  router.push('/wenzhang')
}
function say() {
  router.push('/zatan')
}
function link() {
  router.push('/youlian')
}
function zw (){
  router.push('/guanyu')
}
</script>

<style scoped>
.home-preson {
  width:550px;
  height:250px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-left: 23%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  transition: 0.5s;
}
.home-preson:hover {
  transition: 0.7s;
  transform: translateY(-3px); 
  background-color: #ffffff;
}
.one-line {
   display: flex;
  gap: 0px;
 width: 100%;

}
.avatar {
  margin: 20px 30px;
  border-radius: 8px;
  border: 2px solid #e3c7c7;
  box-shadow: 0 0 10px rgba(242, 142, 142, 0.5);
}
.text {
  margin-top: 40px;
}
.biao-qian {
font-size: 12px;
display: block;
width: 30px;
text-align: center;
}
.wen-zhang {
  width: 200px;
  display: flex;
  gap: 40px;
  margin-top: 40px;
  margin-left: 20px;
}
.num1 {
  width: 30px;
  text-align: center;
  color: #4ad3ef;
}
.num2 {
  width: 30px;
  text-align: center;
  color: #e2838d;
}
.num3 {
  width: 30px;
  text-align: center;
  color: #8a6ee7;
}
.two-line,ul {
  display: flex;
  gap: 100px;
  ul {
    gap: 30px;
    width: 190px;
    height: 40px;
    margin-top: 55px;
    }
  }
 li {
  display: flex;
  align-items: center;
  justify-content: center;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    background-color: rgba(254, 254, 255,0.8);
    border-radius: 10px;
 }
</style>