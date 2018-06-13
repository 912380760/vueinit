// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import axios from 'axios'
// 设置默认请求地址
// axios.defaults.baseURL = 'http://10.10.90.36:8000/api';
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// 配置页面加载过度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

// 添加normalize Css
import 'normalize.css'

// 添加animate CSS
import 'animate.css'

// 引入elementUI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
