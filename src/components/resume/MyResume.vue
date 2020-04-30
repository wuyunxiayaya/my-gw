<template>
    <div id="my">
      <div class="wrap">
        <HeadResume></HeadResume>
        <div class="main_content" id="pdfDom">
          <header class="content_header">
            <div class="img" :contenteditable="true" title="更换照片">
              <img :src=userInfo.avatar alt="" @click.stop="uploadHeadImg">
              <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" style="display: none"/>
            </div>
            <div class="uname">
              <p>
                姓名：<span :contenteditable="true" class="name">XXXX</span>
              </p>
              <p>
                XXXX：<span :contenteditable="true" class="yx">XXXX</span>
              </p>
            </div>
          </header>
          <div class="resume_content">
            <div class="left">
              <ul>
                <li v-for="(item, index) in leftBasemsg" :key="index">
                  <div class="content_titles">
                    <span :contenteditable="true">
                       <img style="max-width:20px" :src=item.img alt="">
                    </span>
                    <span :contenteditable="true">{{item.baseTiyle}}</span>
                  </div>
                  <div class="base_msg" :contenteditable="true">
                    <p >{{item.content}}</p>
                  </div>
                </li>
              </ul>
            </div>
<!--            <div class="right">-->
<!--              <ul>-->
<!--                <li>模块</li>-->
<!--                <li>模块</li>-->
<!--                <li>模块</li>-->
<!--              </ul>-->
<!--            </div>-->
          </div>

        </div>
        <ResumeFoot style="position: relative;bottom: 0;width: 100%;"></ResumeFoot>
      </div>
    </div>
</template>

<script>
  import HeadResume from './HeadResume'
  import ResumeFoot from './ResumeFoot'
export default {
  name: 'MyResume',
  // eslint-disable-next-line no-undef
  components: {HeadResume, ResumeFoot},
  data () {
    return {
      leftBasemsg: [{img: require('../../assets/daxiao.png'), baseTiyle: '基本信息', content: 'shift+回车换行  直接回车换行画线'},
        {img: require('../../assets/daxiao.png'), baseTiyle: '基本信息', content: 'shift+回车换行  直接回车换行画线'},
        {img: require('../../assets/daxiao.png'), baseTiyle: '基本信息', content: 'shift+回车换行  直接回车换行画线'}],
      htmlTitle: '页面导出PDF文件名',
      userInfo: {
        avatar: require('../../assets/timg.jpg')
      }
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
    }
  }

}
</script>

<style scoped lang="scss">
  ul,li{
    list-style: none;
  }
  #my{
    background-color: rgba(245, 245, 245, 1);
    height:100%;
    width: 100%;
    .wrap{
      height:100%;
      width: 100%;
      .main_content{
        /*height:100%;*/
        width: 90%;
        margin:auto;
        background-color:rgba(255, 255, 255, 1);
        .content_header{//标题
          /*background-image: url("../../assets/timg.jpg");*/
          position: relative;
          height:120px;
          background-color: #ffffff;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.3s ease-in-out;

          div{
            display: inline-block;
          }
          .img{
            margin-left:10px;
            cursor: pointer;
            height:100%;
            img{
              height:100%;
            }
          }
          .uname{
            font-family: 'Microsoft YaHei', '黑体-简', '\5b8b\4f53';
            position: absolute;
            margin-left: 20px;
            height:100%;
            p{
              font-size:18px;
              margin:0;
              height:60px;
              /*padding:10px 20px;*/
              line-height: 60px;
              vertical-align: top;
              .name,.yx{
                display: inline-block;
                min-width: 100px;
                max-width: 200px;
                height:30px;
                line-height:30px;
              }
            }
          }
        }
        .resume_content{
          height:100%;
          width: 100%;
          border: 1px solid #eee;
        }
        .left,.right{
          /*border:1px solid;*/
          display: inline-block;
          height:100%;
        }
        .left{
          width: 100%;
          li{
            vertical-align: middle;
            /*line-height: 150px;*/
            min-height:30px;
            padding:10px 5px;
            /*border: 1px solid #eee;*/
            /*text-align: center;*/
            margin-top: 20px;
            div{
              img{
                vertical-align: top;
              }
              span{
                display: inline-block;
                width: 80%;
              }
            }
            .content_titles{
              font-family: STXihei;
            }
            .base_msg{
              padding-left:20px;
              p{
                padding-left:10px;
                border-bottom: 1px solid #adadad;
                font-size: 14px;
              }
            }
          }
          li:hover{
            /*box-shadow:0px 2px 10px rgba(0, 0, 0, 0.3);*/
          }
        }
        .right{
          width:20%;
        }
      }
    }
  }
</style>
