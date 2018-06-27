import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import(/* webpackChunkName: "Index" */ '@/pages/index.vue')
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/pages/notFound.vue') 

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
