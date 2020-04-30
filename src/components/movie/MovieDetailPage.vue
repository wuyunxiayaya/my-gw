<template>
  <div id="movie_detail">
    <div class="main_wrap">
      <header class="header">
        <span><img src="../../../static/hua.png" alt=""></span>
        <span>没事电影</span>
      </header>
      <div class="movie_wrap">
        <div class="left">
          <img :src=tv_img alt="">
        </div>
        <div class="right">
          <div class="tv_name">
            <h2>{{header_name}}</h2>
          </div>
          <div class="tv_brief">
            <span>{{tv_type}} </span><span>&nbsp&nbsp&nbsp{{tv_age}}</span><span>{{tv_area}}</span>
          </div>
          <div style="height:15px;">选集</div>
          <div class="tv_play">
            <a v-for="(item, index) in tv_select" :key="index" :href=item.playUrl target="_blank"><!--点击跳转到播放 -->
              <el-button class="commitbtn" type="primary" :title=item.playText>{{item.playNum}}</el-button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetailPage',
  data () {
    return {
      tv_img: require('../../assets/bg_test/1.jpg'),
      header_name: '小猪佩奇',
      tv_type: '类型：少儿',
      tv_age: '年代：2019',
      tv_area: '地区：中国大陆',
      tv_select: [],
      img: ''
    }
  },
  methods: {
    getComi () {
      let _self = this
      let id = this.$route.query.ids
      let type = this.$route.query.type
      let url = 'http://localhost:3333/getComi'
      if (type === 'movie') {
        url = 'http://localhost:3333/getMovie'
      } else if (type === 'TV') {
        url = 'http://localhost:3333/getTV'
      }
      this.$http.get(url + '?id=' + id)
        .then(function (res) {
          let names = res.data.list[0].comi_name
          let types = res.data.list[0].comi_type
          let ages = res.data.list[0].comi_age
          let areas = res.data.list[0].comi_area
          let imgs = res.data.list[0].comi_img
          if (type === 'movie') {
            names = res.data.list[0].movie_name
            types = res.data.list[0].movie_type
            ages = res.data.list[0].movie_age
            areas = res.data.list[0].movie_area
            imgs = res.data.list[0].movie_img
          } else if (type === 'TV') {
            names = res.data.list[0].tv_name
            types = res.data.list[0].tv_type
            ages = res.data.list[0].tv_age
            areas = res.data.list[0].tv_area
            imgs = res.data.list[0].tv_img
          }
          console.log(res)
          console.log(res.data.list[0])
          _self.header_name = names
          _self.tv_type = types
          _self.tv_age = ages
          _self.tv_area = areas
          _self.tv_img = imgs
          _self.img = imgs
        })
        .catch(function (err) {

        })
    },
    getComiPlayUrl () {
      let _self = this
      let id = this.$route.query.ids
      let type = this.$route.query.type
      let url = 'http://localhost:3333/getComiInfo'
      if (type === 'movie') {
        url = 'http://localhost:3333/getMovieInfo'
      } else if (type === 'TV') {
        url = 'http://localhost:3333/getTvInfo'
      }
      this.$http.get(url + '?id=' + id)
        .then(function (res) {
          let arr = []
          console.log(res.data.list)
          if (type === 'movie') {
            let obj = {}
            obj.playNum = '立即播放'
            obj.playText = res.data.list[0].movie_name
            obj.playUrl = res.data.list[0].comi_play_url
            arr.push(obj)
          } else if (type === 'TV') {
            for (let i = 0; i < res.data.list.length; i++) {
              let obj = {}
              obj.playUrl = res.data.list[i].tv_play_url
              console.log(res.data.list.length)
              // var rt = /(.+)?(?:\(|（)(.+)(?=\)|）)/.exec(res.data.list[i].tv_play_num)
              // console.log(rt)
              obj.playNum = '第' + i + 1 + '集'
              obj.playText = res.data.list[i].tv_name
              arr.push(obj)
            }
          } else {
            for (let i = 0; i < res.data.list.length; i++) {
              let obj = {}
              obj.playUrl = res.data.list[i].comi_play_url
              // eslint-disable-next-line no-redeclare
              var rt = /(.+)?(?:\(|（)(.+)(?=\)|）)/.exec(res.data.list[i].comi_play_num)
              console.log(rt)
              obj.playNum = rt[2]
              obj.playText = rt[1]
              arr.push(obj)
            }
          }
          console.log(arr)
          _self.tv_select = arr
        })
        .catch(function (err) {

        })
    }
  },
  mounted () {
    console.log(this.$route.query.ids)
    this.getComi()
    this.getComiPlayUrl()
  }
}
</script>

<style scoped lang="scss">
  #movie_detail{
    height: 100%;
    width: 100%;
  }
    .main_wrap{
      height:100%;
      width: 100%;
      /*background-color: #0C9A9A;*/
      /*background-image: url("../../../assets/bg_test/timg2.jpg");*/
      /*background-repeat: no-repeat;*/
      /*background-size: cover;*/
      .header{
        width: 100%;
        padding-left: 50px;
        font-family: 楷体;
        height:110px;
        line-height: 110px;
        background-image: url("../../assets/swingPic/b25.jpg");
        background-size: contain;
        font-size:23px;
        font-weight: bold;
        border-bottom: 1px solid #fff;
        img{
          vertical-align: middle;
        }
      }
      .movie_wrap{
        position: relative;
        top:20px;
        /*top:50px;*/
        height:400px;
        width: 1000px;
        margin: auto;
        /*border:1px solid;*/
        .left{
          img{
            height:100%;
          }
          display: inline-block;
          height:100%;
          width: 40%;
        }
        .right{
          position: absolute;
          right: 0;
          height:100%;
          /*width: auto;*/
          width: 60%;
          display: inline-block;
          div{
            height:50%;
            width: 100%;
            /*border:1px solid;*/
            margin-top:2%;
          }
          .tv_name{
            height:20%;
          }
          .tv_brief{
            height:15%;
            span{
              display: inline-block;
              width: 30%;
            }
          }
          .tv_play{
            overflow-y: auto;
            button{
              /*margin: 0;*/
              margin:8px ;
            }
          }
        }
      }
    }
  .commitbtn{
    width: 90px;
  }

</style>
