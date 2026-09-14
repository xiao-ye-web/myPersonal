<template>
  <div class="music">
<div class="music-head">
<div class="yuan" :class="{spinning: store.playing}">
  <img :src="currentSong.cover" class="yuan-img">
</div>
<h1>{{ currentSong.name }}</h1>
<p class="zz">{{ currentSong.artist }}</p>
<div class="bf">
<div style="display: flex;gap: 10px;margin-top: 10px;">
  <span>{{ formatTime(store.currentTime) }}</span>
  <input type="range" class="jdt"
  :value="progressPercent"
        :style="{ '--progress': progressPercent + '%' }"
        @input="e => store.seek(Number((e.target as HTMLInputElement).value) / 100)"/>
  <span>{{ formatTime(store.duration) }}</span>
</div>
<div style="display: flex;gap: 20px;justify-content: center;align-items: center;  width: 400px;height: 50px;margin-top: 5px;">
<img @click="store.prev" :src="xia" class="shang">
<img @click="store.toggle" :src="store.playing ? zt : bf" class="xxxx">
<img @click="store.next" :src="xia" class="xia">
</div>
</div>
<div class="jj">"作者:温馨的歌声，治愈空洞的心身"</div>
</div>
<div class="music-nav">
<div class="lyric" @click="tab = 'lyric'" :class="{'l-active': tab === 'lyric'}">歌词</div>
<div class="list" @click="tab = 'list'" :class="{'l-active': tab === 'list'}"><span>歌单</span><span class="num" >7</span></div>
</div>
<div class="music-content">
<div v-if="tab === 'list'" class="cont-list" ref="listBox">
<ul class="ul">
  <li v-for="(song,i) in store.playlist" :key="song.id"
   :class="{'m-active': i === store.currentIndex}">
    <span class="font">{{ `0${i + 1}` }}</span>
    <img :src="song.cover" alt="" class="list-img">
    <div style="width: 150px;">
  <div class="m-name">{{ song.name }}</div>
  <div class="m-zz">{{ song.artist }}</div></div>
  <img v-if="i === store.currentIndex" :src="store.playing ? zt : bf" alt="" class="m-store">
  </li>
</ul>
</div>
<div v-if="tab === 'lyric'" class="cont-lrc" ref="lrcBox">
  <ul>
    <li class="gc">{{ lyrics[activeIndex - 3]?.text || '' }}</li>
    <li class="gc">{{ lyrics[activeIndex - 2]?.text || '' }}</li>
    <li class="gc">{{ lyrics[activeIndex - 1]?.text || '' }}</li>
    <li class="gc active">{{ lyrics[activeIndex]?.text || '' }}</li>
    <li class="gc">{{ lyrics[activeIndex + 1]?.text || '' }}</li>
    <li class="gc">{{ lyrics[activeIndex + 2]?.text || '' }}</li>
    <li class="gc">{{ lyrics[activeIndex + 3]?.text || '' }}</li>
  </ul>
</div>
</div>
  </div>
</template>

<script setup lang="ts" name="Music">
import { ref, reactive,computed,watch,onMounted } from 'vue'
import { useMusicStore } from '@/stores/counter'
import xia from '@/assets/png/shang.png'
import zt from '@/assets/mjpg/zt.png'
import bf from '@/assets/mjpg/bf.png'
const tab =ref('list')

interface Song {
  id: number
  name: string
  artist: string
  url: string
  cover: string
}
const lyrics = computed(() => store.lyrics)
const store = useMusicStore()
const lrcBox = ref<HTMLElement | null>(null)

  const activeIndex = computed(() => {
  const t = store.currentTime
  let idx = 0
  for (let i = 0; i < store.lyrics.length; i++) {
    const line = store.lyrics[i]
    if(!line) break
    if(line.time <= t) idx = i
    else break
  }
  return idx
})

// 自动滚到中间
watch(activeIndex, (i) => {
  const box = lrcBox.value
  const el = box?.children[i] as HTMLElement
  if (el && box) {
    box.scrollTo({
      top: el.offsetTop - box.clientHeight / 2 + el.clientHeight / 2,
      behavior: 'smooth'
    })
  }
})

onMounted(() => {
  store.loadLyric(0)
})

// 切歌换歌词
watch(() => store.currentIndex, (i) => {
  store.loadLyric(i)
})

