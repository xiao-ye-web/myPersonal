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
// 视界
import View from '@/views/shijie.vue'
// ················································


import { createRouter, createWebHistory } from 'vue-router'
// 实例化路由器
const router = createRouter({
  //配置路由工作状态为history模式
  history: createWebHistory(),
  //一堆路由配置
  routes: [
    {
      path: '/shouye',
      component: Home,
      // 配置出入动画
      // meta: {
      //   enter: 'animate__fadeInUp',
      //   leave: 'animate__fadeOut',
      // }
    },
    {
      path: '/xiangmu',
      component: Projects
    },
    {
      path: '/wenzhang',
      component: Article,
    },
    // {
    //   path: '/', component: Home,
    //   meta: { pageTrans: true }
    // },
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
    {
      path: '/view',
      component: View
    },
    {
      // 页面初始画面重定向到首页
      path: '/',
      redirect: '/shouye'
    }
  ],
  // 配置滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
