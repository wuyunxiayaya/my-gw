<template>
  <div id="my">
    <header class="header">
      <div>模板选用</div>
    </header>
          <div class="resumeMo">

            <div class="select1">
              <img src="../../assets/resume/resume1.png" alt="" @click="showResume1" title="查看大图">
              <router-link to="./SelectResume1" target="_blank"><div title="有多种主题颜色可选">选择模板</div></router-link>
            </div>

            <div class="select2">
              <img src="../../assets/resume/resume2.png" alt="" @click="showResume2" title="查看大图">
              <router-link to="./MoreResume" target="_blank"><div title="简约型模板">选择模板</div></router-link>
            </div>
          </div>
    <div  class="animated fadeIn fast show-img"  @mousedown="showClick1=false" v-show="showClick1" style="height:100%;width: 100%;
    position: fixed;top:0;left:0;background-color: #d2d2d675;text-align: center;">
      <img style="max-height:70%;margin-top:8%;" class="img1" src="../../assets/resume/resume1.png" alt="">

    </div>
    <div  class="animated fadeIn fast show-img"  @mousedown="showClick2=false" v-show="showClick2" style="height:100%;width: 100%;
    position: fixed;top:0;left:0;background-color: #d2d2d675;text-align: center">
      <img style="max-height:70%;margin-top:8%;" class="img2" src="../../assets/resume/resume2.png" alt="">
    </div>

<!--    <ul class="list">-->
<!--      <transition v-for="(item, index) in lists" :key="index" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">-->
<!--        <div class="image_info" v-show="isvisible" @mouseout="isvisible=false">-->
<!--          <li class="food animated zoomInUp fast">{{item.resume}}</li>-->
<!--        </div>-->
<!--      </transition>-->
<!--    </ul>-->
  </div>
</template>

<script>
import ResumeBody1 from "./resumeselect/ResumeBody1";
import ResumeBody2 from "./resumeselect/ResumeBody2";
export default {
  name: 'Rrsume',
  components:{ResumeBody1, ResumeBody2},
  data () {
    return {
      lists: [{resume: '123'}, {resume: '123'}, {resume: '123'}, {resume: '123'}, {resume: '123'}],
      isvisible: false,
        showClick1:false,
        showClick2:false,
        isHover:false
    }
  },
  methods:{
      showResume1(){
          this.showClick1 = true
      },
      showResume2(){
          this.showClick2 = true
      }
  },
  mounted() {

  }

}
</script>

<style scoped lang="scss">
  ul,li,a{
    text-decoration: none;
    list-style: none;
  }
  .resumeMo{
    width: 100%;
    .select1:hover{
      box-shadow: 0 0 20px #0C9A9A;
    }
    .select2:hover{
      box-shadow: 0 0 10px #0C9A9A;
    }
    .select1,.select2{
      transition: box-shadow .6s ease-in-out;
      display: inline-block;
      width: 300px;
      height:300px;
      margin-left:20px;
      div{
        text-align: center;
        background-color: #0C9A9A;
        border-radius: 5px;
        color: #fff0ff;
        cursor: pointer;
      }
      img{
        height:100%;
        width: 100%;
        cursor: pointer;
      }
    }
    .select1{

    }
  }
  #my{
    height:100%;
    width: 100%;
    background-color:#f1f1f1f1;
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
    /*background-color:#fbfbfb;*/
    position: relative;
    height:50px;
    line-height: 50px;
    /*div{*/
    /*  height:200px;*/
    /*  width: 200px;*/
    /*  overflow: auto;*/
    /*}*/
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
  ul,li{
    list-style: none;
    margin:0;
    padding:0;
  }
  ul{
    width:1000px;
    margin:auto;
    text-align: center;
    li{
      cursor: pointer;
      display: inline-block;
      height:200px;
      width: 200px;
      border:1px solid;
      text-align: center;
      line-height: 200px;
      margin:5px;
    }
  }
</style>
