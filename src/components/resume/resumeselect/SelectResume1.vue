<template>
    <div id="canvasd">
      <HeadResume></HeadResume>
      <ResumeBody2></ResumeBody2>
      <div style="margin-top:200px">
        <ResumeFoot></ResumeFoot>
      </div>

    </div>
</template>

<script>
import HeadResume from '../HeadResume'
import ResumeFoot from '../ResumeFoot'
import ResumeBody2 from "./ResumeBody2";
export default {
  name: 'MoreResume',
  components: {HeadResume, ResumeFoot,ResumeBody2},
  data () {
    return {
      userInfo: {
        avatar: require('../../../assets/timg.jpg')
      },
      color: '#e2e2e2',
      options: [{
        value: '选项1',
        label: '简约'
      }, {
        value: '选项2',
        label: '轻奢'
      }, {
        value: '选项3',
        label: '热情'
      }, {
        value: '选项4',
        label: '稳重'
      }, {
        value: '选项5',
        label: '别致'
      }],
      value: '',
      r: 0,
      g: 0,
      b: 0,
      sColors: false
    }
  },
  methods: {
    // 打开图片上传
    uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
    changeBgColor () {
      console.log(this.value)
      if (this.value === '选项1') {
        this.r = 236;
        this.g = 238;
        this.b = 236;
        this.color = '#333'
      } else if (this.value === '选项2') {
        this.r = 52;
        this.g = 64;
        this.b = 81;
        this.color = '#e2e2e2'
      } else if (this.value === '选项3') {
        this.r = 169;
        this.g = 24;
        this.b = 35;
        this.color = '#e2e2e2'
      } else if (this.value === '选项4') {
        this.r = 35;
        this.g = 26;
        this.b = 35;
        this.color = '#e2e2e2'
      } else if (this.value === '选项5') {
        this.r = 59;
        this.g = 108;
        this.b = 61;
        this.color = '#e2e2e2'
      }
    },
    selectBgColor () {
      this.sColors = true
    },
    cColor () {
      this.sColors = false
    }
  },
  updated () {
    // this.changeBgColor()
  }
}
</script>

<style scoped lang="scss">
    *{
      outline: none;
    }
    ul,li{
        list-style: none;
        margin:0;
        padding:0;
    }
    #canvasd{
      background-color: #ddd;
        height:100%;
        width: 100%;
        .wrapper{
            position: relative;
          /*top:20px;*/
            /*border:1px solid;*/
            margin:auto;
            width: 800px;
            height:100%;
            /*div{*/
            /*    display: inline-block;*/
            /*}*/
            .left{
              position: absolute;
              float: left;
              display: inline-block;
                color:#e2e2e2;
                /*background-color: rgb(52,64,81);*/
                text-align: center;
                vertical-align: top;
                /*border-right:1px solid;*/
                height:100%;
                width: 25%;
                .img{
                  display: inline-block;
                    width: 95px;
                    margin-top:30px;
                    cursor: pointer;
                    text-align: center;
                    img{
                        width:100%;
                    }
                }
                .heade{
                    margin-top:10px;
                    .name{
                        font-size: 22px;
                    }
                    .yx{
                        font-size:13px;
                    }
                }
                .base_info{
                    margin-top:30px;
                    text-align: left;
                    li{
                        // border:1px solid;
                        min-height:25px;
                        line-height: 25px;
                        padding:6px 30px;
                        font-size:13px;
                    }
                }
                .others{
                    margin-top:30px;
                    header{
                        font-size:15px;
                        padding:10px;
                        margin-bottom:10px;
                    }
                    li{
                        min-height:25px;
                        // padding:6px 30px;
                        padding:10px;
                        font-size:13px;
                        // border-bottom: 1px solid #eee;
                        ul{
                            text-align: left;
                            padding-bottom:10px;
                            // padding-left:20px;
                        }
                    }
                }
            }
            .right{
              /*float: left;*/
              /*position: absolute;*/
              display: inline-block;
              /*background-image: url("../../../assets/bg_test/1.jpg");*/
              /*background-position: center;*/
              /*background-size: 100%;*/
              /*margin-top:30px;*/
                margin-left:25%;
                height:100%;
                width: 74%;
              background-color: #fff;
                /*// border-left:1px solid red;*/
              .right_wrap{
                height:100%;
                width: 80%;
                /*border:1px solid;*/
                margin:30px auto;
                /*width: ;*/
              }
              div{
                width: 100%;
              }
              .title{
                position: relative;
                width: 100%;
                /*border-bottom: 1px solid rgb(22,142,233);*/
                /*border:1px solid rgb(22,142,233);*/
                background-color: rgba(22,142,233,0.2);
                border-radius: 5px;
                height:30px;
                margin-bottom: 10px;
                font-weight: bold;
                span{
                  display: inline-block;
                  width: 60px;
                  height:29px;
                  /*border:1px solid rgb(22,142,233);*/
                  background-color: #0C9A9A;
                  border-radius: 5px;
                  /*border-bottom: 3px solid rgb(22,142,233);*/
                }
                li{
                  position: absolute;
                  left:80px;
                  display: inline-block;
                  line-height: 30px;
                  min-width: 80px;
                }
              }
              .content{
                line-height: 2em;
                /*margin-left:20px;*/
                /*margin-bottom: 40px;*/
                div{
                  img{
                    vertical-align: middle;
                    height:25px;
                  }
                }
              }
            }
        }
    }
/*  调色板*/
    .colorBox{
      position: fixed;
      height:100%;
      width: 100%;
      background-color: #dcdcdc66;
      z-index: 5;
      .colors{
        text-align: center;
        z-index: 6;
        position: absolute;
        right: 10px;
        background-color: #fff;
      }
    }
    .box{
      margin:auto;
      width: 100px;
      height: 100px;
    }
</style>
