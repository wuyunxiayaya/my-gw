<template>
  <div id="ResumeBody2">
    <div id="selectColor">
      <div class="colorBox" v-show="sColors" @click="cColor">
        <div class="colors" @click.stop>
          <el-color-picker v-model="backgroundColor" show-alpha></el-color-picker>
<!--          <h3>选择主题颜色</h3>-->
<!--          <div class="box" :style='{background:`rgb(${r},${g},${b})`}'></div>-->
<!--          <div>r: <input type="range" min="0" max="255" v-model='r'></div>-->
<!--          <input type="text" v-model='r'>-->
<!--          <div>g: <input type="range" min="0" max="255" v-model='g'></div>-->
<!--          <input type="text" v-model='g'>-->
<!--          <div>b: <input type="range" min="0" max="255" v-model='b'></div>-->
<!--          <input type="text" v-model='b'>-->
        </div>
      </div>
      <el-select v-model="value" placeholder="更换主题" style="position: relative;top:-30px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" @click="changeBgColor" style="position: relative;top:-30px;">更换主题</el-button>
      <el-button type="primary" @click="selectBgColor" style="position: relative;top:-30px;">自定义主题</el-button>
    </div>

    <div class="wrapper" id="pdfDom">
      <div class="left" :style="backgroundColor">
        <div class="img" :contenteditable="true" title="更换照片">
          <img :src=userInfo.avatar alt="" @click.stop="uploadHeadImg">
          <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" style="display: none"/>
        </div>
        <div class="heade">
          <header class="name" :contenteditable="true">名字</header>
          <div class="yx" :contenteditable="true">求职意向：超级前端</div>
        </div>
        <ul class="base_info">
          <li :contenteditable="true">生日：1997/09/09</li>
          <li :contenteditable="true">电话：157********</li>
          <li :contenteditable="true">居住地：海南</li>
          <li :contenteditable="true">邮箱：130@qq.com</li>
        </ul>
        <ul class="others">
          <header :contenteditable="true">掌握技能</header>
          <li :contenteditable="true"><ul>掌握</ul><ul> html,css,javascript，ajax，jq</ul></li>
          <li :contenteditable="true"><ul>熟悉</ul> <ul>node.js,vue,es6</ul></li>
          <li :contenteditable="true"><ul>了解</ul> <ul>java,php</ul></li>
        </ul>
      </div>
      <div class="right">
        <div class="right_wrap">
          <ul class="title" :style=backgroundColor>
                        <span :style=backgroundColor>

                        </span>
            <li :contenteditable="true">XXXX</li>
          </ul>
          <ul>
            <li class="content" :contenteditable="true">
              2015.09-2019.07 &nbsp&nbsp&nbsp&nbsp&nbsp XXXXX学校 &nbsp&nbsp&nbsp&nbsp&nbsp XXXXX专业
              <br/>
              <div><img src="../../../assets/resume/kecheng1.png" alt="">主修课程:</div>
              绝地无双
              我是这样解决的 首先呢数据库里存2个字段，一个是html格式一个是普通文本格式
              请求回来之后，编写的时候在本地用文本格式，网页解析用html格式，解决了问题。
            </li>
            <br/>
          </ul>
          <ul class="title" :style="backgroundColor">
                      <span :style="backgroundColor">

                      </span>
            <li :contenteditable="true">XXXX</li>
          </ul>
          <ul  :contenteditable="true">
            <li class="content">
              2019.07-2020.07 &nbsp&nbsp&nbsp&nbsp&nbsp XXXXX单位 &nbsp&nbsp&nbsp&nbsp&nbsp XXXXX行业
              <br/>
              <div :contenteditable="true"><img src="../../../assets/resume/baogao.png" alt="">工作描述:</div>
              绝地无双
              我是这样解决的 首先呢数据库里存2个字段，一个是html格式一个是普通文本格式
              请求回来之后，编写的时候在本地用文本格式，网页解析用html格式，解决了问题。
              save () {
              this.content.content = this.$refs.md.d_render //html
              this.c
              }
            </li>
            <br/>
          </ul>
          <ul class="title" :style="backgroundColor">
                      <span :style="backgroundColor">

                      </span>
            <li :contenteditable="true">XXXX</li>
          </ul>
          <ul :contenteditable="true">
            <li class="content">
              2019.07-2020.07 &nbsp&nbsp&nbsp&nbsp&nbsp XXXXX单位 &nbsp&nbsp&nbsp&nbsp&nbsp XXXXX行业

              <br/>
              绝地无双
              我是这样解决的 首先呢数据库里存2个字段，一个是html格式一个是普通文本格式
              请求回来之后，编写的时候在本地用文本格式，网页解析用html格式，解决了问题。
              save () {
            </li>
            <br/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'ResumeBody2',
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
                sColors: false,
                backgroundColor:'rgba(19, 206, 102, 0.8)',
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
                    this.r = 236
                    this.g = 238
                    this.b = 236
                    this.color = '#333'
                } else if (this.value === '选项2') {
                    this.r = 52
                    this.g = 64
                    this.b = 81
                    this.color = '#e2e2e2'
                } else if (this.value === '选项3') {
                    this.r = 169
                    this.g = 24
                    this.b = 35
                    this.color = '#e2e2e2'
                } else if (this.value === '选项4') {
                    this.r = 35
                    this.g = 26
                    this.b = 35
                    this.color = '#e2e2e2'
                } else if (this.value === '选项5') {
                    this.r = 59
                    this.g = 108
                    this.b = 61
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
  #ResumeBody2{
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
