<template>
 <div id="eat_wrap">
<!--   <h1 class="animated infinite bounce">Example</h1>-->
<!--   <div class="animated bounceInLeft fast">Example</div>-->
   <header class="header"><div style="display: inline-block" class="animated bounceInLeft fast">今天吃什么</div><div style="display: inline-block;margin-left:5px;" class="animated bounceInDown slow">
     <img style="vertical-align: middle;cursor:pointer;" :src=img alt="">
   </div></header>
   <div class="enter_food">
     <textarea v-model="input_text" id="text" cols="30" rows="10" @keyup.enter='addFood' placeholder="输入您喜欢的食物，按enter进入筛选区"></textarea>
     <br/>
     <el-button type="success" @click="addFood">确认</el-button>
   </div>
   <div class="rantio_select">
     <ul>
       <li v-for="(item,index) in list" :key="index">{{item}} <i class="el-icon-error" title="删除" @click="delFood(index)"></i></li>
     </ul>
     <div class="commitbtn" type="primary" @click="selectFood(1)"><img style="font-size:40px;cursor:pointer;" src="../../assets/touzi.png" alt=""></div>
   </div>

   <div class="btn" @click="clickIt">点击掷骰子</div>
   <div class="box" id="box">
     <div class="part">1</div>
     <div class="part">2</div>
     <div class="part">3</div>
     <div class="part">4</div>
     <div class="part">5</div>
     <div class="part">6</div>
   </div>
   <div @click="flag=false" v-show="flag" class="begin_select">
<!--     <div class="btn" onclick="clickIt()">点击掷骰子</div>-->

