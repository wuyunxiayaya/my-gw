<template>
  <div id="main_content" @scroll="showScroll()">
    <div class="content_line" style="position:fixed;top: 0px;">
      精品推荐(豆瓣高分)
      <span style="color:#5c756d;font-size: 20px;" class="icon iconfont icon-hand_down"></span>
    </div>
    <Header></Header>
    <Wheel style="z-index:3;background-color: white"></Wheel>
    <div class="content_line" style="z-index:2;border-bottom:1px solid black">
      精品推荐(豆瓣高分)
      <span style="color:#5c756d;font-size: 20px;" class="icon iconfont icon-hand_down"></span>
    </div>
    <div class="list">
      <ul>
        <li  v-for="(i, index) in img_list" :key="index">
          <div class="movie_wrap">
            <div class="left" v-for="(item, index) in i.count_li" :key="index">
<!--              <router-link to="/MovieDetailPage" target="_blank">-->
              <a :href=item.movie_url target="_blank" :title=item.m_play_name>
                <img v-lazy="item.img" :title=item.m_play_name  :alt=item.movie_name>
                <span style="font-size:13px;display:block;width: 100%;text-align: center;overflow: hidden">{{item.movie_name}}<br/>
                  豆瓣:{{item.movie_score}}</span>
              </a>
<!--              </router-link>-->
            </div>
<!--            <div class="auto"><img :src="item.url" alt=""></div>-->
<!--            <div class="right"><img :src="item.url" alt=""></div>-->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../headers/Header'
import Wheel from '../wheel/Wheel'
console.log('我在这里等你，请联系我：1577988****')
// eslint-disable-next-line no-unused-vars
// import axios from 'axios'
export default {
  name: 'MainPage',
  components: {Header, Wheel},
  data () {
    return {
      img_list: []
    }
  },
  methods: {
    // getParams () {//获取用户信息
      // const userId = this.$route.query.userId
      // const userCheck = this.$route.query.userCheck
      // if (!userId) {
      //   return
      // }
      // this.$http.get('http://localhost:3333/getUserInfo?id=' + userId)
      //   .then(function (res) {
      //
      //   })
      //   // eslint-disable-next-line handle-callback-err
      //   .catch(function (err) {
      //
      //   })
    // },
    getMovie () {//获取首页电影
      let _self = this
      this.$http.get('http://localhost:3333/getMainPageMovie')
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
            v++;
            console.log(v)
            let obj = {}
            console.log(lists[i].m_img_url.replace("https://","https://images.weserv.nl/?url="))
            obj.img = lists[i].m_img_url.replace("https://","https://images.weserv.nl/?url=")
            obj.title = lists[i].m_name
            obj.movie_name = lists[i].m_name
            obj.movie_url = lists[i].m_play
            obj.m_play_name = lists[i].m_play_name + '播放'
            if (lists[i].m_play_name === '') {
              obj.m_play_name = '暂无播放来源'
            }
            obj.movie_score = lists[i].m_score
            count_li.push(obj)
            // console.log(obj)
            // console.log(v)
            // eslint-disable-next-line no-cond-assign,no-constant-condition
            if (v === 5) {
              let obj1 = {}
              // eslint-disable-next-line camelcase
              obj1.count_li = count_li
              // console.log(11)
              img_list1.push(obj1)
              console.log(count_li)
              v = 0
              // [{q:[{1:'',2:'',3:''}]},{q:[{1:'',2:'',3:''}]},{q:[{1:'',2:'',3:''}]}]
              // eslint-disable-next-line camelcase
              count_li = []
            }
          }
          console.log(img_list1)
          console.log(_self.img_list)
          // eslint-disable-next-line camelcase
          _self.img_list = img_list1
          // console.log(_self.img_list)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (err) {

        })
    }
  },
  mounted () {
    // this.getParams()
    this.getMovie()
  }
}
</script>

<style scoped lang="scss">
#main_content {
  a{
    text-decoration: none;
    color:#333;
  }
  .content_line {
    height: 50px;
    width: 100%;
    -moz-box-shadow: 2px 1px 4px #333333;
    -webkit-box-shadow: 2px 1px 4px #333333;
    box-shadow: 2px 1px 4px #333333;
    background-color: white;
    /*border: 1px solid #c5c3c5;*/
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    border-bottom: 1px solid #b7adad;
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .list {
    width: 1200px;
    /*width: 80%;*/
    margin: auto;
    /*border: 1px solid;*/
    li {
      white-space: nowrap;
      /*height:60px;*/
      width: 100%;
      /*border: 1px solid;*/
      line-height: 25px;
      div {
        display: inline-block;
        /*border: 1px solid;*/
        /*float:left;*/
        width: 180px;
        /*width: 16%;*/
        /*height:50px;*/
        /*border:1px solid;*/
        margin-left: 50px;
        /*margin-left: 5%;*/
        /*margin:0 auto;*/
        min-width: 30px;
        img {
          /*height:100%;*/
          cursor: pointer;
          width: 100%;
        }
      }
      .movie_wrap {
        /*background-image: url("../../assets/swingPic/lmlblog.jpg");*/
        /*background-repeat: no-repeat;*/
        /*background-size: cover;*/
        font-size: 0;
        /*border: 1px solid red;*/
        width: 80%;
        /*margin-left:10%;*/
        white-space: nowrap;
        min-width: 200px;
        div {
          height: 175px;
          /*overflow: hidden;*/
        }
      }
    }
  }
}
</style>



