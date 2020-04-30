<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  body{
    margin:0 !important;
    padding:0;
    height:100%;
    width: 100%;
    position: relative;
    top:0;
    #app{
      margin:0;
      padding:0;
    }
  }
  .el-menu-item *{
    text-decoration: none;
    color:#fff;
  }
  #app{
    height:100%;
    width: 100%;
  }

</style>