<!--     <div class="box" id="box" v-show="showBox">-->
<!--       <div v-for="(item, index) in foodImg" :key="index" class="part"><img :src=item.img alt=""></div>-->
<!--&lt;!&ndash;       <div class="part">1</div>&ndash;&gt;-->
<!--&lt;!&ndash;       <div class="part">2</div>&ndash;&gt;-->
<!--&lt;!&ndash;       <div class="part">3</div>&ndash;&gt;-->
<!--&lt;!&ndash;       <div class="part">4</div>&ndash;&gt;-->
<!--&lt;!&ndash;       <div class="part">5</div>&ndash;&gt;-->
<!--&lt;!&ndash;       <div class="part">6</div>&ndash;&gt;-->
<!--     </div>-->
     <div v-model="food" v-show="endFood" class="food animated zoomInUp fast">
       {{food}}
     </div>
   </div>
   <div class="selectFood">
     <div>菜名大全</div>
     <ul>
       <li v-for="(item,index) in selectFoodName" :key="index">
          <span>{{item.foodName}}</span>
         <a :href=item.foodImg target="_blank" title="查看大图">
           <img :src=item.foodImg alt="">
         </a>
       </li>
     </ul>
     <el-button class="commitbtn" type="primary" @click="selectFood(2)">直接筛选</el-button>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      list: [],
      input_text: '',
      flag: false,
      img: require('../../assets/tanchi.png'),
      showBox: true,
      endFood: false,
      food: '',
      foodImg: [{img: require('../../assets/food/food1.png')}, {img: require('../../assets/food/food2.png')},
        {img: require('../../assets/food/food3.png')}, {img: require('../../assets/food/food4.png')},
        {img: require('../../assets/food/food5.png')}, {img: require('../../assets/food/food6.png')}],
      selectFoodName: [],
        foodSelect: []
    }
  },
  methods: {
    sure () {

    },
    changeImg () { // 改变图标
      this.img = require('../../assets/lunkuodasan-.png')
    },
    delFood (index) { // 删除菜名
      console.log(index)
      this.list.splice(index, 1)
      console.log(this.list)
    },
    addFood () { // 增加菜名  enter添加
      let food = this.input_text
      console.log(food)
      if (food.length === 1) {
        this.input_text = ''
        console.log(111)
        this.msgTip('输入点什么吧', 'error')
        return false
      }
      this.list.push(food)
      this.input_text = ''
    },
    selectFood (num) { // 确定筛选菜名
      let list = this.list
      let _self = this
      _self.endFood = false
      _self.showBox = true
      console.log(list)
        console.log(this.selectFoodName)
      if(num===2){
        list = this.foodSelect
      }
        console.log(list)
      let len = list.length
      let pies
      if (list.length === 0) {
        this.msgTip('你什么都没有选', 'error')
        return
      } else if (list.length === 1) {
        _self.flag = true
        pies = '铁了心要吃"' + list[0] + '"'
      } else {
        _self.flag = true
        let num = Math.ceil(Math.random() * len - 1)
        console.log(num)
        pies = '吃"' + list[num] + '"呢'
      }
      this.clickIt(_self, pies)
      // setTimeout(function () {
      //   // _self.msgTip(pies, 'error')
      // }, 1000)
    },
    clickIt () {
      // alert('111223')
      // $("#content").click(function(){
      // eslint-disable-next-line no-unused-vars
      var num = parseInt(1 + Math.random() * 6)
      //       console.log(num)
      //       $("#box").css("animation","move"+num+" .5s ease-in-out 1")
      // console.log('1111')
      var n = parseInt(1 + Math.random() * 6)
      console.log(n)
      document.getElementById('box').style.animation = 'move' + n + ' 2s ease-out forwards'
      // setTimeout(function () {
      //   _self.endFood = true
      //   _self.showBox = false
      //   _self.food = pies
      // }, 1500)
      // /* Opera、Chrome 和 Safari */
      // document.getElementById("box").style.WebkitAnimation = "move"+n+" .5s ease-out forwards";
      // /* IE 9 */
      // document.getElementById("box").style.msAnimation = "move"+n+" .5s ease-out forwards";
    },
    selectName () {
      let _self = this
      let foodArr = []
      let foodSelectArr = []
      this.$http.get('http://localhost:3333/getFood')
        .then(function (res) {
          console.log(res)
          let lists = res.data.list
          for (let i = 0; i < lists.length; i++) {
            let obj = {}
            obj.foodName = lists[i].foodName
            obj.foodImg = lists[i].foodImg
            foodArr.push(obj)
              foodSelectArr.push(lists[i].foodName)
          }
          console.log(foodArr)
          _self.selectFoodName = foodArr
          _self.foodSelect = foodSelectArr
        })
        .catch(function (err) {

        })
    }
  },
  mounted () {
    this.selectName()
  }
}
</script>

