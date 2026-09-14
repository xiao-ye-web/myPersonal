<template>
  <div class="music">
    <div class="tx" :class="{spinning: store.playing}">
      <img :src="currentSong.cover" class="tx-img">
    </div>
    <h3 class="uname">{{ currentSong.name }}</h3>
    <p class="zz">{{ currentSong.artist }}</p>
    <!-- <span class="zc">作词</span> -->
    <div class="bf">
      <div class="ran">
      <span>{{ formatTime(store.currentTime) }}</span>
      <input class="range" type="range" min="0" max="100"
       :value="progressPercent"
        :style="{ '--progress': progressPercent + '%' }"
        @input="e => store.seek(Number((e.target as HTMLInputElement).value) / 100)"/>
      <span>{{ formatTime(store.duration) }}</span>
    </div>
      <div style="display: flex;gap: 40px;width: 200px;margin-left: 75px;margin-top: 40px;justify-content:center;align-items: center;">
      <img @click="store.prev" :src="xia" alt="" class="xia">
      <img @click="store.toggle" :src="store.playing ? zt : bf" alt="" class="xxx">
      <img @click="store.next" :src="xia" alt="" class="shang">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="music">
import { reactive,computed } from 'vue'
import { useMusicStore } from '@/stores/counter'
import xia from '@/assets/png/shang.png'
import zt from '@/assets/mjpg/zt.png'
import bf from '@/assets/mjpg/bf.png'

interface Song {
  name: string
  artist: string
  url: string
  cover: string
}
const store = useMusicStore()

const currentSong = computed<Song>(() =>
  store.playlist[store.currentIndex] ?? { name: '', artist: '', url: '', cover: '' }
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
.xia {
transform: rotate(180deg);
}
.xxx{
  width: 30px;
}
.shang,.xia{
  width: 15px;
  height: 15px;
}
.ran {
  display: flex;
  gap: 5px;
  position: absolute;
  left: 9px;
  top: 10px;
}
.range {
  width: 240px;
  margin-top: 10px;
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 4px;
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
.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 13px;    /* ← 改这里：圆点宽度 */
  height: 13px;   /* ← 改这里：圆点高度 */
  border-radius: 50%;
background-color:rgb(218, 184, 241);
}
.music {
  width: 350px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-left: 20px;
  border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  position: relative;
}
.tx {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 20px;
  background-color: rgb(196, 236, 236);
  border: 20px solid rgb(65, 64, 79);
  overflow: hidden;
}
.tx.spinning {
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.tx-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.uname {
  position: absolute;
  width: 80px;
  height: 20px;
  left: 150px;
  top: 50px;
  /* background-color: aquamarine; */
}
.zz {
  position: absolute;
  width: 90px;
  height: 20px;
  left: 150px;
  top: 85px;
  font-size: 12px;
  /* background-color: aquamarine; */
}
/* .zc {
  position: absolute;
  width: 80px;
  height: 20px;
  left: 20px;
  top: 130px;
  font-size: 12px; */
  /* background-color: aquamarine; */
/* } */
.bf {
  position: absolute;
  width: 100%;
  height: 90px;
  border-radius: 0 0 20px 20px;
  top: 160px;
  /* background-color: aquamarine; */
}
</style>