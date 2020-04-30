<template>
    <div id="math">
      <header>趣味数学</header>
      <div class="mathWrap">
        <div class="top_title">
          <li class="jiaj" @click="showJiaJian" :class="{'colorsStytle':addSub}">加减</li>
          <li class="moul" @click="showChenChu" :class="{'colorsStytle':multi}">乘除</li>
        </div>
        <div class="complate" v-show="addSub">
          <ul class="add_sub">
            <li class="model">
              <span class="simple" @click="showSimple" :class="{'colorsStytle':nav_simple_color}">简单</span>
              <span class="same" @click="showSoso" :class="{'colorsStytle':nav_soso_color}">一般</span>
              <span class="difficulty" @click="showDifficul" :class="{'colorsStytle':nav_dif_color}">困难</span>
            </li>
            <div style="text-align: center;height:100px;"
                  class="content" v-for="(item,index) in num" :key="index">
              <span style="font-size:21px;color:#5f5f5f">{{item.num1}}+{{item.num2}}=?</span>
              <br>
                <ul class="select">
                  <span :class="{'cSpanColor':numIndex===index}" @click="countA(item.result[0],item.num1,item.num2,index)">A.{{item.result[0]}}
<!--                    <img v-show="numIndex===index" :src=icon alt="">-->
                  </span>
                  <span :class="{'cSpanColor':select1}" @click="countB(item.result[1],item.num1,item.num2,index)">B.{{item.result[1]}}
<!--                    <img v-show="numIndex1===index" :src=icon1 alt="">-->
                  </span>
                  <span :class="{'cSpanColor':select2}" @click="countC(item.result[2],item.num1,item.num2,index)">C.{{item.result[2]}}
<!--                    <img v-show="numIndex2===index" :src=icon2 alt="">-->
                  </span>
                  <span :class="{'cSpanColor':select3}" @click="countD(item.result[3],item.num1,item.num2,index)">D.{{item.result[3]}}
<!--                    <img v-show="numIndex3===index" :src=icon3 alt="">-->
                  </span>
                </ul>
              <br>
            </div>
<!--            -->
          </ul>
        </div>
        <div class="chengc" v-show="multi">
          <ul class="mul_sub">
            <li class="model">
              <span class="simple">简单</span>
              <span class="same">一般</span>
              <span class="difficulty">困难</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "math",
        data(){
            return{
                nav_simple_color:true,
                nav_soso_color:false,
                nav_dif_color:false,
                select:false,
                select1:false,
                select2:false,
                select3:false,
                multi:false,
                addSub:true,
                num:[],
                resulted:'',
                icon:'',
                icon1:'',
                icon2:'',
                icon3:'',
                numIndex:'',
                numIndex1:'',
                numIndex2:'',
                numIndex3:'',
            }
        },
        methods:{
            showJiaJian(){//展示加减
                this.multi=false;
                this.addSub=true;
            },
            showChenChu(){//展示乘除
                this.multi=true;
                this.addSub=false;
            },
            showSimple(){//展示简单
                this.nav_soso_color = false;
                this.nav_dif_color = false;
                this.nav_simple_color = true;
            },
            showSoso(){//展示一般
                this.nav_soso_color = true;
                this.nav_dif_color = false;
                this.nav_simple_color = false;
            },
            showDifficul(){//展示困难
                this.nav_soso_color = false;
                this.nav_dif_color = true;
                this.nav_simple_color = false;
            },
          count(){
              let arr = [];
              for(let i = 0; i < 100; i ++){
                  let i1 = Math.ceil(Math.random()*100);
                  let i2 = Math.ceil(Math.random()*100);
                  let obj = {};
                  obj.num1 = i1;
                  obj.num2 = i2;
                  // obj.img1 = '';//预选
                  // obj.img2 = '';
                  // obj.img3 = '';
                  // obj.img4 = '';
                  // obj.status1 = false;
                  // obj.status2 = false;
                  // obj.status3 = false;
                  // obj.status4 = false;
                  obj.results = i1+i2;
                  obj.result1 = Math.ceil(Math.random()*200);
                  obj.result2 = Math.ceil(Math.random()*200);
                  obj.result3 = Math.ceil(Math.random()*200);
                  if(obj.results === obj.result1) obj.result1 = 0;
                  if(obj.results === obj.result2) obj.result2 = 0;
                  if(obj.results === obj.result3) obj.result3 = 0;
                  let arr1 = [i1+i2,obj.result1,obj.result2,obj.result3]
                  var min;
                  for(var k=0; k<arr1.length; k++){//从小到大排列
                      for(var j=k; j<arr1.length;j++){
                          if(arr1[k]>arr1[j]){
                              min=arr1[j];
                              arr1[j]=arr1[k];
                              arr1[k]=min;
                          }
                      }
                  }
                  obj.result = arr1
                  arr.push(obj)
              }
              console.log(arr)
              this.num = arr
          },
            countA(sum,n1,n2,index){
              console.log(sum,n1,n2,index)
                this.select = true;
                let _self = this;
              _self.num[index].status1 = true;//影响一整列
                _self.numIndex = index
              //   if(sum !== n1+n2){
              //       _self.icon = require('../../assets/math/cha.png')
              //       return
              //   }
              //   _self.icon = require('../../assets/math/gou3-copy-copy.png')
            },
            countB(sum,n1,n2,index){
              console.log(sum,n1,n2)
                let _self = this;
                _self.numIndex1 = index
                _self.num[index].status2 = true; //影响一整列
                console.log(_self.num,index)
                if(sum !== n1+n2){
                    _self.icon1 = require('../../assets/math/cha.png')
                    return
                }
                _self.icon1 = require('../../assets/math/gou3-copy-copy.png')
            },
            countC(sum,n1,n2,index){
              console.log(sum,n1,n2)
                let _self = this;
                _self.num[index].status3 = true;//影响一整列
                _self.numIndex2 = index
                if(sum !== n1+n2){
                    _self.icon2 = require('../../assets/math/cha.png')
                    return
                }
                _self.icon2 = require('../../assets/math/gou3-copy-copy.png')
            },
            countD(sum,n1,n2,index){
              console.log(sum,n1,n2)
                let _self = this;
                _self.numIndex3 = index
                _self.num[index].status4 = true//影响一整列
                if(sum !== n1+n2){
                    _self.icon3 = require('../../assets/math/cha.png')
                    return
                }
                _self.icon3 = require('../../assets/math/gou3-copy-copy.png')
            }
        },
        mounted() {
            this.count();
        }
    }
