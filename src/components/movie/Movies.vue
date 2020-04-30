<template>
  <div id="movie_header">

      <header class="movie_nav">
        <div class="logo">
<!--          <span style="font-size:100px;color:#65dc78" class="icon iconfont icon-wuyun"></span>-->
          <span>
            <img src="../../../static/hua.png" alt="">
          </span>
          <span class="logo_title">没事电影</span>
        </div>
<!--        <div class="selects">-->
<!--          select-->
<!--        </div>-->
        <div class="input">
          <el-input
            placeholder="输入关键字"
            v-model="input10"
            clearable>
          </el-input>
          <el-button type="primary" @click="onSubmit"><span style="color:#fff" class="icon iconfont icon-sousuo1"></span></el-button>
<!--          <el-form-item>-->

<!--          </el-form-item>-->
        </div>
      </header>
    <div class="watch_movie">
      <div class="list">
        <div class="nav_title" id="titles">动漫</div>
        <ul>
          <li  v-for="(i, index) in img_list" :key="index">
            <div class="movie_wrap">
              <div class="left" v-for="(item, index) in i.count_li" :key="index">
                <router-link :to="{path: '/MovieDetailPage',query: {ids:item.id}}" target="_blank">
                  <img v-lazy="item.img" :title=item.movie_name :alt=item.movie_name>
                  <span style="">{{item.movie_name}}</span>
                </router-link>
              </div>
              <!--            <div class="auto"><img :src="item.url" alt=""></div>-->
              <!--            <div class="right"><img :src="item.url" alt=""></div>-->
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div class="list" id="toTop">
          <div class="nav">电影</div>
          <ul>
            <li  v-for="(items, index) in movieList" :key="index">
              <div class="movie_wrap">
                <div class="left" v-for="(i, index) in items.count_li" :key="index">
                  <router-link :to="{path: '/MovieDetailPage',query: {ids:i.id, type:'movie'}}" target="_blank">
                    <img v-lazy="i.img" :title=i.movie_name :alt=i.movie_name>
                    <span style="">{{i.movie_name}}</span>
                  </router-link>
                </div>
                <!--            <div class="auto"><img :src="item.url" alt=""></div>-->
                <!--            <div class="right"><img :src="item.url" alt=""></div>-->
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="list" id="tv_to_top">
          <div class="nav">电视</div>
          <ul>
            <li  v-for="(items, index) in tv_list" :key="index">
              <div class="movie_wrap">
                <div class="left" v-for="(i, index) in items.count_li" :key="index">
                  <router-link :to="{path: '/MovieDetailPage',query: {ids:i.id, type:'TV'}}" target="_blank">
                    <img v-lazy="i.img" :title=i.movie_name :alt=i.movie_name>
                    <span style="">{{i.movie_name}}</span>
                  </router-link>
                </div>
                <!--            <div class="auto"><img :src="item.url" alt=""></div>-->
                <!--            <div class="right"><img :src="item.url" alt=""></div>-->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
