import { defineStore } from 'pinia'
import mimg1 from '@/assets/mjpg/01.jpg'
import music1 from '@/assets/music/tianqizhizi.mp3'

interface Song {
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
        name: '天气之子',
        artist: 'STRLight',
        url: music1,
        cover: mimg1
      },
      {
        name: '第二首',
        artist: '某歌手',
        url: '/music/song2.mp3',
        cover: '/music/cover2.jpg'
      }
    ] as Song[],
    currentIndex: 0,
    playing: false,
    currentTime: 0,
    duration: 0
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
    }
  }
})