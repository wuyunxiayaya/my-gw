<template>
  <div id="blog">
    <div class="bg_wrap">
      <header class="header">
        <div class="header_content">
          <div class="header_title">
            <el-input style="width:200px;" v-model="input_select" @keyup.enter='commitSelect' placeholder="输入查找"></el-input> <el-button @click="commitSelect" type="success">提交</el-button>
            <span class="write"><router-link to="Writer_blog" target="_blank">写博客</router-link></span>
          </div>
        </div>
      </header>

      <div class="content">
        <ul class="content_wrap">
          <li v-if="isloaded" class="content_list animated fadeInLeft fast" v-for="(item,index) in lists" :key="index" :style="{'animation-delay': index * 0.2 + 's'}"
              >
            <div class="content_sublist" v-for="(i,index) in item.list" :key="index">
              <div @click="showBlog(i.id, i.title)" class="div">
                <span style="display:inline-block;font-weight: bold;max-width: 100%;overflow: hidden;white-space: nowrap;">{{i.title}}</span><br/>
                <code style="display: inline-block;max-height: 30px;max-width: 100%;line-height: 30px;overflow:hidden">{{i.content}}</code><br/>
                <span>{{i.date}}</span>
              </div>
              <ul class="icon_show">
                <i @click="editBlog(i.id,i.title,i.content)" title="编辑" class="el-icon-edit"></i>
                <i @click="delBlog(i.userName,i.id)" title="删除" class="el-icon-delete"></i>
                <i title="可见" class="el-icon-view"></i>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Blog',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '没想好'
      }, {
        value: '选项2',
        label: '没想好'
      }, {
        value: '选项3',
        label: '没想好'
      }, {
        value: '选项4',
        label: '没想好'
      }, {
        value: '选项5',
        label: '没想好'
      }],
      value: '',
      input: '',
      visibles: '',
      input_select: '',
      lists: [],
      isloaded: false,
      imgList: [require('../../assets/swingPic/b1.jpg'), require('../../assets/swingPic/b2.jpg'),
        require('../../assets/swingPic/b3.jpg')],
      img: require('../../assets/swingPic/b1.jpg')
    }
  },
  methods: {
    showBlog (id, title) { // 跳转到博客详情
      this.$router.push({path: '/Show_blog', query: {blogId: id, title: title}})
    },
    getBlog () { // 获取博客列表
      let _self = this
      let userName = _self.getCookie('userName')
      if (!userName) {
        return
      }
      this.$http.get('http://localhost:3333/getBlog?userName=' + userName)
        .then(function (res) {
          // console.log(res.data);
          if (res.data.code === 200) {
            let data = res.data.list
            let arr = []
            // console.log(data.length)
            for (let i = 0; i < data.length; i++) {
              console.log('1112')
              console.log(res.data.list[i].content)
              // eslint-disable-next-line no-undef
              console.log(Base64.decode('112'))
              let dataObj = {}
              let obj = {}
              let inarr = []
              obj.title = res.data.list[i].title
              obj.date = res.data.list[i].date
              // obj.content = res.data.list[i].content;
              // console.log(Base64.decode(res.data.list[i].content))
              // eslint-disable-next-line no-undef
              obj.content = Base64.decode(res.data.list[i].content) // 解码
              obj.userName = res.data.list[i].userName
              obj.id = res.data.list[i].id
              var index = obj.date.lastIndexOf('\T')
              obj.date = obj.date.substring(index, 0)
              // obj.bg_url = require('../../../assets/swingPic/b' + i + '.jpg')
              inarr.push(obj)
              dataObj.list = inarr
              // console.log(dataObj)
              // [{[{}]}]
              arr.push(dataObj)
            }
            console.log(arr)
            setTimeout(() => {
              if (!_self.isloaded) {
                _self.lists = arr
                _self.isloaded = true
              } else {
                _self.isloaded = false
                _self.lists = []
              }
            }, 300)
            // _self.lists = arr;
          }
        })
        .catch(function (err) {

        })
    },
    delBlog (userName, id) { // 删除博客
      this.$confirm('是否删除此条博客?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let _self = this
        this.$http.post('http://localhost:3333/delBlog', {
          userName: userName,
          id: id
        })
          .then(function (res) {
            console.log(res.data)
            if (res.data.code === 200) {
              console.log(res.data.code)
              _self.$message({
                type: 'success',
                message: '删除成功!'
              })
              setTimeout(function () {
                window.location.reload()
              }, 1000)
            }
          })
          .catch(function (err) {

          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    editBlog (id, title, content) { // 编辑博客
      this.$router.push({
        path: '/writer_blog', // 这个path就是你在router/index.js里边配置的路径
        query: {
          blogId: id,
          title: title,
          content: content
        }
      })
    },
    commitSelect () { // 搜索
      let _self = this
      let keyWord = this.input_select
      this.$http.get('http://localhost:3333/selectBlog?keyWord=' + keyWord, {

      })
        .then(function (res) {
          _self.lists = ''
          let data = res.data.list
          let arr = []
          console.log(data.length)
          if (data.length === 0) {
            _self.msgTip('没有数据!', 'warning')
          }
          for (let i = 0; i < data.length; i++) {
            console.log('1112')
            let dataObj = {}
            let obj = {}
            let inarr = []
            obj.title = res.data.list[i].title
            obj.date = res.data.list[i].date
            obj.content = res.data.list[i].content
            obj.userName = res.data.list[i].userName
            obj.id = res.data.list[i].id
            var index = obj.date.lastIndexOf('\T')
            obj.date = obj.date.substring(index, 0)
            inarr.push(obj)
            dataObj.list = inarr
            console.log(dataObj)
            arr.push(dataObj)
          }
          console.log(arr)
          _self.lists = arr
          // setTimeout(()=>{
          //   if(!_self.isloaded){
          //     _self.lists = arr;
          //     _self.isloaded = true
          //   } else {
          //     _self.isloaded = false
          //     _self.lists = []
          //   }
          // },300)
        })
        .catch(function (err) {

        })
    },
      checkUser(){
        let _self = this;
          let userName = this.getCookie('userName')
          this.$http.get('http://localhost:3333/selectBlog?keyWord=' + keyWord, {

          })
      },
    testCookie () { // 获取验证cookie
      console.log(this.getCookie('userName'))
      let userName = this.getCookie('userName')
      if (!userName) {
        console.log(userName)
        this.$router.push({path: '/Regist'})
      }else{
          if(tag!==1){
              this.$router.push({path: '/Regist'})
          }
      }
    }
  },
  mounted () {
    this.getBlog()
  },
  created () {
    this.testCookie()
  }
}
</script>

<style scoped lang="scss">
  #blog{
    .bg_wrap{
      height:100%;
      width: 100%;
      /*background-image: url("../../../assets/swingPic/lmlblog.jpg");*/
    }
    .header{
      position: fixed;
      z-index:2;
      height:76px;
      width: 100%;
      top:0;
      /*border:1px solid;*/
      text-align: center;
      white-space: nowrap;
      background-color: #fff;
      .header_content{
        height:50px;
        /*border:1px solid red;*/
        line-height:76px;
        .el-select{
          width: 150px;
        }
        .header_select{
          display: inline-block;
          float: left;
          min-width:700px;
          /*border:1px solid;*/
        }
        .header_title{
          display: inline-block;
          .write{
            font-family: "楷体","楷体_GB2312";
            display: inline-block;
            width: 100px;
            text-align: center;
            font-size: 18px;
            cursor: pointer;
          }
        }
      }
    }
    .content{
      ul,li{
        list-style: none;
      }
      .content_wrap{
        position: relative;
        top:60px;
        border:1px solid #eed;
        text-align: center;
        li {
          height: 150px;
          border: 1px solid #eee;
          text-align: center;
          margin-top: 20px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.3s ease-in-out;
          padding:10px;
          background-image: url("../../assets/swingPic/b1.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          min-width: 725px;
        }
          li:hover{
            box-shadow:0px 2px 10px rgba(0, 0, 0, 0.3);
          }
        ul{
          /*background-color: #fff;*/
          color:#fff;
          transition: color 0.5s ease-in-out;
        }
        li:hover ul{
          color:#e09165;
        }
          .div{
            cursor: pointer;
            display: inline-block;
            height:100px;
            float: left;
            line-height:50px;
            margin-left:50px;
            max-width: 50%;
            text-align: left;
          }
          ul{
            float: right;
            margin-right:50px;
            line-height:150px;
            i{
              margin-left:20px;
              cursor: pointer;
            }
            i:hover{
              color: #726f6e;
            }
          }
        }
        .content_list{
          /*overflow: hidden;*/
          /*transition: left ;*/
          .content_sublist{
            /*<!--position: relative;-->*/
            /*<!--left:-100%;-->*/
          }
        }
      }
    }
</style>
