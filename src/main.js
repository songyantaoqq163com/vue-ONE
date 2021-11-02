// The Vue build version to load with the `import` command
//npm i vuedraggable -S vue拖拽文本互换位置
//npm install zkr-drag --save 拖拽框
//npm install vue-video-player --save视频插件
//npm install vue-seamless-scroll --save滚动组件npm install vue-awesome-swiper --save
//npm install better-scroll --save 滚动
// npm install -D vue-virtual-scroller
// npm i element-ui -S
// import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
// import VueVirtualScroller from "vue-virtual-scroller";
// Vue.use(VueVirtualScroller);
// import { VInfoniteScroll } from '@oldeng/v-infinite-scroll'
// Vue.use(VInfoniteScroll)
import Vue from 'vue'
import App from './App'
import router from './router'
import VCharts from 'v-charts'//v-charts图表
import VueCookies from 'vue-cookies'
import VueResource from 'vue-resource'
import store from './vuex/store'//引入vuex

// Vue.use(getBanners)
// import axios from 'axios'
import axios from './js/http'
axios.defaults.baseURL = "https://www.51tagger.com/maxwell-report"; // 关键步骤–填写后台请求统一的地址
// axios.defaults.headers.get['Content-Type'] = 'application/json';
Vue.prototype.$axios=axios
Vue.config.productionTip=false

import vueTost from 'zkr-drag'
import VideoPlayer from 'vue-video-player'
import vueSeamlessScroll from 'vue-seamless-scroll' //滚动插件


require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(vueSeamlessScroll)
Vue.use(VideoPlayer)
Vue.use(vueTost)

import echarts from 'echarts'
// import html2canvas from 'html2canvas'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CountDown from 'vue2-countdown';
import Mock from 'mockjs';//加载mockServer
import VueRouter from 'vue-router';
// import moment from 'moment'
import vueInfinite from 'vue-infinite-scroll'
// import G6 from '@antv/g6'
import VueParticles from 'vue-particles'
import Canvas from 'canvas'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}//这三段代码阻止了菜单多次点击报错的问题

Vue.use(Canvas)
Vue.use(VueParticles)
// Vue.prototype.$G6=G6
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(VCharts)
Vue.use(VueResource)
// Vue.use(html2canvas)
// Vue.use(VueCookies)
Vue.prototype.$cookies = VueCookies;
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(CountDown)

Vue.use(Mock)
// Vue.use(moment)
Vue.use(vueInfinite)


var app = new Vue({
  el: '#app',
  router,
  store,//注册后，子组件可以使用this.$store访问
  components: { App },
  template: '<App/>',
  // methods: {
  //   fan() {
  //     console.log("你按了回车键");
  //   },
  // }

})
Vue.filter('ClassId',function(obj,prop){
  let lineI=obj?obj[prop]:null;
  if(lineI==="a"){
      return "白班"
  }else if(lineI==="b"){
      return "夜班"
  }else{
      return ''
  }
})

Vue.filter('safetyValue', function (obj) {
  let field = obj;
  for (let i = 1; i < arguments.length; i++) {
      const prop = arguments[i];
      if (!field) break;
      field = field[prop];
  }
  return field;
});