<!--      <Wheel></Wheel>-->
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import Wheel from '../wheel/Wheel'
export default {
  name: 'Movies',
  data () {
    return {
      input10: '',
      img_list: [],
      movieList: [],
      tv_list: []
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    getComi () { // 动漫
      let _self = this
      this.$http.get('http://localhost:3333/getAllComi')
        .then(function (res) {
          console.log(res.data.list)
          // eslint-disable-next-line camelcase
          // let count_li = []
          let lists = res.data.list
          // {img: require('../../assets/movie1.jpg'), title: '图片1', movie_name: '显现', movie_score: 95}
          // eslint-disable-next-line no-unused-vars
          let v = 0
          // eslint-disable-next-line camelcase,no-unused-vars
          let count_li = []
          // eslint-disable-next-line camelcase,no-unused-vars
          let img_list1 = []
          console.log(count_li)
          for (let i = 0; i < lists.length; i++) {
            v++
            console.log(v)
            let obj = {}
            obj.img = lists[i].comi_img
            obj.title = lists[i].comi_name
            obj.movie_name = lists[i].comi_name
            obj.movie_url = lists[i].comi_url
            obj.id = lists[i].cid
            count_li.push(obj)
            console.log(obj)
            console.log(v)
            // eslint-disable-next-line no-cond-assign,no-constant-condition
            if (v === 5) {
              let obj1 = {}
              // eslint-disable-next-line camelcase
              obj1.count_li = count_li
              console.log(11)
              img_list1.push(obj1)
              console.log(count_li)
              v = 0
              // eslint-disable-next-line camelcase
              count_li = []
            }
          }
          console.log(img_list1)
          console.log(_self.img_list)
          // eslint-disable-next-line camelcase
          _self.img_list = img_list1
          console.log(_self.img_list)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (err) {

        })
    },
    getMovie () { // 电影
      let _self = this
      this.$http.get('http://localhost:3333/getAllMovie')
        .then(function (res) {
          console.log(res.data.list)
          // eslint-disable-next-line camelcase
          // let count_li = []
          let lists = res.data.list
          // {img: require('../../assets/movie1.jpg'), title: '图片1', movie_name: '显现', movie_score: 95}
          // eslint-disable-next-line no-unused-vars
          let v = 0
          // eslint-disable-next-line camelcase,no-unused-vars
          let count_li = []
          // eslint-disable-next-line camelcase,no-unused-vars
          let img_list1 = []
          console.log(count_li)
          for (let i = 0; i < lists.length; i++) {
            v++
            console.log(v)
            let obj = {}
            obj.img = lists[i].movie_img
            obj.title = lists[i].movie_name
            obj.movie_name = lists[i].movie_name
            obj.movie_url = lists[i].movie_url
            obj.id = lists[i].cid
            count_li.push(obj)
            console.log(obj)
            console.log(v)
            // eslint-disable-next-line no-cond-assign,no-constant-condition
            if (v === 5) {
              let obj1 = {}
              // eslint-disable-next-line camelcase
              obj1.count_li = count_li
              console.log(11)
              img_list1.push(obj1)
              console.log(count_li)
              v = 0
              // eslint-disable-next-line camelcase
              count_li = []
            }
          }
          console.log(img_list1)
          console.log(_self.img_list)
          // eslint-disable-next-line camelcase
          _self.movieList = img_list1
          console.log(_self.movieList)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (err) {

        })
    },
    getTV () { // 电视
      let _self = this
      this.$http.get('http://localhost:3333/getAllTv')
        .then(function (res) {
          console.log(res.data.list)
          // eslint-disable-next-line camelcase
          // let count_li = []
          let lists = res.data.list
          // {img: require('../../assets/movie1.jpg'), title: '图片1', movie_name: '显现', movie_score: 95}
          // eslint-disable-next-line no-unused-vars
          let v = 0
          // eslint-disable-next-line camelcase,no-unused-vars
          let count_li = []
          // eslint-disable-next-line camelcase,no-unused-vars
          let img_list1 = []
          console.log(count_li)
          for (let i = 0; i < lists.length; i++) {
            v++
            console.log(v)
            let obj = {}
            obj.img = lists[i].tv_img
            obj.title = lists[i].tv_name
            obj.movie_name = lists[i].tv_name
            obj.movie_url = lists[i].tv_url
            obj.id = lists[i].cid
            count_li.push(obj)
            console.log(obj)
            console.log(v)
            // eslint-disable-next-line no-cond-assign,no-constant-condition
            if (v === 5) {
              let obj1 = {}
              // eslint-disable-next-line camelcase
              obj1.count_li = count_li
              console.log(11)
              img_list1.push(obj1)
              console.log(count_li)
              v = 0
              // eslint-disable-next-line camelcase
              count_li = []
            }
          }
          console.log(img_list1)
          console.log(_self.img_list)
          // eslint-disable-next-line camelcase
          _self.tv_list = img_list1
          console.log(_self.tv_list)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (err) {

        })
    },
    handleScroll () { // 改变元素#searchBar的top值
      // eslint-disable-next-line no-unused-vars
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop// 滚动条距离顶部的距离
      var offsetTop = document.querySelector('#toTop').offsetTop// 4116 元素距离顶部的距离
      var offsetTop1 = document.querySelector('#tv_to_top').offsetTop// 7665 元素距离顶部的距离
      console.log(offsetTop1)
      var titles = document.querySelector('#titles')
      if (offsetTop - scrollTop <= 0 && offsetTop1 - scrollTop > 0) { // 当元素到顶部时
        titles.innerText = '电影'
      } else if (offsetTop1 - scrollTop <= 0) {
        titles.innerText = '电视'
      } else {
        titles.innerText = '动漫'
      }
    }
  },
  mounted () {
    this.getComi()
    this.getMovie()
    this.getTV()
    window.addEventListener('scroll', this.handleScroll)
  },
  components: {Wheel}
}

</script>

<style scoped lang="scss">
  header{
    position: fixed;
    z-index: 2;
    background-color: #545c64;
    height:110px;
    line-height:110px;
    background-image: url("../../assets/swingPic/b25.jpg");
    background-size: contain;
    img{
      vertical-align: middle;
      padding: 10px 20px;
    }
  }
  ul,li{
    list-style: none;
    padding: 0;
    margin:0;
  }
  li {
    white-space: nowrap;
    /*height:60px;*/
    width: 100%;
    /*border: 1px solid;*/
    line-height: 60px;
    div {
      display: inline-block;
      /*border: 1px solid;*/
      /*float:left;*/
      width: 30%;
      /*height:50px;*/
      /*border:1px solid;*/
      height:200px;
      /*overflow: hidden;*/
      margin-left: 2.5%;
      min-width: 30px;
      img {
        /*height:100%;*/
        width: 100%;
      }
    }
  }
      /*div {*/
      /*  height: 175px;*/
      /*  overflow: hidden;*/
      /*}*/
      #movie_header {
        background-color: #f1f1f1;
        height: 80px;
        width: 100%;
        .movie_nav {
          white-space: nowrap;
          display: block;
          width: 100%;
          div {
            height: 100%;
            width: 20%;
            min-width: 110px;
            vertical-align: middle;
            display: inline-block;
            vertical-align: middle;
            .logo_title {
              font-family: "楷体", "楷体_GB2312";
              font-size: 25px;
              font-weight: bold;
            }
            span {
              vertical-align: middle;
            }
          }
          .input {
            width: 420px;
            white-space: nowrap;
            text-align: right;
            .el-input {
              width: 250px !important;
            }
          }
        }
      }
      .watch_movie{
        position: relative;
        top:150px;
        .list {
          /*width: 1000px;*/
          width: 80%;
          margin: auto;
          .nav_title{
            position: fixed;
            width: 100%;
            height:30px;
            line-height: 30px;
            top:110px;
            /*left:50px;*/
            background-color: white;
            z-index: 2;
          }
          /*border: 1px solid;*/
          li {
            white-space: nowrap;
            /*height:60px;*/
            width: 100%;
            /*border: 1px solid;*/
            /*line-height: 60px;*/
            margin: auto;
            /*div {*/
            /*  display: inline-block;*/
            /*  !*border: 1px solid;*!*/
            /*  !*float:left;*!*/
            /*  width: 180px;*/
            /*  !*height:50px;*!*/
            /*  !*border:1px solid;*!*/
            /*  margin-left: 14px;*/
            /*  !*margin:0 auto;*!*/
            /*  min-width: 30px;*/
              .movie_wrap {
                font-size: 0;
                /*border: 1px solid red;*/
                width: 100%;
                /*margin-left: 10%;*/
                white-space: nowrap;
                min-width: 200px;
                height:270px;
              }
              .left{
                position: relative;
                display: inline-block;
                width: 180px;
                /*width: 16%;*/
                height:280px;
                margin-left: 14px;
                /*margin-left: 5%;*/
                overflow: hidden;
                img {
                  /*height:100%;*/
                  cursor: pointer;
                  width: 100%;
                }
                span{
                  position: absolute;
                  font-size:13px;
                  display:inline-block;
                  width: 100%;
                  text-align: center;
                  z-index: 1;
                  bottom: 0;
                  left:0;
                  color:#333;
                  height:30px;
                  line-height: 30px;
                }
              }
            /*}*/
            /*.movie_wrap {*/
            /*  font-size: 0;*/
            /*  !*border: 1px solid red;*!*/
            /*  width: 100%;*/
            /*  !*margin-left:10%;*!*/
            /*  white-space: nowrap;*/
            /*  min-width: 200px;*/

            /*  div {*/
            /*    !*height: 175px;*!*/
            /*    !*overflow: hidden;*!*/
            /*  }*/
            /*}*/
          }
        }
      }

</style>
