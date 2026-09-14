import { defineStore } from 'pinia'
import mimg1 from '@/assets/mjpg/01.jpg'
import mimg2 from '@/assets/mjpg/02.jpg'
import mimg3 from '@/assets/mjpg/03.png'
import mimg4 from '@/assets/mjpg/04.png'
import mimg5 from '@/assets/mjpg/05.png'
import mimg6 from '@/assets/mjpg/06.png'
import mimg7 from '@/assets/mjpg/07.png'

import music1 from '@/assets/music/tianqizhizi.mp3'
import music2 from '@/assets/music/xinzuo.mp3'
import music3 from '@/assets/music/ruguo.mp3'
import music4 from '@/assets/music/huohua.mp3'
import music5 from '@/assets/music/name.mp3'
import music6 from '@/assets/music/zhujiao.mp3'
import music7 from '@/assets/music/zhiwo.mp3'

import lrc1 from '@/assets/music/tianqizhizi.lrc?raw'
import lrc2 from '@/assets/music/xinzuo.lrc?raw'
import lrc3 from '@/assets/music/ruguo.lrc?raw'
import lrc4 from '@/assets/music/huohua.lrc?raw'
import lrc5 from '@/assets/music/name.lrc?raw'
import lrc6 from '@/assets/music/zhujiao.lrc?raw'
import lrc7 from '@/assets/music/zhiwo.lrc?raw'

const lrcMap = [lrc1, lrc2, lrc3, lrc4, lrc5, lrc6, lrc7]

function parseLrc(text: string) {
  const lines: { time: number; text: string }[] = []
  const regex = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/g
  let m
  while ((m = regex.exec(text)) !== null) {
    const t = parseInt(m[1]!) * 60 + parseInt(m[2]!) + parseInt(m[3]!.padEnd(3, '0')) / 1000
    if (m[4]!.trim()) lines.push({ time: t, text: m[4]!.trim() })
  }
  return lines.sort((a, b) => a.time - b.time)
}

interface Song {
  id: number
  name: string
  artist: string
  url: string
  cover: string
}

// audioEl 放外面，Pinia 不碰它
let audioEl: HTMLAudioElement | null = null

export function setAudioEl(el: HTMLAudioElement) {
  audioEl = el
}

export const useMusicStore = defineStore('music', {
  state: () => ({
    playlist: [
      {
        id: 1,
        name: '天气之子',
        artist: 'STRLight',
        url: music1,
        cover: mimg1
      },
      {
        id: 2,
        name: '心做し',
        artist: '双笙（陈元汐）',
        url: music2,
        cover: mimg2
      },
      {
        id: 3,
        name: '如果呢',
        artist: '郑润泽',
        url: music3,
        cover: mimg3
      },
      {
        id: 4,
        name: '打上花火',
        artist: 'Daoko/米津玄師',
        url: music4,
        cover: mimg4
      },
      {
        id: 5,
        name: '夢灯籠',
        artist: 'RADWIMPS',
        url: music5,
        cover: mimg5
      },
      {
        id: 6,
        name: '主角',
        artist: '沉画文阁/马里奥',
        url: music6,
        cover: mimg6
      },
      {
        id: 7,
        name: '知我',
        artist: '国风堂/哦漏',
        url: music7,
        cover: mimg7
      },
    ] as Song[],
    lyrics: [] as { time: number, text: string }[],
    currentIndex: 0,
    playing: false,
    currentTime: 0,
    duration: 0,
  }),
  getters: {
    currentSong: (s): Song => s.playlist[s.currentIndex] || ({} as Song)
  },

  actions: {
    toggle() {
      if (!audioEl) return
      this.playing ? audioEl.pause() : audioEl.play()
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.playlist.length
      this.load()
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length
      this.load()
    },
    seek(percent: number) {
      if (!audioEl || !this.duration) return
      audioEl.currentTime = this.duration * percent
    },
    load() {
      if (!audioEl) return
      const currentSong = this.playlist[this.currentIndex]
      if (currentSong) {
        audioEl.src = currentSong.url
      }
      audioEl.play().catch(() => { })
    },
    loadLyric(index: number) {
      const raw = lrcMap[index]
      this.lyrics = raw ? parseLrc(raw) : []
    }
  }
})