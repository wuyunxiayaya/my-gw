<template>
  <div id="regist_or_login">
    <div class="wrap">

      <div class="regist_sub">
        <div class="left" @click="selectRegist" :class="{'active':registData}">
          注册
          </div>
        <div class="right" @click="selectLogin" :class="{'active':loginData}">登录</div>
        <div class="regists" v-show="registData">
          <el-input  prefix-icon="icon iconfont icon-username" v-model="input_name" placeholder="账号"></el-input>
          <el-input :plain="true"  prefix-icon="icon iconfont icon-email" v-model="input_email" placeholder="邮箱"></el-input>
          <el-input  prefix-icon="icon iconfont icon-password" v-model="input_password" placeholder="密码"></el-input>
          <el-input  prefix-icon="icon iconfont icon-password" v-model="input_password1" placeholder="确认密码"></el-input>
          <div>
            <el-input  prefix-icon="icon iconfont icon-code" class="code" v-model="input_code" placeholder="验证码"></el-input>
            <el-button type="primary" :disabled="disable" :class="{ codeGeting:isGeting }" @click="getVerifyCode">
              {{getCode}}</el-button>
          </div>
          <br/>
          <br/>
          <el-button class="commitbtn" type="primary" @click="commit">注册</el-button>
        </div>
        <div class="login" v-show="loginData">
          <el-input  prefix-icon="icon iconfont icon-username" v-model="input_name" placeholder="账号或邮箱"></el-input>
          <el-input  prefix-icon="icon iconfont icon-password" type="password" v-model="input_password" placeholder="密码"></el-input>
          <div class="forget_pa"><router-link to="/ForgetPass"><span>忘记密码？</span></router-link></div>
          <el-button class="commitbtn" type="primary" @click="login">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Regist',
  data () {
    return {
      input_email: '',
      input_name: '',
      input_password: '',
      input_code: '',
      input_password1: '',
      input: '',
      getCode: '获取验证码',
      isGeting: false,
      count: 59,
      disable: false,
      loginData: true,
      registData: false,
    }
  },
  methods: {
    selectRegist () {
      this.loginData = false
      this.registData = true
    },
    selectLogin () {
      this.loginData = true
      this.registData = false
    },
    reg () {
      return new RegExp('^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$')
    },
    getVerifyCode () { // 发送验证码倒计时
      let email = this.input_email
      let reg = this.reg()
      console.log(email)
      if (email === '') {
        this.msgTip('请输入邮箱', 'warning')
        return false
      } else if (!reg.test(email)) {
        this.msgTip('邮箱格式不正确，请重新输入！', 'error')
        return false
      }
      this.sendCode(email)
      this.isGeting = true
      this.disable = true
      this.getCode = this.count-- + 's后重发'
      var countDown = setInterval(() => {
        if (this.count < 1) {
          this.isGeting = false
          this.disable = false
          this.getCode = '获取验证码'
          this.count = 59
          clearInterval(countDown)
        } else {
          this.isGeting = true
          this.disable = true
          this.getCode = this.count-- + 's后重发'
        }
      }, 1000)
    },
    sendCode (email) { // 发送验证码
      axios.post('http://localhost:3333/vertical', {
        email: email
      })
        .then(function (res) {
          console.log(res)
          if (res.status === 200) {
            // alert('成功')
          }
        })
        .catch(function () {

        })
    },
    commit () { // 注册提交用户信息
      let reg = this.reg()
      if (this.input_name === '') {
        this.msgTip('取个名字吧~', 'warning')
        return
      } else if (this.input_email === '') {
        this.msgTip('邮箱不能为空~', 'warning')
        return
      } else if (this.input_password === '') {
        this.msgTip('您还没输入密码~', 'warning')
        return
      } else if (this.input_password1 === '') {
        this.msgTip('请确认密码~', 'warning')
        return
      } else if (this.input_code === '') {
        this.msgTip('验证码不能为空~', 'warning')
        return false
      } else if (!reg.test(this.input_email)) {
        this.msgTip('邮箱格式不正确，请重新输入！', 'error')
        return false
      }
      if (this.input_password1 !== this.input_password) {
        this.msgTip('两次密码不一致~', 'warning')
        return false
      }
      axios.post('http://localhost:3333/regists', {
        username: this.input_name,
        password: this.input_password,
        email: this.input_email,
        veri: this.input_code
      })
        .then((res) => {
          if (res.data.code === 200) {
            if (res.data.msg === '注册成功') {
              this.msgTip('注册成功', 'success')
            } else if (res.data.msg === '用户名已存在') {
              this.msgTip('用户名已存在', 'warning')
            } else if (res.data.msg === '邮箱已存在') {
              this.msgTip('邮箱已存在', 'warning')
            } else if (res.data.msg === '验证码或邮箱有误') {
              this.msgTip('验证码有误', 'warning')
            }
          } else {
            this.msgTip('注册失败', 'error')
          }
        })
        .catch((err) => {

        })
    },
    login () { // 登录
      // this.input_password
      // this.input_name
      if (this.input_name === '') {
        this.msgTip('您还没输入账号~', 'warning')
        return
      } else if (this.input_password === '') {
        this.msgTip('您还没输入密码~', 'warning')
        return
      }
      axios.post('http://localhost:3333/login', {
        username: this.input_name,
        password: this.input_password,
        tag: 1
      })
        .then((res) => {
          console.log(res.data)
            console.log('2222222');
          if (res.data.code === 200) {
            if (res.data.msg === '登录成功') {
              this.msgTip('登录成功~', 'success')
              // this.msgTip('您还没输入密码~', 'warning');
              let userId = res.data.list[0].id
              let userLogin = res.data.list[0].checkUser
                console.log('111')
              let userName = this.input_name
              // localStorage.setItem("userName",userName)
              this.setCookie('userName', userName, 1)

              this.$router.push({
                path: '/', // 这个path就是你在router/index.js里边配置的路径
                query: {
                  // userId: userId,
                  // userCheck:userLogin
                }
              })
            } else {
              this.msgTip('账号或密码有误~', 'warning')
            }
          }
        })
        .catch((err) => {

        })
    },
    setCookie (c_name, value, expiredays) { // 写入cookie  参数分别为 cookie 的名称、值以及过期天数
      let exdate = new Date()
      exdate.setDate(exdate.getDate() + expiredays)
      document.cookie = c_name + '=' + escape(value) +
          ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
    }
  }
}
</script>

