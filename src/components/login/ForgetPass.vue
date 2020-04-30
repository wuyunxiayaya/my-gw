<template>
  <div>
    <div class="wrap">
      <el-input :plain="true"  prefix-icon="icon iconfont icon-email" v-model="input_email" placeholder="邮箱"></el-input>
      <el-input  prefix-icon="icon iconfont icon-password" class="pass" v-model="input_pass" placeholder="新密码"></el-input>
      <el-input  prefix-icon="icon iconfont icon-password" class="pass1" v-model="input_pass1" placeholder="确认密码"></el-input><br/>
      <el-input  prefix-icon="icon iconfont icon-code" class="code" v-model="input_code" placeholder="验证码"></el-input>
      <el-button type="primary" :disabled="disable" :class="{ codeGeting:isGeting }" @click="getVerifyCode">
        {{getCode}}</el-button><br/><br/>
      <el-button class="commitbtn" type="primary" @click="findPass">找回密码</el-button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ForgetPass',
  data () {
    return {
      getCode: '获取验证码',
      isGeting: false,
      count: 59,
      disable: false,
      input_email: '',
      input_code: '',
      input_pass1: '',
      input_pass: ''
    }
  },
  methods: {
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
      findPass(){
          let reg = this.reg()
          let email = this.input_email
          let input_code = this.input_code
          let input_pass1 = this.input_pass1
          let input_pass = this.input_pass
          let _self = this
          // if(input_pass||input_pass1===''){
          //     _self.msgTip("密码不能为空","warning")
          //     return
          // }
          if(input_pass1!==input_pass){
              _self.msgTip('两次密码不一致', 'warning')
              return;
          }
          if (email === '') {
              _self.msgTip('请输入邮箱', 'warning')
              return false
          } else if (!reg.test(email)) {
              _self.msgTip('邮箱格式不正确，请重新输入！', 'error')
              return false
          }
          this.$http.post("http://localhost:3333/findPassword",{
              email:email,
              code: input_code,
              password:input_pass
          })
              .then((res)=>{
                  console.log(res)
                  if(res.data.code===200){
                      _self.msgTip("修改成功","success")
                      this.$router.push({
                          path: '/Regist', // 这个path就是你在router/index.js里边配置的路径
                          // query: {
                          //     userId: userId
                          // }
                      })
                      return
                  }else if(res.data.code===-1){
                      _self.msgTip("验证码错误或邮箱未注册","error")
                      return
                  }
                 _self.msgTip("修改失败","error")
              })
              .catch((err)=>{
                  _self.msgTip("修改失败","error")
              })
      }
  }
}
</script>

<style scoped lang="scss">
  .wrap{
    width: 300px;
    margin:100px auto;
    .el-input{
      /*display: block;*/
      border: 0;
      width:280px;
      margin-top:10px;
    }
    .code{
      width: 165px;
    }
  }
</style>
