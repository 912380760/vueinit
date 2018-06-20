import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import(/* webpackChunkName: "Index" */ '@/pages/index.vue')
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/pages/notFound.vue') 

Vue.use(Router)

export default new Router({
  mode: 'history',
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
