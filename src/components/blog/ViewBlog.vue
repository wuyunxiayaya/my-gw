<template>
    <div id="showBlog">
      <div class="show_bg">
        <div class="blog_wrap">
          <ul class="list">
            <li class="sub_list" v-for="(item,index) in userList" :key="index">
              <div class="userInfo" @click="userDetail">
                <img :src=item.userHead alt="">
                <div class="username">{{item.userName}}</div>
              </div>
              <div class="main_container" @click="viewBlogDetail(item.id,item.title)">
                <div class="title">
                  {{item.title}}
                </div>
                <div class="content">
                  {{item.content}}
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ViewBlog",
        data(){
            return{
                // userHead:require('../../assets/timg.jpg'),
                // userName:'',
                // title:'',
                // content:'',
                userList:[{userHead:require('../../assets/timg.jpg'),userName:'',title:'',content:''}]
            }
        },
        methods:{
            viewBlogDetail(id,title){
                this.$router.push({path: '/Show_blog', query: {blogId: id, title: title}})
            },
            userDetail(){

            },
            showBlog(){
                let self = this;
                this.$http.get('http://localhost:3333/getAllBlog', {
                })
                    .then((res)=>{
                        console.log(res.data)
                        if(res.data.code===200){
                            console.log(res.data.list)
                            let arr = []
                            for(let i = 0; i < res.data.list.length; i ++){
                                let obj = {};
                                obj.userName = res.data.list[i].userName;
                                obj.title = res.data.list[i].title;
                                // obj.content = res.data.list[i].content;
                                obj.content = Base64.decode(res.data.list[i].content) // 解码
                                obj.id = res.data.list[i].id
                                arr.push(obj)

                            }
                            self.showData(arr,self)
                        }
                        // self.userList = userLists;
                    })
                    .catch((err)=>{

                    })
            },
            showData(arr,self){

                this.$http.get('http://localhost:3333/getUserImg', {

                })
                    .then((res)=>{
                        let userLists = [];
                        if(res.data.code===200){
                            // let arr = []
                            console.log(arr)
                            for(let i = 0; i < arr.length; i ++){
                                console.log(arr[i].userName)
                                console.log(res.data.data[arr[i].userName])
                                let obj = {}
                                obj.userName = arr[i].userName;
                                obj.title = arr[i].title;
                                obj.id = arr[i].id;
                                console.log(arr[i].id)
                                // obj.content = res.data.list[i].content;
                                console.log(arr[i].content)
                                obj.content = arr[i].content
                                let head = res.data.data[arr[i].userName];
                                if(!head){
                                    head = require('../../assets/timg.jpg')
                                }else{
                                    head = 'http://116.62.147.89/img/'+res.data.data[arr[i].userName]
                                }
                                obj.userHead = head;
                                // arr.push(obj)
                                console.log(obj)
                                userLists.push(obj)
                            }
                        }
                        console.log(userLists)
                        self.userList = userLists;
                    })
                    .catch(()=>{

                    })
            }
        },
        mounted() {
            this.showBlog()
        }
    }
</script>

<style scoped lang="scss">
  ul,li{
    list-style: none;
    margin:0;
    padding:0;
  }
  *{
    margin:0;
    padding:0;
  }
  #showBlog{
    height:100%;
    width: 100%;
    .show_bg{
      position: absolute;
      top:0;
      min-height:100%;
      width: 100%;
      background-image: url("../../assets/blog/img.jpg");
      .blog_wrap{
        /*height:100%;*/
        width: 80%;
        margin:0 auto;
        /*border:1px solid;*/
        .list{
          .sub_list:hover{
            cursor: pointer;
            box-shadow:0 6px 10px rgba(0, 0, 0, 0.15);
          }
          .sub_list{
            position: relative;
            height:150px;
            width: 100%;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
            transition: box-shadow 0.3s ease-in-out;
            /*overflow: hidden;*/
            /*border:1px solid;*/
            margin-top:20px;
            background-color:#ffffffa6;
            overflow: hidden;
            .userInfo{
              cursor: pointer;
              display: inline-block;
              height:120px;
              /*line-height: 120px;*/
              margin:15px;
              text-align: center;
              img{
                vertical-align: middle;
                height:100px;
                /*width: 35px;*/
                /*height:35px;*/
                /*border-radius: 50%;*/
              }
              .username{
                /*display: inline-block;*/
                font-size: 21px;
                font-family: 楷体;
                color:#193d50;
              }
            }
            .main_container{
              display: inline-block;
              height:100%;
              position: absolute;
              top:0;
              /*width: 100%;*/
              .title{
                /*position: absolute;*/
                /*top:15px;*/
                white-space: nowrap;
                overflow: hidden;
                text-overflow:ellipsis;
                height:50px;
                line-height:50px;
                font-size: 20px;
                font-weight: bold;
                max-width: 200px;
              }
              .content{
                height:100px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
                font-size: 18px;
                color:#333;
              }
            }
          }
        }
      }
    }
  }
</style>
