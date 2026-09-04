// 引入所有的路由组件
// 首页
import Home from '@/views/shouye.vue'
// 项目
import Projects from '@/views/xiangmu.vue'
// 归档
import Archives from '@/views/jiyi.vue'
// 音乐
import Music from '@/views/yinyue.vue'
// 邂言
import Talks from '@/views/shuoshuo.vue'
// 友链
import Friends from '@/views/youlian.vue'
// 杂谈
import Chats from '@/views/zatan.vue'
// 关于
import About from '@/views/guanyu.vue'
// 文章
import Article from '@/views/wenzhang.vue'

import { createRouter, createWebHistory } from 'vue-router'
// 实例化路由器
const router = createRouter({
  //配置路由工作状态为history模式
  history: createWebHistory(),
  //一堆路由配置
  routes: [{
    path: '/shouye',
    component: Home
  },
  {
    path: '/xiangmu',
    component: Projects
  },
  {
    path: '/wenzhang',
    component: Article
  },
  {
    path: '/jiyi',
    component: Archives
  },
  {
    path: '/yinyue',
    component: Music
  },
  {
    path: '/shuoshuo',
    component: Talks
  },
  {
    path: '/youlian',
    component: Friends
  },
  {
    path: '/zatan',
    component: Chats
  },
  {
    path: '/guanyu',
    component: About
  },
  ]
})

export default router
