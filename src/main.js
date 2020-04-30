// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icons/iconfont.css'
import axios from 'axios'
// 懒加载
import VueLazyload from 'vue-lazyload'
// eslint-disable-next-line no-unused-vars
import GetCookie from '../getCookie.js'
// eslint-disable-next-line no-unused-vars
import animate from 'animate.css'
// eslint-disable-next-line no-unused-vars
// import MsgTip from './components/MsgTip'
// eslint-disable-next-line no-unused-vars
import msgTip from './msgTip' // 提示tip
import VueHighlightJS from 'vue-highlightjs'
// 代码高亮文件引入
import hljs from 'highlight.js'
// 样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
import 'highlight.js/styles/monokai-sublime.css'
// 导出pdf
import htmlToPdf from './utils/htmlToPdf.js'
// 复制
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.prototype.$http = axios
const Base64 = require('js-base64').Base64
// eslint-disable-next-line no-new
// 自定义一个代码高亮指令
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
Vue.use(htmlToPdf)// 导出pdf
// eslint-disable-next-line no-undef
// Vue.prototype.$getCookie = GetCookie
Vue.use(VueHighlightJS)
Vue.use(animate)
Vue.use(GetCookie)
Vue.use(hljs)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(msgTip)
// 懒加载 使用方法2: 自定义参数选项配置
Vue.use(VueLazyload, {
  preLoad: 1.3, // 提前加载高度（数字 1 表示 1 屏的高度） 默认值:1.3
  error: 'dist/error.png', // 当加载图片失败的时候
  loading: 'dist/loading.gif', // 图片加载状态下显示的图片
  attempt: 3 //  加载错误后最大尝试次数 默认值:3
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  Base64,
  router,
  components: { App },
  template: '<App/>'
})
