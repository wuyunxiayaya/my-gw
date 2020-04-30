<template>
  <div id="show-blog">
    <div class="wrap">
      <header style="">
        <span>
          {{title}}
        </span>
      </header>

      <div class="mavonEditor">

        <mavon-editor :codeStyle="codeStyle" :ishljs="true" :toolbars="markdownOption"  v-model="handbook"/>
      </div>
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
        link: false, // 链接
        imagelink: false, // 图片链接
        code: false, // code
        table: false, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: false, // 帮助
        /* 1.3.5 */
        undo: false, // 上一步
        redo: false, // 下一步
        trash: false, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: false, // 左对齐
        aligncenter: false, // 居中
        alignright: false, // 右对齐
        /* 2.2.1 */
        subfield: false, // 单双栏模式
        preview: false // 预览
      },
      codeStyle: 'monokai-sublime',
      // defaultOpen:{

      // }
      // },
      // readmodel: true, // 沉浸式阅读
      // previewBackground:'#dde',
      // defaultOpen:'preview',
      // toolbarsFlag:false,
      // editable:false
      title: ''
    }
  },
  methods: {
    // 复制成功
    onCopy (e) {
        console.log(this.html)
        console.log(this.content)
      console.log(e)
    },
    // 复制失败
    onError (e) {
      alert('失败')
    },
    getBlog () {//展示博客
      let div = document.getElementsByClassName('divarea-wrapper')
      console.log(div)
      div.hidden = true
      const blogId = this.$route.query.blogId//
      const blogTitle = this.$route.query.title//
      this.title = blogTitle

      // let self = this
      // this.handbook = '123'
      axios.get('http://localhost:3333/getApointBlog?id=' + blogId, {

      })
        .then((res) => {
          console.log(res.data)
          console.log(res.data.content[0].content)
          console.log(Base64.decode(res.data.content[0].content))
          console.log(this)
          // console.log(this.list)
          this.handbook = Base64.decode(res.data.content[0].content) // 解码
          // this.handbook = res.data.content[0].content
          // this.$forceUpdate()
          // self.$forceUpdate()
          console.log(this.handbook)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getBlog()
    this.write = document.querySelector('.v-note-edit');
    this.view = document.querySelector('.v-note-show');
    // this.hljs = document.querySelector('.hljs');
    // this.pre = document.querySelector('.hljs');
    this.write.style.display = 'none'
    this.view.style.flex = '0 0 100%'
    // this.hljs.style.maxHeight = "300px";
    // this.pre.style.height = "200px";
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
  /**/
  #show-blog{
    height:100%;
    background-image: url('../../assets/swingPic/head_blog.jpg');
    background-size: contain;
  }
  .wrap{
    /*height:100%;*/
    /*width: 100%;*/
    /*background-color: #0C9A9A;*/
    background-image: url('../../assets/swingPic/head_blog.jpg');
    background-size: contain;
    padding-bottom: 50px;
    /*background-repeat: no-repeat;*/
    header{
      position: relative;
      height:200px;
      text-align: center;
      line-height: 200px;
      font-size: 21px;
      /*background-image: url('../../../assets/swingPic/head_blog.jpg');*/
      /*background-size: cover;*/
      /*background-repeat: no-repeat;*/
    }
    .mavonEditor{
      width: 90%;
      margin:auto;
    }
  }
</style>
