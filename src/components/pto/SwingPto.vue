<template>
  <div class="v-waterfall-content" id="v-waterfall">
    <div class="bg_wrap" id="bgs">
      <div v-for="(img,index) in imgArr" :key="index" class="v-waterfall-item" @click="viewImg(img)">
<!--        <a :href=img>-->
          <img id="img" v-lazy="img" alt="">
<!--        </a>-->
      </div>
    </div>
    <div class="animated fadeIn fast show-img" v-show="flag" @mousedown="flag=false">
      <img :src=img alt="">
    </div>

    <foot style="display:inline-block;width: 100%;text-align: center">
      图片均来自网络，如有侵权，请<router-link to="./ContactWe" target="_blank" style="color:black;text-decoration: none">联系</router-link>删除
    </foot>
  </div>
</template>

<script>
export default {
  name: 'v-waterfall',
  data () {
    return {
      waterfallList: [],
      img: '',
      flag: false,
      imgArr: [
        require('../../assets/swingPic/b1.jpg'),
        require('../../assets/swingPic/b2.jpg'),
        require('../../assets/swingPic/b3.jpg'),
        require('../../assets/swingPic/b4.jpg'),
        require('../../assets/swingPic/b5.jpg'),
        require('../../assets/swingPic/b6.jpg'),
        require('../../assets/swingPic/b7.jpg'),
        require('../../assets/swingPic/b8.jpg'),
        require('../../assets/swingPic/b9.jpg'),
        require('../../assets/swingPic/b10.jpg'),
        require('../../assets/swingPic/b11.jpg'),
        require('../../assets/swingPic/b12.jpg'),
        require('../../assets/swingPic/b13.jpg'),
        require('../../assets/swingPic/b14.jpg'),
        require('../../assets/swingPic/b15.jpg'),
        require('../../assets/swingPic/b16.jpg'),
        require('../../assets/swingPic/b17.jpg'),
        require('../../assets/swingPic/b18.jpg'),
        require('../../assets/swingPic/b19.jpg'),
        require('../../assets/swingPic/b20.jpg'),
        require('../../assets/swingPic/b21.jpg'),
        require('../../assets/swingPic/b22.jpg'),
        require('../../assets/swingPic/b23.jpg'),
        require('../../assets/swingPic/b24.jpg'),
        require('../../assets/swingPic/b25.jpg'),
        require('../../assets/swingPic/b26.jpg'),
        require('../../assets/swingPic/b27.jpg'),
        require('../../assets/swingPic/b28.jpg'),
        require('../../assets/swingPic/b29.jpg'),
        require('../../assets/swingPic/b30.jpg'),
        require('../../assets/swingPic/b31.jpg'),
        require('../../assets/swingPic/32.jpg'),
        require('../../assets/swingPic/33.jpg'),
        require('../../assets/swingPic/34.jpg'),
        require('../../assets/swingPic/35.jpg'),
        require('../../assets/swingPic/36.jpg'),
        require('../../assets/swingPic/37.jpg'),
        require('../../assets/swingPic/38.jpg'),
        require('../../assets/swingPic/39.jpg'),
        require('../../assets/swingPic/40.jpg'),
        require('../../assets/swingPic/41.jpg'),
        require('../../assets/swingPic/42.jpg'),
        require('../../assets/swingPic/43.jpg'),
        require('../../assets/swingPic/44.jpg'),
        require('../../assets/swingPic/45.jpg'),
        require('../../assets/swingPic/46.jpg')
      ],
      waterfallImgWidth: 800,
      waterfallImgCol: 3,
      waterfallImgRight: 10,
      waterfallImgBottom: 10,
      waterfallDeviationHeight: [],
      imgList: []
    }
  },
  created () {
    for (let i = 0; i < this.imgArr.length; i++) {
      this.imgList.push(this.imgArr[i])
    }
  },
  mounted () {
    // this.calculationWidth()
  },
  methods: {
    viewImg (img) {
      this.img = img
      this.flag = true
      // console.log(111)
      // let bg = document.getElementById('bgs')
      // console.log(bg)
      // bg.style.backgroundColor = 'red'
    }
  }
  // methods: {
  //   // 计算每个图片的宽度或者是列数
  //   calculationWidth () {
  //     let domWidth = document.getElementById('v-waterfall').offsetWidth
  //     if (!this.waterfallImgWidth && this.waterfallImgCol) {
  //       this.waterfallImgWidth = (domWidth - this.waterfallImgRight * this.waterfallImgCol) / this.waterfallImgCol
  //     } else if (this.waterfallImgWidth && !this.waterfallImgCol) {
  //       this.waterfallImgCol = Math.floor(domWidth / (this.waterfallImgWidth + this.waterfallImgRight))
  //     }
  //     // 初始化偏移高度数组
  //     this.waterfallDeviationHeight = new Array(this.waterfallImgCol)
  //     for (let i = 0; i < this.waterfallDeviationHeight.length; i++) {
  //       this.waterfallDeviationHeight[i] = 0
  //     }
  //     this.imgPreloading()
  //   },
  //   // 图片预加载
  //   imgPreloading () {
  //     for (let i = 0; i < this.imgList.length; i++) {
  //       let aImg = new Image()
  //       aImg.src = this.imgList[i]
  //       aImg.onload = aImg.onerror = (e) => {
  //         let imgData = {}
  //         imgData.height = this.waterfallImgWidth / aImg.width * aImg.height
  //         imgData.src = this.imgList[i]
  //         this.waterfallList.push(imgData)
  //         this.rankImg(imgData)
  //       }
  //     }
  //   },
  //   // 瀑布流布局
  //   rankImg (imgData) {
  //     let {waterfallImgWidth, waterfallImgRight, waterfallImgBottom, waterfallDeviationHeight, waterfallImgCol} = this
  //     // for (let i = 0;i < this.waterfallList.length;i++){
  //     let minIndex = this.filterMin()
  //     imgData.top = waterfallDeviationHeight[minIndex]
  //     imgData.left = minIndex * (waterfallImgRight + waterfallImgWidth)
  //     waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom
  //     // }
  //     console.log(imgData)
  //   },
  //   /**
  //      * 找到最短的列并返回下标
  //      * @returns {number} 下标
  //      */
  //   filterMin () {
  //     const min = Math.min.apply(null, this.waterfallDeviationHeight)
  //     return this.waterfallDeviationHeight.indexOf(min)
  //   }
  // }
}
</script>

<style scoped lang="scss">
  .v-waterfall-content{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .v-waterfall-item{
    display: inline-block;
    padding:10px;
    /*float: left;*/
    /*position: absolute;*/
  }
  .v-waterfall-item img{
    display: inline-block;
    /*width: 200px;*/
    height: 150px;
  }
  .bg_wrap{
    position: relative;
    /*height:100%;*/
    /*width: 100%;*/
    background-image: url("../../assets/swingPic/image.gif");
    /*background-size: contain;*/
    background-repeat: repeat;
  }
  img{
    border: 7px solid #fff;
    -webkit-box-shadow: 1px 1px 1px #aaa;
    box-shadow: 1px 1px 1px #aaa;
    cursor: pointer;
  }
  .show-img{
    position: fixed;
    top:0;
    height:100%;
    width: 100%;
    background-color: #585a5a9e;
    img{
      position: absolute;
      width: 90%;
      left:5%;
      top:30%;
    }
  }
</style>
