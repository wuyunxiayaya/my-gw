<template>
    <div id="game">
      <div v-show="showFail" class="cover" style="height:100%;width: 100%;background-color:#ececef4f;position: fixed;top:0;left:0">
        <div style="width: 300px;margin: auto;text-align: center;height:200px;position: relative;top:100px;background-color: #469fb3">
          <p style="color: red;line-height: 50px;font-size: 21px">
            挑战失败
          </p>
          <div style="width: 100%;height:50px;line-height: 50px;position: absolute;bottom: 0;">
            <el-button type="success" style="height:35px;width:100px;line-height: 11px;" @click="resetBegin()">重新开始</el-button>
            <el-button type="success" style="height:35px;width:100px;line-height: 11px;" @click="gameOver()">结束游戏</el-button>
          </div>
        </div>

      </div>
      <div class="wrap">
        <div class="passNum">
          <div class="numWrap">
            关卡
            <li class="num" v-for="(item,index) in passNum" :key="index" @click="beginGame(item)">
              {{item}}
            </li>
          </div>

        </div>
        <div class="waiceng">按照顺序点击所有数字则闯关成功
          <div class="open">{{gNum}}</div>
          <ul class="gameWrap" v-for="(item,index) in dataList" :key="index">
            <li v-for="(i, ide) in item.cow" :key="ide" :class="{'colors':color === i}" @click="change(i)">
              {{i}}
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>


<script>
    export default {
        name: "Game",
        data(){
            return{
                showFail: false,
                passNum:[1,2,3,4,5,6,7,8,9,10],
                // [{q:[{1:'',2:'',3:''}]},{q:[{1:'',2:'',3:''}]},{q:[{1:'',2:'',3:''}]}]
                // dataList:[{cow:[1,2,3]},
                //     {cow:[4,5,6]},
                //     {cow:[7,8,9]}]
                dataList:[],
                gNum:'选择关卡开始游戏',
                color:'',
                totalNum: '',
                clickNum: 0,
                time: 0
            }
        },
        methods:{
            beginGame(item){
                console.log(typeof this.time)
                // setInterval().clear(this.time)
                this.time = 0
                let _self = this;
                // setInterval(function () {
                //     _self.time ++
                //     console.log(_self.time)
                //     _self.gNum = '关卡'+item+' ⏲' + _self.time;
                // },1000)
                // window.clearInterval()
                // window.clearInterval(timeId)
                _self.gNum = '关卡'+item
                this.clickNum = 0;
                this.showFail = false
                this.color = ''
                this.totalNum = item*item
                arr1 = [];
              console.log(item);
                let arr = [];
                let arr1 = [];
                let nums = 0;
                let originalArray = []
                for(let k = 1; k <= item*item; k ++){
                    originalArray.push(k)
                }
                    originalArray.sort(function () {
                        return 0.5 - Math.random();
                    });
                    console.log(originalArray);
                for(let i = 0; i < originalArray.length; i ++){
                    arr.push(originalArray[i]);
                    nums ++;
                    // console.log(arr)
                    if(item===nums){
                        let obj = {};
                        obj.cow = arr;
                        arr1.push(obj);
                        arr = [];
                        nums = 0
                    }
                }
                _self.dataList = arr1;
                console.log(arr1)
            },
            change(i){
                console.log(this.totalNum);
                console.log(i);
                this.color = i;
                console.log(typeof i,typeof this.color);
                this.clickNum++
                console.log(this.clickNum,i)
                if(this.clickNum !== i){
                    // this.msgTip("游戏结束","error")
                    this.showFail = true
                    // location.reload()
                    return
                }
                if(i === this.totalNum) this.msgTip("闯关成功","success")
                // this.clickNum = i
                // let _self = this;
                //
                // for(let k = 1; k <= this.totalNum; k ++){
                //     console.log(k,i)
                //     if(k !== i){
                //         _self.msgTip("游戏结束","error")
                //         return
                //     }
                // }
            },
            resetBegin(){
                this.clickNum = 0;
                this.showFail = false
                this.color = ''
            },
            gameOver(){
                this.clickNum = 0;
                this.showFail = false
                this.color = ''
               this.dataList = []
            }
        }
    }
</script>

<style scoped lang="scss">
  ul,li{
    padding: 0;
    list-style: none;
    margin: 0;
  }
  #game{
    height:100%;
    width: 100%;
    .wrap{
      height:100%;
      width: 100%;
    }
  }

  .passNum{
    height:80px;
    width: 100%;
    background-color:#d1d9e1;
    /*overflow-x: auto;*/
    white-space: nowrap;
    line-height: 80px;
    .numWrap{
      width: 600px;
      margin:auto;
      .num{
        display: inline-block;
        height:45px;
        width: 50px;
        background-color: #00AAAA;
        text-align: center;
        line-height: 50px;
        margin-left:10px;
        cursor: pointer;
        color:#eed;
      }
    }
  }
  .waiceng{
    width: 800px;
    height:800px;
    margin: auto;
    text-align: center;
    .open{
      height:35px;
      line-height: 35px;
    }
    .gameWrap{
      /*height:800px;*/
      li{
        height:50px;
        width: 50px;
        background-color: #00AAAA;
        text-align: center;
        line-height: 50px;
        margin:10px;
        color: #d1d9e1;
        display: inline-block;
        cursor: pointer;
      }
    }
  }
  .colors{
    background-color: red !important;
  }

</style>
