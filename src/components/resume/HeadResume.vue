<template>
  <div id="head">
    <header class="header">
      <div>我是标题</div>
    </header>
    <div class="titles">
<!--      <div>-->
<!--        简约-->
<!--        &lt;!&ndash;            <span>shift+回车换行  直接回车换行画线</span>&ndash;&gt;-->
<!--      </div>-->
      <div class="commit">
                    <img title="导出pdf" @click="getPdf()" src="../../assets/daochu.png" alt="">
<!--        <el-button title="pdf导出模板" class="commitbtn" type="primary" @click="getPdf()">导出pdf</el-button>-->
        <!--            <el-button id="expor-table" title="pdf导出模板" class="commitbtn" type="primary" @click="onexport()">导出Excel</el-button>-->
      </div>
      <!--          <button  type="button" id="expor-table" @click="onexport" >导出Excel</button>-->

    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadResume',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .el-submenu__title{
    height:35px;
    line-height: 35px;
  }
  .header{
    font-size:21px;
    position: relative;
    height:60px;
    width: 100%;
    line-height:60px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
    div{
      font-family: "楷体";
      margin-left: 20px;
    }
  }
  .titles{
    position: relative;
    height:50px;
    line-height: 50px;
    div{
      font-family: "楷体";
      margin-left:30px;
    }
    .commit{
      cursor: pointer;
      position:absolute;
      top:10px;
      right:5%;
      .commitbtn{
        text-align: center;
        width:80px;
      }
    }
  }
</style>
