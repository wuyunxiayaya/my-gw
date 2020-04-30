<template>
  <div>
    <div class="btn" @click="clickIt">点击掷骰子</div>
    <div class="box" id="box">
      <div class="part">1</div>
      <div class="part">2</div>
      <div class="part">3</div>
      <div class="part">4</div>
      <div class="part">5</div>
      <div class="part">6</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'Login',
        methods: {
            clickIt() {
                // alert('111223')
                // $("#content").click(function(){
                var num = parseInt(1 + Math.random() * 6)
                //       console.log(num)
                //       $("#box").css("animation","move"+num+" .5s ease-in-out 1")
                // console.log('1111')
                var n = parseInt(1 + Math.random() * 6);
                console.log(n)
                console.log(document.getElementById("box"))
                document.getElementById("box").style.animation = "move" + n + " 1s ease-out forwards";
                /* Opera、Chrome 和 Safari */
                // document.getElementById("box").style.WebkitAnimation = "move"+n+" .5s ease-out forwards";
                // /* IE 9 */
                // document.getElementById("box").style.msAnimation = "move"+n+" .5s ease-out forwards";
            }
        }
    }
</script>

<style scoped>
  #box {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 200px auto;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(-30deg) rotateZ(0deg);
  }

  @keyframes move1 {
    0% {
      transform: rotateX(360deg) rotateY(180deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(-30deg) rotateY(-360deg) rotateZ(0deg);
    }
  }

  @keyframes move2 {
    0% {
      transform: rotateX(-360deg) rotateY(-360deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(160deg) rotateY(30deg) rotateZ(0deg);
    }
  }

  @keyframes move3 {
    0% {
      transform: rotateX(360deg) rotateY(-360deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(-50deg) rotateY(-30deg) rotateZ(90deg);
    }
  }

  @keyframes move4 {
    0% {
      transform: rotateX(-360deg) rotateY(-360deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(160deg) rotateY(-60deg) rotateZ(90deg);
    }
  }

  @keyframes move5 {
    0% {
      transform: rotateX(-360deg) rotateY(-360deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(70deg) rotateY(0deg) rotateZ(-60deg);
    }
  }

  @keyframes move6 {
    0% {
      transform: rotateX(360deg) rotateY(-360deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(-110deg) rotateY(0deg) rotateZ(-30deg);
    }
  }

  .part {
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 50px;
    color: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
    transition: 1s ease;
  }

  .part .iconfont {
    font-size: 20px;
    color: #fff;
    margin-right: 10px;
  }

  .box:hover .part {
    opacity: 0.5;
    border-radius: 25%;
  }

  /*上*/
  .part:nth-child(1) {
    background: #f7a263;
    transform: rotateX(90deg) translateZ(50px);
  }

  .box:hover .part:nth-child(1) {
    transform: rotateX(90deg) translateZ(150px);
  }

  /*下*/
  .part:nth-child(2) {
    background: #85b933;
    transform: rotateX(-90deg) translateZ(50px);
  }

  .box:hover .part:nth-child(2) {
    transform: rotateX(-90deg) translateZ(150px);
  }

  /*左*/
  .part:nth-child(3) {
    background: #e68ad2;
    transform: rotateY(-90deg) translateZ(50px);
  }

  .box:hover .part:nth-child(3) {
    transform: rotateY(-90deg) translateZ(150px);
  }

  /*右*/
  .part:nth-child(4) {
    background: #77abca;
    transform: rotateY(90deg) translateZ(50px);
  }

  .box:hover .part:nth-child(4) {
    transform: rotateY(90deg) translateZ(150px);
  }

  /*前*/
  .part:nth-child(5) {
    background: #8877ca;
    transform: translateZ(50px);
  }

  .box:hover .part:nth-child(5) {
    transform: translateZ(150px);
  }

  /*后*/
  .part:nth-child(6) {
    background: #f98686;
    transform: rotateY(180deg) translateZ(50px);
  }

  .box:hover .part:nth-child(6) {
    transform: rotateY(180deg) translateZ(150px);
  }

  .btn {
    background: #77ABCA;
    padding: 10px;
    text-align: center;
    width: 100px;
    margin: 0px auto;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn:hover {
    background: #5999bf;
  }

</style>
