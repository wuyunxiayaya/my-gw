    <template>
      <div>
        显示头像
        <img v-bind:src='"../../../static/uploads/"+avatar' alt="">
        修改头像  @change是上传文件时点击确定的一刻触发，$event是事件对象
        <input type="file" @change="getFile($event)">
      </div>
    </template>
<script>
    export default {
        mounted() {
            // this.init();
        },
        methods: {
// 这个接口是获取用户信息的
//     init() {
//         this.$http.get('http://localhost:3333/image', {
//
//         }).then((response) => {
//             var res = response.data;
//             this.username = res.username
//             this.avatar = res.avatar
//         })
//     },
    getFile(event) {
        this.file = event.target.files[0];  //获取上传元素信息
        var that = this
        event.preventDefault();
        // 只能通过formData方式来传输文件
        var formData = new FormData();
        formData.append('file', this.file);

        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        this.$http.post('http://localhost:3333/image', formData, config).then(function(res) {
            console.log(res.data.code)
            if (res.data.code == '0') {
                /*这里做处理*/
                that.init();  //   给avatar赋上新的值，否则要刷新获取
            }
        })
    },
    },
    data() {
        return {
            avatar: '',
        }
    }
    }
</script>
    <style>
      input {
        font-size: 0;
        /* 为了去掉‘未选择任何文件’这几个字，也可以随便弄到哪里*/
      }
      /* 注意不是直接input > input[type=button] 哦*/
      input::-webkit-file-upload-button {
        background: #efeeee;
        color: #333;
        border: 0;
        padding: 4px;
        border-radius: 5px;
        font-size: 12px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .1), 0 0 10px rgba(0, 0, 0, .12);
      }
    </style>
