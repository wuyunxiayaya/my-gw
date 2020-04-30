<template>
<!--  <div class="block">-->
<!--    <span class="demonstration">Click 指示器触发</span>-->
<!--    <el-carousel trigger="click" height="150px">-->
<!--      <el-carousel-item v-for="item in 4" :key="item">-->
<!--        <h3 class="small">{{ item }}</h3>-->
<!--      </el-carousel-item>-->
<!--    </el-carousel>-->
<!--  </div>-->
    <div id="we">
      <el-carousel indicator-position="outside">
          <el-carousel-item v-for="(item, index) in img_slip" :key="index">
            <router-link to="/SwingPto" target="_blank">
            <img style="cursor:pointer;" title="图片" :src=item.img alt="图片">
            </router-link>
          </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'Wheel',
  data () {
    return {
      img_slip: [{img: require('../../assets/swingPic/b1.jpg')},
        {img: require('../../assets/swingPic/b2.jpg')},
        {img: require('../../assets/swingPic/b3.jpg')},
        {img: require('../../assets/swingPic/b7.jpg')},
        {img: require('../../assets/swingPic/b10.jpg')},
        {img: require('../../assets/swingPic/b25.jpg')}]
    }
  },
  methods: {
    getMovie () {
      let _self = this
      this.$http.get('http://localhost:3333/getAllMovie')
        .then(function (res) {
          // let iArray = []
          // for (var i = 0; i < 6; i++) {
          //   // eslint-disable-next-line no-undef
          //   iArray.push(_self.getRandom(0, res.data.list.length))
          // }
          // console.log(res.data.list)
          let lists = res.data.list
          let iArray = _self.random(6, 0, res.data.list.length)
          console.log(iArray)
          // console.log(iA[1])
          // // let iArray = []
          // iArray.push(parseInt(iA))
          for (let i = 0; i < iArray.length; i++) {
            let obj = {}
            console.log(iArray)
            obj.img = lists[iArray[i]].movie_img
            obj.title = lists[iArray[i]].movie_name
            obj.movie_name = lists[iArray[i]].movie_name
            obj.movie_url = lists[iArray[i]].movie_url
            // _self.img_slip.push(obj)
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (err) {

        })
    },
    random (len, start, end) {
      var arr = []
      function creat (start, end) {
        var numlen = end - start
        return parseInt(Math.random() * numlen + start)
      }
      while (arr.length < len) {
        var num = creat(start, end)
        if (arr.indexOf(num) === -1) {
          arr.push(num)
        }
      }
      return arr
    }
  },
  mounted () {
    this.getMovie()
  }
}

</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
    text-align: center;
  }
  .el-carousel{
    height: 100%;
    width: 100%;
  }
  .el-carousel__container{
    /*height:500px;*/
  }
  .el-carousel__item{
    width: 100%;
    margin: auto;
    text-align: center;
    /*margin-top:200px;*/
  }
  .el-carousel__item .is-animating{
    width: 100%;
    cursor: pointer;
  }
  img{
    /*margin:auto;*/
    /*width:100%;*/
    /*background-size: contain;*/
    /*max-height:100%;*/
    /*max-width: 100%;*/
    /*height: 100%;*/
    width: 100%;
  }
</style>
