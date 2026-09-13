<template>
    <div class="view">
    <h1>次元档案</h1>
    <p>美好的时光，记忆，碎片，都将在这里汇聚。</p>
    <div class="sjbox">
    <div class="min-box" v-for="item in arr" :key="item.id">
    <img :src="item.sj01"  class="img01">
    <img :src="item.sj03"  class="img03">
    <img :src="item.sj02"  class="img02">
    <div style="display: flex;margin-left: 50px;position: absolute;top: 330px;">
    <h3 class="ll">{{item.name}}</h3>
    <span class="lll">{{item.time}}</span></div>
    <div class="tit">{{item.title}}</div>
    </div>
    </div>
     <div class="min-box-01">
        <img :src="sj08" alt="" class="img04">
        <img :src="sj09" alt="" class="img05">
        <img :src="sj11" alt="" class="img06">
        <div class="tl">孤独摇滚</div>
    </div>
    </div>
</template>

<script setup lang="ts" name="View">
import sj01 from '@/assets/png/sj01.png'
import sj02 from '@/assets/png/sj02.png'
import sj03 from '@/assets/png/sj03.png'
import sj08 from '@/assets/png/sj08.png'
import sj09 from '@/assets/png/sj09.png'
import sj11 from '@/assets/png/sj11.png'

import {reactive} from 'vue'
const arr = reactive([
    {id:1,sj01:sj01,sj02:sj02,sj03:sj03,name:'次元喵',time:'2026-09-08',title:'这里存放着次元碎片'},
    {id:2,sj01:sj01,sj02:sj02,sj03:sj03,name:'日常集',time:'2026-09-12',title:'这里存放着日常碎片'},
])
</script>

<style scoped>
.view{
    width: 100%;
    height: 100%;
    /* background-color: aqua; */
    position: absolute;
    top: 50px;
    left: 0;
}
h1 {
    width: 200px;
    margin-top: 30px;
    margin-left: 400px;
    font-size: 40px;
    color: rgb(43, 40, 40);
    font-family: 'yafeng', sans-serif;
}
p {
    width: 400px;
    margin-top: 20px;
    margin-left: 420px;
    font-size: 15px;
    color: rgb(57, 59, 61);
    font-family: 'yafeng', sans-serif;
}
.sjbox{
    display:flex;
    gap: 100px;
    width: 100%;
    height: 100%;
    margin-top: 30px;
    /* background-color: rgb(203, 197, 235); */
    position: absolute;
}
.min-box{
    width: 280px;
    height: 410px;
    margin-top: 50px;
    margin-left: 350px;
    /* background-color: rgb(169, 227, 203); */
    position: relative;
}
.min-box-01 {
    width: 410px;
    height: 350px;
    margin-top: 600px;
    margin-left: 250px;
    /* background-color: rgb(169, 227, 203); */
    position: relative;
}
.min-box-01:hover{
    .img04{
        transform: rotate(0deg);
        top: 0px;
        left: 340px;

    }
    .img05{
        transform: rotate(0deg);
        top: 0px;
        left: 675px;
    }
}
.img04,
.img05,
.img06 {
    width: 330px;
    height: 250px;
    object-fit: cover;
    position: absolute;
    margin-left: 70px;
    border: 6px solid rgb(255, 255, 255);
    transition: 0.5s;
}
.img04{
    transform: rotate(17deg);
    left: 40px;
    top: 30px;
}
.img05{
    left: -15px;
    transform: rotate(-5deg);
    top: 35px;
}
.img06{
    left: 5px;
    z-index: 10;
}
.tl {
    position: absolute;
    font-size: 20px;
    top: 100px;
    left: 20px;
    width: 20px;
    font-family: 'yafeng', sans-serif;
    writing-mode: vertical-rl;
    letter-spacing: 5px;
}
.min-box:hover {
    .img02{
        transform: rotate(0deg);
        top: 0px;
        left: -260px;
    }
    .img03{
        transform: rotate(0deg);
        top: 0px;
        left: 285px;
    }
}
.img01,
.img02,
.img03 {
    width: 250px;
    height: 330px;
    object-fit: cover;
    margin-left: 15px;
    border: 5px solid rgb(255, 255, 255);
    transition: 0.5s;
    position: absolute;
}
.img01 {
    z-index: 10;
}
.img03 {
    /* 角度 */
    left: 35px;
    transform: rotate(10deg);
    margin-left: 0px;
}
.img02 {
    /* 角度 */
    transform: rotate(-8deg);
    left: -10px;
    top: 5px;
}
.ll {
    margin-top: 20px;
    width: 100px;
    text-align: center;
    margin-left: 10px;
}
.lll {
    margin-top: 25px;
    width: 70px;
    height: 20px;
    border-radius: 5px;
    text-align: center;
    font-size: 12px;
    color: rgb(86, 90, 93);
    background-color: aliceblue;
}
.tit {
margin-left: 85px;
position:absolute;
 top: 380px;
 font-family: 'yafeng', sans-serif;
}
</style>