<style scoped lang="scss">
  #eat_wrap{
    /*margin-left:50px;*/
    white-space: nowrap;
    .header{
      background-color:#76c2af;
      width: 100%;
      text-align: center;
      height:50px;
      line-height: 50px;
    }
  }
  ul,li{
    list-style: none;
  }
  .enter_food{
    vertical-align: top;
    margin-top:20px;
    display: inline-block;
    #text{
      padding-left:20px;
      width:300px;
      height:150px;
    }
  }
  .rantio_select{
    margin-left: 20px;
    display: inline-block;
    ul{
      padding:0;
      border:1px solid #a9a9a9;
      min-width:300px;
      max-width:400px;
      li{
        height:35px;
        line-height:35px;
        text-align: center;
        border:1px solid #eee;
        border-top:0;
        border-radius:10px;
        i{
          color:#e02929;
          cursor: pointer;
        }
      }
    }
  }
  .begin_select{
    position: fixed;
    top:0;
    height:100%;
    width: 100%;
    background-color:#7b7b7b5c;
    .food{
      position:relative;
      height:150px;
      width: 100%;
      background-color: white;
      text-align: center;
      line-height: 150px;
      font-size:30px;
      margin-top: -150px;
      top: 50%;
    }
  }
  #box{
    position: relative;
    width: 100px;
    height: 100px;
    margin: 200px auto;
    transform-style: preserve-3d ;
    transform:rotateX(-20deg) rotateY(-30deg) rotateZ(0deg);
  }
  @keyframes move1{
    0%{
      transform:rotateX(360deg) rotateY(180deg) rotateZ(0deg);
    }
    100%{
      transform:rotateX(-30deg) rotateY(-360deg) rotateZ(0deg);
    }
  }
  @keyframes move2{
    0%{
      transform:rotateX(-360deg) rotateY(-360deg) rotateZ(0deg);
    }
    100%{
      transform:rotateX(160deg) rotateY(30deg) rotateZ(0deg);
    }
  }
  @keyframes move3{
    0%{
      transform:rotateX(360deg) rotateY(-360deg) rotateZ(0deg);
    }
    100%{
      transform: rotateX(-50deg) rotateY(-30deg) rotateZ(90deg);
    }
  }
  @keyframes move4{
    0%{
      transform:rotateX(-360deg) rotateY(-360deg) rotateZ(0deg);
    }
    100%{
      transform: rotateX(160deg) rotateY(-60deg) rotateZ(90deg);
    }
  }
  @keyframes move5{
    0%{
      transform:rotateX(-360deg) rotateY(-360deg) rotateZ(0deg);
    }
    100%{
      transform: rotateX(70deg) rotateY(0deg) rotateZ(-60deg);
    }
  }
  @keyframes move6{
    0%{
      transform:rotateX(360deg) rotateY(-360deg) rotateZ(0deg);
    }
    100%{
      transform: rotateX(-110deg) rotateY(0deg) rotateZ(-30deg);
    }
  }
  .part{
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 50px;
    color: #fff;
    position: absolute;
    top:0px;
    left: 0px;
    transition: 1s ease;
  }
  .part .iconfont{
    font-size: 20px;
    color: #fff;
    margin-right: 10px;
  }
  .box:hover .part{
    opacity: 0.5;
    border-radius: 25%;
  }

  /*上*/
  .part:nth-child(1){
    background: #f7a263;
    transform: rotateX(90deg) translateZ(50px);
  }
  .box:hover .part:nth-child(1){
    transform: rotateX(90deg) translateZ(150px);
  }

  /*下*/
  .part:nth-child(2){
    background: #85b933;
    transform: rotateX(-90deg) translateZ(50px);
  }
  .box:hover .part:nth-child(2){
    transform: rotateX(-90deg) translateZ(150px);
  }

  /*左*/
  .part:nth-child(3){
    background: #e68ad2;
    transform: rotateY(-90deg) translateZ(50px);
  }
  .box:hover .part:nth-child(3){
    transform: rotateY(-90deg) translateZ(150px);
  }

  /*右*/
  .part:nth-child(4){
    background: #77abca;
    transform: rotateY(90deg) translateZ(50px);
  }
  .box:hover .part:nth-child(4){
    transform: rotateY(90deg) translateZ(150px);
  }

  /*前*/
  .part:nth-child(5){
    background: #8877ca;
    transform: translateZ(50px);
  }
  .box:hover .part:nth-child(5){
    transform: translateZ(150px);
  }

  /*后*/
  .part:nth-child(6){
    background: #f98686;
    transform: rotateY(180deg) translateZ(50px);
  }
  .box:hover .part:nth-child(6){
    transform: rotateY(180deg) translateZ(150px);
  }


  .btn{
    background: #77ABCA;
    padding: 10px;
    text-align: center;
    width: 100px;
    margin: 0px auto;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn:hover{
    background: #5999bf;
  }

  .selectFood{//选择菜名
    display: inline-block;
    vertical-align: top;
    ul{
      max-height:300px;
      overflow-y: auto;
    }
    li{
      height:30px;
      /*width: 150px;*/
      text-align:left;
      line-height: 30px;
      background-color: #f5fff4;
      color:#333;
      margin-top:5px;
      cursor: pointer;
      img{
        height:20px;
        vertical-align: middle;
      }
    }
    li:hover{
      color: #ff0000;
      background-color: #7bc559;
    }
  }
</style>
