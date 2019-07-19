import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import 'normalize.css'
import 'animate.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

// 设置默认请求地址
// axios.defaults.baseURL = 'http://10.10.90.36:8000/api';
Vue.use(VueAxios, axios);

// 配置页面加载过度条
router.beforeEach((to,from,next) => {
  NProgress.start();
  next()
});
router.afterEach(() => {
  NProgress.done()
});

// 引入elementUI框架
Vue.use(ElementUI);

// 路由懒加载
Vue.use(VueLazyload,{
  preLoad: 1,
  error: '/lazyloadImg/404.png',
  loading: '/lazyloadImg/loading.svg',
  try: 1 // default 1
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
