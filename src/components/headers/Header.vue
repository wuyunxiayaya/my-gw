<template>
    <div id="wrap">
      <div class="line"></div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">主页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">电影</template>
          <router-link to="/Movies" target="_blank"><el-menu-item index="2-1">电影首页</el-menu-item></router-link>
          <router-link to="/Test" target="_blank"><el-menu-item index="2-2">贪吃蛇</el-menu-item></router-link>
          <router-link to="/math" target="_blank"><el-menu-item index="2-3">选项3</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">博客</template>
          <router-link to="/Blog" target="_blank"><el-menu-item index="3-1">博客管理</el-menu-item></router-link>
          <router-link to="/Writer_blog" target="_blank"><el-menu-item index="3-2">写博客</el-menu-item></router-link>
          <router-link to="/ViewBlog" target="_blank"><el-menu-item index="3-3">查看博客</el-menu-item></router-link>
          <router-link to="/Game" target="_blank"><el-menu-item index="3-3">选项3</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">简历</template>
          <router-link to="/Rrsume" target="_blank"><el-menu-item index="4-1">模板选用</el-menu-item></router-link>
          <router-link to="/MyResume" target="_blank"><el-menu-item index="4-2">我的简历</el-menu-item></router-link>
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-submenu>
          <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">没想好</a></el-menu-item>
        <el-menu-item index="5"> <router-link to="/EatSomething" target="_blank">吃什么</router-link></el-menu-item>
          <el-menu-item index="6" v-show="logoutTxt"><router-link to="/regist" _target="_black">登录</router-link></el-menu-item>
        <el-submenu index="6"  v-show="login">
          <template slot="title" v-model="username">
<!--            <span class="icon iconfont icon-user" style="font-size: 21px;margin-right: 5px;"></span>-->
            <div class="head-img-wrap">
              <img class="headImg" :src=userInfo.avatar alt="" @click.stop="uploadHeadImg" title="更换头像">
              {{username}}
            </div>
            <input id="input" type="file" accept="image/*" @change="handleFile($event)" class="hiddenInput" style="display: none"/>

          </template>
          <el-menu-item index="6-2" @click="logout">退出登录</el-menu-item>
          <router-link to="/ContactWe" target="_blank"><el-menu-item index="6-3">反馈</el-menu-item></router-link>

        </el-submenu>
<!--          <el-menu-item index="7"><router-link to="/regist" _target="_black">注册</router-link></el-menu-item>-->
      </el-menu>

    </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      mouseIndex: '',
      username: '登录',
      login: '',
      logoutTxt: '',
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
      // console.log(file)
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
        // console.log(res.result)
        this.getImg(e)
      }
      reader.readAsDataURL(file)
      // console.log(this.userInfo.avatar)
      // eslint-disable-next-line no-unused-vars
      let imgUrl = this.userInfo.avatar
      // this.getImg(imgUrl)
    },
    getImg (event) {//上传头像
        console.log(this.userInfo.avatar)
      let userName = this.getCookie('userName')
        this.file = event.target.files[0];  //获取上传元素信息
        var that = this
        event.preventDefault();
        // 只能通过formData方式来传输文件
        var formData = new FormData();
        formData.append('file', this.file);
        formData.append('userName', userName);
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        this.$http.post('http://localhost:3333/image', formData, config).then(function(res) {
            console.log(res.data.code)
            if (res.data.code == '0') {
                /*这里做处理*/
                that.init();  //   给avatar赋上新的值，否则要刷新获取
            }
        })
    },
    getParam () { // 获取cookie
        let _self = this
        console.log(this.getCookie('userName'))
        // if (!this.getCookie('userName')){
        //     // this.username = this.getCookie('userName')
        //     // return;
        // }
        this.$http.get('http://localhost:3333/getUserInfo?username=' + this.getCookie('userName'))
            .then(function (res) {
                console.log(res.data)
                if(res.data.code===200){
                    console.log(res.data.list.length===0)
                    if(res.data.list.length===0){
                        console.log( _self.getCookie('userName'))
                        _self.setCookie('userName', '', -1)
                        return false
                    }
                    console.log(res.data.list[0].checkUser)
                    if(res.data.list[0].checkUser!==1){
                        console.log()
                        _self.setCookie('userName', '', -1)
                        return false;
                    }
                }
            })
            // eslint-disable-next-line handle-callback-err
            .catch(function (err) {

            })
      if (this.getCookie('userName')) {
        this.username = this.getCookie('userName')
        this.login = true
        this.logoutTxt = false
        this.getImgUrl(this.username)
      } else {
        this.login = false
        this.logoutTxt = true
      }
    },
    getImgUrl (userName) { // 获取图片
      let _self = this
      this.$http.get('http://localhost:3333/getImgUrl?userName=' + userName)
        .then(function (res){
          console.log(res.data.list[0].img)
            // require('../../assets/timg.jpg')
          // let img = Base64.decode(res.data.list[0].img) // 解码
          //   console.log(img)
            if(res.data.list[0].img!==null){
                _self.userInfo.avatar = 'http://116.62.147.89/img/'+res.data.list[0].img
            }
            // _self.userInfo.avatar = img
        })
        .catch(function (err) {

        })
    },
    logout () { // 退出登录
      // let name = this.getCookie("userName");
        let userName = this.getCookie('userName')
        console.log(userName)
        this.$http.get('http://localhost:3333/logout?userName=' + userName)
            .then(function(res){
                this.setCookie('userName', '', -1)
            })
            .catch(function(err){

            })

        this.$router.push({
            path: '/Regist'// 这个path就是你在router/index.js里边配置的路径
        })
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    this.getParam()
  }
}
</script>

<style scoped lang="scss">

  #wrap{
    position:relative;
    top:0;
    height:50px;
    width: 100%;
    li{
      margin-left:20px;
    }
  }
  .head-img-wrap{
    /*height:35px;*/
    /*width: 35px;*/
    /*border-radius: 50%;*/
    /*  overflow: hidden;*/
    .headImg{
      max-height:40px;
      /*max-width: 50px;*/
      /*background-size: auto;*/
      border-radius: 10px;
    }
  }
  *{
    color:#fff;
    text-decoration: none;
  }
  .el-menu-item *{
    text-decoration: none;
    color:#fff;
  }

</style>