</script>

<style scoped lang="scss">
  header{
    height:50px;
    text-align: center;
    line-height: 60px;
    font-size: 21px;
    font-family: 楷体;
  }
  ul,li{
    margin:0;
    padding: 0;
    list-style: none;
  }
  .mathWrap{
    width: 100%;
    border-bottom: 1px solid;
    margin-top:50px;
    .top_title{
      height:50px;
      /*border: 1px solid;*/
      cursor: pointer;
      font-size: 0;
      text-align: center;
      li{
        display: inline-block;
        line-height: 50px;
        width: 49%;
        text-align: center;
        /*border:1px solid;*/
        font-size: 16px;
        border-bottom: 1px solid #D8DEE9;
      }
      .jiaj{
          /*border-right: 1px solid #D8DEE9;*/
      }
      .moul{
        /*float: right;*/
      }
    }
  }
  .complate{
    margin-top:10px;
    .add_sub{
      width: 500px;
      /*border:1px solid;*/
      margin:auto;
      text-align: center;
      .model{
        height:35px;
        line-height: 35px;
        border-bottom: 1px solid #dde;
        font-size: 0;
        span{
          display: inline-block;
          height:100%;
          width: 33%;
          border-right: 1px solid #dde;
          cursor: pointer;
          font-size: 16px;
        }
        .difficulty{
          border:0;
        }
      }
    }
  }
  .chengc{
    font-size: 0;
    margin-top:10px;
    border:0;
    .mul_sub{
      width: 500px;
      /*border:1px solid;*/
      margin:auto;
      text-align: center;
      .model{
        font-size: 16px;
        height:35px;
        line-height: 35px;
        /*border-bottom: 1px solid;*/
        span{
          display: inline-block;
          height:100%;
          width: 30%;
          /*border-right: 1px solid;*/
          cursor: pointer;
        }
        .difficulty{
          border:0;
        }
      }
    }
  }

  .select{
    height:40px;
    line-height: 40px;
    span{
      position: relative;
      display: inline-block;
      height:30px;
      min-width: 80px;
      text-align: center;
      line-height: 30px;
      margin-left:10px;
      background-color: #00AAAA;
      cursor: pointer;
      color:#e0e0e0;
    }
    img{
      max-height:20px;
      vertical-align: middle;
      margin-left:10px;
    }
  }

  .colorsStytle{
     /*border-bottom: 3px solid green !important;*/
    background-color: #15a2a2;
    color:#e0e0e0;
  }

  .cSpanColor{
    background-color: #ceffc3 !important;
  }
</style>
