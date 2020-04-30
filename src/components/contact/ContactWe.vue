<template>
    <div id="edit">
      <div class="wrap">
        <div class="title">反馈</div>
        <textarea v-model="text" name="text" id="" cols="30" rows="10" placeholder="请输入内容">{{text}}</textarea>
        <el-button type="primary" @click="feedback">提交</el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ContactWe",
        data () {
            return{
                text: ''
            }
        },
        methods:{
            feedback(){
                let interText = this.text
                let userName = this.getCookie('userName')
                if(interText === ''){
                    this.msgTip('内容不能为空','warning')
                    return;
                }
                this.$http.get("http://localhost:3333/feedback?userName="+userName+'&interText='+interText)
                    .then(function(res){
                        console.log(res)
                    })
                    .catch(function(err){

                    })
            }
        }
    }
</script>

<style scoped lang="scss">
  .wrap{
    display: inline-block;
    margin:50px;
    .title{
      height:35px;
      width: 100%;
      background-color: #5f9c9c;
      position: fixed;
      top:0;
      left:0;
      line-height: 35px;
      padding-left:20px;
      color:#dde;
    }
    textarea{
      padding-left:15px;
      height:200px;
      width: 400px;
      outline: none;
    }
  }
</style>
