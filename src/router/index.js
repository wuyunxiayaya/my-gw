import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line no-unused-vars
import MainPage from '../components/mainpage/MainPage'
// eslint-disable-next-line no-unused-vars
import Movies from '../components/movie/Movies'
// eslint-disable-next-line no-unused-vars
import MovieDetailPage from '../components/movie/MovieDetailPage'
// eslint-disable-next-line no-unused-vars
import Blog from '../components/blog/Blog'
// eslint-disable-next-line camelcase,no-unused-vars
import Writer_blog from '../components/blog/Writer_blog'
import ViewBlog from "../components/blog/ViewBlog";

// eslint-disable-next-line no-unused-vars
import Regist from '../components/login/Regist'
import Login from '../components/login/Login'
import MyResume from '../components/resume/MyResume'
// eslint-disable-next-line camelcase
import Show_blog from '../components/blog/Show_blog'
import EatSomething from '../components/eat/EatSomething'
import ForgetPass from '../components/login/ForgetPass'
import Rrsume from '../components/resume/Rrsume'
// eslint-disable-next-line no-unused-vars
import MoreResume from '../components/resume/resumeselect/MoreResume'
import SelectResume1 from '../components/resume/resumeselect/SelectResume1'
import Pto from "../components/pto/Pto";
import ContactWe from "../components/contact/ContactWe";
import Game from "../components/test/Game";
// eslint-disable-next-line no-unused-vars
import math from "../components/test/math";
import Start from "../components/test/Start";
import Test from "../components/test/Test";
import {basePort} from 'portfinder'
import SwingPto from '../components/pto/SwingPto'
Vue.use(Router)
// eslint-disable-next-line no-undef
// var hljs = require('./highlight')
// module.exports = hljs

export default new Router({
  routes: [
    {// 首页
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {// 电影页
      path: '/Movies',
      name: 'Movies',
      // eslint-disable-next-line no-undef
      component: resolve => require(['@/components/movie/Movies'], resolve)
    },
    {// 电影详情页
      path: '/MovieDetailPage',
      name: 'MovieDetailPage',
      // eslint-disable-next-line no-undef
      component: resolve => require(['@/components/movie/MovieDetailPage'], resolve)
    },
    {// 博客主页
      path: '/Blog',
      name: 'Blog',
      // eslint-disable-next-line no-undef
      component: resolve => require(['@/components/blog/Blog'], resolve)
    },
    {// 写博客
      path: '/Writer_blog',
      name: 'Writer_blog',
      // eslint-disable-next-line no-undef
      component: resolve => require(['@/components/blog/Writer_blog'], resolve)
    },
    {// 注册/登录页
      path: '/Regist',
      name: 'Regist',
      // eslint-disable-next-line no-undef
      component: resolve => require(['@/components/login/Regist'], resolve)
      // component: Regist
    },
    {// 作废
      path: '/Login',
      name: 'Login',
      // eslint-disable-next-line no-undef
      component: Login
    },
    {// 展示博客详情页
      path: '/Show_blog',
      name: 'Show_blog',
      // eslint-disable-next-line no-undef
      // component: Show_blog
      component: resolve => require(['@/components/blog/Show_blog'], resolve)
    },
    {// 查看博客页
      path: '/ViewBlog',
      name: 'ViewBlog',
      // eslint-disable-next-line no-undef
      // component: Show_blog
      component: resolve => require(['@/components/blog/ViewBlog'], resolve)
    },
    {// 吃什么页
      path: '/EatSomething',
      name: 'EatSomething',
      // eslint-disable-next-line no-undef
      // component: EatSomething
      component: resolve => require(['@/components/eat/EatSomething'], resolve)
    },
    {// 忘记密码页
      path: '/ForgetPass',
      name: 'ForgetPass',
      // eslint-disable-next-line no-undef
      // component: ForgetPass
      component: resolve => require(['@/components/login/ForgetPass'], resolve)
    },
    {// 简历
      path: '/MyResume',
      name: 'MyResume',
      // eslint-disable-next-line no-undef
      // component: MyResume
      component: resolve => require(['@/components/resume/MyResume'], resolve)
    },
    {// 简历模板
      path: '/Rrsume',
      name: 'Rrsume',
      // eslint-disable-next-line no-undef
      // component: Rrsume
      component: resolve => require(['@/components/resume/Rrsume'], resolve)
    },
    {// 简历模板
      path: '/MoreResume',
      name: 'MoreResume',
      // eslint-disable-next-line no-undef
      // component: MoreResume
      component: resolve => require(['@/components/resume/resumeselect/MoreResume'], resolve)
    },
    {// 简历模板
      path: '/SelectResume1',
      name: 'SelectResume1',
      // eslint-disable-next-line no-undef
      // component: SelectResume1
      component: resolve => require(['@/components/resume/resumeselect/SelectResume1'], resolve)
    },
    {// banner图片
      path: '/SwingPto',
      name: 'SwingPto',
      // eslint-disable-next-line no-undef
      component: SwingPto
    },
    {// 上传图片
      path: '/Pto',
      name: 'Pto',
      // eslint-disable-next-line no-undef
      component: Pto
    },
    {// 联系我们
      path: '/ContactWe',
      name: 'ContactWe',
      // eslint-disable-next-line no-undef
      component: ContactWe
    },
    {// youxitest
      path: '/Game',
      name: 'Game',
      // eslint-disable-next-line no-undef
      component: Game
    },
    {// 数学运算
      path: '/math',
      name: 'math',
      // eslint-disable-next-line no-undef
      component: math
    },
    {// 贪吃蛇
      path: '/Start',
      name: 'Start',
      // eslint-disable-next-line no-undef
      component: Start
    },
    {// Test
      path: '/Test',
      name: 'Test',
      // eslint-disable-next-line no-undef
      component: Test
    }
  ]
})
