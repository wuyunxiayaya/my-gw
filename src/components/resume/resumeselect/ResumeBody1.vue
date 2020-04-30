<template>
  <div id="resumeBody1">
    <div class="content" id="pdfDom">
      <div class="head">
        <header>
          <div class="title">
            <p :contenteditable="true">乌虾虾</p>
            <p :contenteditable="true">意向岗位：超级前端</p>
          </div>
          <div class="img" :contenteditable="true" title="更换照片">
            <img :src=userInfo.avatar alt="" @click.stop="uploadHeadImg">
            <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" style="display: none"/>
          </div>
        </header>
      </div>
      <div class="main_content">
        <div class="left">
          <ul v-for="(item,index) in lists" :key="index">
            <li>
              <div class="title" :contenteditable="true">
                <img src="../../../assets/quanquan.png"> <span :contenteditable="true">{{item.title}}</span>
              </div>
              <ul>
                <span :contenteditable="true">{{item.content}}</span>
                <!--                <span>XXXX</span><span>XXXX</span>-->
              </ul>
            </li>
            <!--            <li>12</li>-->
            <!--            <li>12</li>-->
          </ul>
        </div>
        <div class="right">
          <ul class="right_wrap">
            <li v-for="(item, index) in rightList" :key="index">
              <ul :contenteditable="true">
                {{item.title}}
              </ul>
              <div :contenteditable="true">
                <span v-for="(i,index) in item.imgList" :key="index" :contenteditable="true"><img :src=i alt="">1233</span>
                <!--                <span :contenteditable="true"><img src="../../../assets/resume/dizhi.png" alt="">1233</span>-->
                <!--              <span :contenteditable="true"><img src="../../../assets/resume/shoujihaoma.png" alt="">1233</span>-->
                <!--              <span :contenteditable="true"><img src="../../../assets/resume/youxiang.png" alt="">1233</span>-->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'ResumeBody1',
        data () {
            return {
                userInfo: {
                    avatar: require('../../../assets/timg.jpg')
                },
                lists: [{title: '教育背景',
                    content: '2015/09/01-2019/06/01\t' +
                        ' 海南大学  生物工程（本科）'}, {title: '工作经验',
                    content: '构造方法：用来创建当前类的对象(特殊方法)\n' +
                        '1,    作用:为了构造(构建)当前类的对象\n' +
                        '2,    写法:权限修饰符 方法名字(与类型一致)(参数列表){创建一个对象,当前类;\n' +
                        '默认的构造方法：\n' +
                        '```\n' +
                        'public CreateFn(){//CreateFn为公共类，此方法为公共类默认的构造方法，如果不写，默认存在\n' +
                        '       System.out.println("默认构造方法");\n' +
                        '   }\n' +
                        '```\n' +
                        '构造方法：\n' +
                        '```\n' +
                        'public CreateFn(String name) {//构造方法 \n' +
                        '        this();//调用上面的构造方法  这个this只能放在第一行\n' +
                        '        System.out.println("CreateFn类的构造方法");\n' +
                        '   }\n' +
                        '```\n' +
                        '代码块：\n' +
                        '```\n' +
                        '//写法：\n' +
                        '{\n' +
                        '        //程序块(代码块):理解为一个方法,无参数,无返回值,无名字,无修饰符  {};\n' +
                        '       System.out.println("代码块");\n' +
                        '        用法:需要调用才能执行 我们调用不到\n' +
                        '        每次调用构造方法之前,系统会调用一次\n' +
                        '        没有重载的概念但是可以定义多个块\n' +
                        '   }'}, {title: '自我评价', content: '构造方法：用来创建当前类的对象(特殊方法) 1, 作用:为了构造(构建)当前类的对象 2, 写法:权限修饰符 方法名字(与类型一致)(参数列表){创建一个对象,当前类; 默认的构造方法： ``` public CreateFn(){//CreateFn为公共类，此方法为公共类默认的构造方法，如果不写，默认存在 System.out.println("默认构造方法"); } ``` 构造方法： ``` public CreateFn(String name) {//构造方法 this();//调用上面的构造方法 这个this只能放在第一行 System.out.println("CreateFn类的构造方法"); } ``` 代码块： ``` //写法： { // //程序块(代码块):理解为一个方法,无参数,无返回值,无名字,无修饰符 {}; System.out.println("代码块"); //// 用法:需要调用才能执行 我们调用不到 //// 每次调用构造方法之前,系统会调用一次 //// 没有重载的概念但是可以定义多个块 }'}],
                rightList: [{title: '个人信息', imgList: [require('../../../assets/timg.jpg'), require('../../../assets/resume/dizhi.png'), require('../../../assets/resume/dizhi.png')]}, {title: '兴趣爱好', imgList:[{img: require('../../../assets/timg.jpg')}]}, {title: '吃喝嫖赌', imgList:[{img: require('../../../assets/timg.jpg')}]}]
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
    text-decoration: none;
    list-style: none ;
  }
  *{
    outline: none;
  }
  #resumeBody1{
    height:100%;
    width: 100%;
    margin:0;
    padding:0;
    .content{
      width: 800px;
      margin: auto;
      background-color: #fffcff;
      .head{
        header{
          position: relative;
          /*text-align: center;*/
          height:110px;
          width: 100%;
          background-image: url("../../../assets/bg_test/5.jpg");
          /*background-color: #93a1a1;*/
          div{
            display: inline-block;
          }
          .title{
            /*text-align: center;*/
            left:30px;
            height:100%;
            line-height: 110px;
            p{
              font-size: 21px;
              font-family:宋体;
              display: inline-block;
              min-width: 200px;
              max-width:300px;
              margin:0;
              padding:0;
              /*height:50px;*/
              /*line-height: 50px;*/
              padding-left: 20px;
              white-space: nowrap;
              overflow: hidden;
            }
          }
          .img{
            cursor: pointer;
            position: absolute;
            right:17%;
            top:15px;
            height: 130px;
            /*border: 1px solid;*/
            margin-right: -75px;
            z-index: 2;
            /*width: 20%;*/
            width: 130px;
            img{
              width: 100%;
              height:100%;
            }
          }
        }
      }
      .main_content{
        position: relative;
        width: 100%;
        .left{
          width:70%;
          display: inline-block;
          li{
            /*border-bottom: 1px solid #eee;*/
            padding:20px;
            min-height:80px;
            /*line-height: 80px;*/
            span{
              display: inline-block;
              min-width: 100px;
              max-width: 100%;
              /*border-bottom: 1px solid #eee;*/
            }
            div{
              img{
                height:25px;
                vertical-align:middle;
              }
            }
            ul{
              margin-top:10px;
              span{
                /*width: 200px;*/
              }
            }
            .title{
              border-bottom: 1px solid #eee;
            }
          }
        }
        .right{
          position: absolute;
          height:100%;
          top:-20px;
          width:28%;
          display: inline-block;
          background-color: #f1f1f1;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
          .right_wrap{
            margin-top:55px;
            /*margin-top:10px;*/
          }
          li{
            /*border: 1px solid;*/
            padding:10px 20px;
            height:100%;
            /*min-height:80px;*/
            /*line-height: 80px;*/
            ul{
              text-align: center;
              height:30px;
              border-bottom: 1px solid #d2c9c9;
            }
            div{
              span{
                display: block;
                margin-top:10px;
                img{
                  height:16px;
                  vertical-align: middle;
                  background-color: #929292;
                }
              }
            }
          }
        }
        ul,li{
          list-style: none;
          padding:0;
          margin:0;
        }
      }
    }
  }
</style>