<style scoped lang="scss">
  #regist_or_login{
    position: fixed;
    top:0;
    width:100%;
    height:100%;
    margin: 0;
    padding: 0;
    background-image: url('../../assets/login7.gif');
    background-repeat: no-repeat;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    .wrap{
      /*background: url('../../assets/1.jpg');*/
      background-repeat: no-repeat;
      background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      position: relative;
      height:500px;
      width: 400px;
      text-align:center;
      margin:100px auto;
      /*top:100px;*/
      /*left:60%;*/
      background-color:#fff;
      .regist_sub{
        /*position: relative;*/
        display: inline-block;
        margin-top:100px;
        hr{

        }
        .right,.left{
          position:absolute;
          display: inline-block;
          width:50%;
          top:0;
          /*left:0;*/
          /*height:1px;*/
          right: 0;
          height:90px;
          line-height:120px;
          border-bottom: 1px solid #dde;
          cursor: pointer;
        }
        .active{
          border-bottom: 2px solid #5692ff !important;
        }
        .left{
          left: 0;
        }
      }
    }
    .el-input{
      /*display: block;*/
      border: 0;
      width:280px;
      margin-top:10px;
      input{
        border: 0;
      }
    }
    .commitbtn{
      width: 280px;
      margin-top:10px;
    }
    .code{
      width: 165px;
    }
    .codeGeting{
      background: #cdcdcd;
      border-color: #cdcdcd;
    }
    .login{
      margin-top:50px;
      .forget_pa{
        display: inline-block;
        height:50px;
        line-height:50px;
        width: 280px;
        text-align: right;
        span{
          cursor: pointer;
        }
      }
    }
  }
</style>