const currentSong = computed<Song>(() =>
  store.playlist[store.currentIndex] ?? { id: store.currentIndex, name: '', artist: '', url: '', cover: '' }
)

const progressPercent = computed(() =>
  store.duration ? (store.currentTime / store.duration) * 100 : 0
)

function formatTime(sec: number): string {
  if (!sec || isNaN(sec)) return '00:00'
  const m = Math.floor(sec / 60).toString().padStart(2, '0')
  const s = Math.floor(sec % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}
</script>

<style scoped>
.bf {
  width: 600px;
  height: 100px;
  margin-left: 280px;
  margin-top: 90px;
  position: absolute;
}
.jdt {
  width: 480px;
  margin-top: 10px;
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  /* 已播放：白色稍亮，未播放：白色更淡 */
  background: linear-gradient(
    to right,
    rgba(234, 144, 144, 0.9) 0%,
    rgba(244, 147, 147, 0.9) var(--progress, 0%),
    rgba(255, 255, 255, 0.55) var(--progress, 0%),
    rgba(255, 255, 255, 0.55) 100%
  );
}
.jdt::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;    /* ← 改这里：圆点宽度 */
  height: 20px;   /* ← 改这里：圆点高度 */
  border-radius: 25%;
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
.xxxx {
  width: 30px;
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
  transition: 0.5s;
} 
.music-head:hover{
  transform: translateY(-3px);
  background-color: #f3d5d5;
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
  overflow: hidden;
}
.yuan.spinning {
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.yuan-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
h1 {
  position: absolute;
  top: 15px;
  left: 280px;
  font-size: 26px;
}
.zz {
  position: absolute;
  margin-top: 5px;
  top: 55px;
  left: 280px;
  font-size: 16px;
}
.jj {
  position: absolute;
  margin-top: 5px;
  top: 190px;
  left: 280px;
  font-size: 16px;
  color: rgb(204, 162, 228);
  /* 倾斜10度 */
  transform: skewX(-10deg);
}
.music-nav {
  display: flex;
  gap:20px ;
  justify-content: center;
  align-items: center;
  margin-left: 400px;
  margin-top: 40px;
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
  box-shadow: 0 2px 3px rgb(100, 100, 100);
  transition: 0.5s;
}
.lyric:hover,
.list:hover{
  transform: translateY(-3px);
}
/* 还没完善··························· */
.l-active {
  background-color: rgb(240, 204, 212);
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
  margin-left: 400px;
  margin-top: 20px;
  height: 500px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(223, 217, 217, 0.2);
  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.8);
}
.cont-list {
  width: 900px;
  height: 500px;
  border-radius: 15px;
  background-color: rgba(229, 234, 234,0.5);
}
.ul {
  position: absolute;
  width: 900px;
  height: 500px;
  list-style: none;
  border-radius: 15px;
}
.ul li {
  display: flex;
  gap: 20px;
  align-items: center;
  padding-left: 20px;
  width: 850px;
  height: 65px;
  border-radius: 15px;
  margin: 5px auto;
  transition: 0.5s;
}
li:hover {
  transform: translateY(-3px);
}
.m-active {
  background-color: rgba(235, 212, 232, 0.5);
   border: 1px solid rgb(235, 212, 232,);
  box-shadow: 0 2px 3px rgba(235, 212, 232, 0.5);
}
.m-store {
  width: 22px;
  height: 22px;
  margin-left: 490px;
}
.list-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid rgba(223, 217, 217, 0.2);
  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.8);
}
.font {
  font-weight: 700;
  font-size: 20px;
  color: rgb(27, 25, 25);
}
.cont-lrc {
  position: absolute;
  top: 500px;
  width: 900px;
  height: 360px;
  border-radius: 15px;
  background-color: rgba(229, 234, 234,0.5);
  /* background-color: aqua; */
  mask-image: linear-gradient(
    transparent 0%,
    #000 50%,
    #000 50%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    transparent 0%,
    #000 50%,
    #000 50%,
    transparent 100%
  );
}
.gc {
  list-style: none;
  height: 23px;
  line-height: 23px;
  text-align: center;
  margin-top: 25px;
  /* background-color: aliceblue; */
  font-weight: 700;
  letter-spacing: 2px;
  transition: 0.5s;
}
.active {
  font-size: 25px;
  color: rgb(184, 106, 230);
}
</style>