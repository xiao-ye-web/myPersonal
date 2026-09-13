<template>
  <div class="music">
<div class="music-head">
<div class="yuan"></div>
<h1>小雾神-心做</h1>
<p class="zz">苏苏不会rap、安然</p>
<div class="bf">
<div style="display: flex;gap: 10px;margin-top: 10px;">
  <span>00:00</span>
  <input type="range" class="jdt">
  <span>00:00</span>
</div>
<div style="display: flex;gap: 20px;justify-content: center;align-items: center;  width: 400px;background-color: aqua;height: 50px;margin-top: 5px;">
<img :src="xia" class="shang">
<img src="" class="xxxx">
<img :src="xia" class="xia">
</div>
</div>
<div class="jj">"作者:去关注苏苏不会rap"</div>
</div>
<div class="music-nav">
<div class="lyric">歌词</div>
<div class="list"><span>播放列表</span><span class="num">50</span></div>
</div>
<div class="music-content">


</div>
  </div>
</template>

<script setup lang="ts" name="Music">
import xia from '@/assets/png/shang.png'
</script>

<style scoped>
.bf {
  width: 600px;
  height: 100px;
  margin-left: 280px;
  margin-top: 90px;
  background-color: rgb(230, 242, 242);
  position: absolute;
}
.jdt {
  width: 480px;
  margin-top: 10px;
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  /* 已播放：白色稍亮，未播放：白色更淡 */
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.9) var(--progress, 0%),
    rgba(255, 255, 255, 0.55) var(--progress, 0%),
    rgba(255, 255, 255, 0.55) 100%
  );
}
.jdt::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;    /* ← 改这里：圆点宽度 */
  height: 15px;   /* ← 改这里：圆点高度 */
  border-radius: 50%;
background-color:rgb(136, 161, 224);
}
.music {
  position: absolute;
  top: 50px;
  left: 0px;
  width: 100%;
  height: 100%;
  /* background-color: rgb(220, 235, 235); */
}
.xia,.shang {
  width: 15px;
  height: 15px;
}
.shang{
  transform: rotate(180deg);
}
.music-head,.music-nav,.music-content {
  width: 900px;
  border-radius: 15px;
}
.music-head {
  margin-left:400px;
  margin-top: 60px;
  height: 250px;
  background-color: aliceblue;
  position: relative;
    border: 1px solid rgba(223, 217, 217, 0.2);
  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.8);
} 
.yuan {
  width: 200px;
  height: 200px;
  background-color: rgb(80, 91, 91);
  border-radius: 50%;
  position: absolute;
  top: 25px;
  left: 30px;
  border: 40px solid rgb(56, 54, 54);
}
h1 {
  position: absolute;
  top: 15px;
  left: 280px;
  background-color: aquamarine;
  font-size: 26px;
}
.zz {
  position: absolute;
  margin-top: 5px;
  top: 55px;
  left: 280px;
  background-color: rgb(65, 91, 187);
  font-size: 16px;
}
.jj {
  position: absolute;
  margin-top: 5px;
  top: 190px;
  left: 280px;
  background-color: rgb(65, 91, 187);
  font-size: 16px;
}
.music-nav {
  display: flex;
  gap:20px ;
  justify-content: center;
  align-items: center;
  margin: 40px 400px;
  height: 60px;
  background-color: rgba(237, 231, 231, 0.5);
    border: 1px solid rgba(223, 217, 217, 0.2);
  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.8);
}
.lyric,.list {
  width: 420px;
  height: 45px;
  border-radius: 15px;
  line-height: 45px;
  text-align: center;
  font-size: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255,0.7);
    border: 1px solid rgba(223, 217, 217, 0.2);
  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.8);
}
.num {
position: absolute;
width: 30px;
height: 20px;
line-height: 20px;
margin-top: 12.5px;
margin-left: 10px;
font-size: 12px;
text-align: center;
border-radius: 15px;
background-color: rgb(206, 183, 229);
}
.music-content {
  margin: 40px 400px;
  height: 600px;
  background-color: aliceblue;
    border: 1px solid rgba(223, 217, 217, 0.2);
  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.8);
}
</style>