<template>
  <div id="blog">
    <div class="bg_wrap">
      <header>
        <el-input v-model="input_title" placeholder="标题"></el-input>
      </header>
      <!--    <mavon-editor-->
      <!--      v-model="content"-->
      <!--      ref="md"-->
      <!--      @change="change"-->
      <!--      style="min-height: 600px"-->
      <!--    />-->
      <div class="mavonEditor">
        <no-ssr>
          <mavon-editor :ishljs="true" :toolbars="markdownOption" v-model="handbook"/>
        </no-ssr>
      </div>

      <!--    <button @click="addBlog">提交</button>-->
      <el-button class="commitbtn" type="primary" @click="addBlog">{{btnText}}</el-button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'Writer_blog',
  // 注册
  components: {
    mavonEditor
  },
  data () {
    return {
      content: '', // 输入的markdown
      html: '', // 及时转的html
      input_title: '',
      handbook: '',
      btnText: '发表',
      markdownOption: {
        // toolbars: {
        bold: false, // 粗体
        italic: false, // 斜体
        header: false, // 标题
        underline: false, // 下划线
        strikethrough: false, // 中划线
        mark: false, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: false, // 引用
        ol: false, // 有序列表
        ul: false, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: false, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: false, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: false, // 左对齐
        aligncenter: false, // 居中
        alignright: false, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
        // },
      }
    }
  },
  methods: {
    // 所有操作都会被解析重新渲染
    change (value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render
    },
    addBlog: function () { // 提交
      console.dir(this.markdownOption.imagelink);
      let dom = document.querySelector('img');
        console.log(dom.src);
      this.testCookie()
      let _self = this
      let userName = this.getCookie('userName')
      let paramContent = this.$route.query.content
      console.log(paramContent)
      if (paramContent) {
        this.updateBlog(_self)
        return
      }
      // console.log(this.input_title);
      // console.log(this.handbook);
      // console.log(this.html);
      if (this.input_title === '' || !this.input_title) {
        this.msgTip('请输入标题', 'warning');
        return false
      } else if (this.handbook === '') {
        this.msgTip('请编辑内容', 'warning');
        return false
      }

      let Base64 = require('js-base64').Base64;//转码
      let exStr = Base64.encode(this.handbook);
      console.log(exStr); // 'YmFzZTY0'
      // this.handbook = Base64.encode(this.handbook);
      axios.post('http://localhost:3333/uploadBlog', {
        params: {
          'userName': userName,
          'blogContent': exStr,
          'blogTitle': this.input_title.toString()
        }
      })
        .then(function (res) {
          console.log(res.data.code)
          if (res.data.code === 200) {
            console.log(_self)
            _self.msgTip('发表成功', 'success');
            setTimeout(function () {
              window.location.reload()
            }, 1000)
          }
        })
        .catch(function () {

        })
    },
    updateBlog (_self) { // 更新博客
      let id = this.$route.query.blogId
      let Base64 = require('js-base64').Base64
      let exStr = Base64.encode(_self.handbook)
      console.log(exStr)
      axios.post('http://localhost:3333/editBlog', {
        'id': id,
        'content': exStr,
        'title': this.input_title
      }).then(function (res) {
        if (res.data.code === 200) {
          _self.msgTip('更新成功', 'success')
          setTimeout(function () {
            _self.handbook = '';
            _self.input_title = ''
          }, 1000)
        }
      }).catch(function (err) {

      })
    },
    getParam () { // 获取参数
      this.handbook = this.$route.query.content
      this.input_title = this.$route.query.title
      console.log(this.handbook, this.input_title)
      if (this.$route.query.content) {
        this.btnText = '更新'
      }
    },
    testCookie () { // 获取验证cookie
      console.log(this.getCookie('userName'))
      let userName = this.getCookie('userName')
      if (!userName) {
        console.log(userName)
        this.$router.push({path: '/Regist'})
      }
    }
  },
  mounted () {
    this.getParam()
    console.log(this.markdownOption.imagelink)
  },
  created () {
    this.testCookie()
  }
}
</script>

<style scoped lang="scss">
  .bg_wrap{
    position: fixed;
    height:100%;
    width: 100%;
    /*background-image: url("../../../assets/swingPic/lmlblog.jpg");*/
  }
  .el-input{
    /*width: 60% !important;*/
  }
</style>
