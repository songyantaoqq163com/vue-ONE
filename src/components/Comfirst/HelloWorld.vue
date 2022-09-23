<template>
  <div class="hello">
    <el-button @click="on">{{ msg }}</el-button>
    <el-button @click="aa">获取cookies</el-button>
    <el-button @click="bb">删除cookies</el-button>
    <el-button @click="cc">判断cookies的存在</el-button>
    <i>{{ arr }}</i>
    <b>{{ array }}</b>
    <el-divider content-position="left"
      >el-col :span="20" :offset="2"中间布局</el-divider
    >
    <el-row :gutter="20">
      <el-col :span="24">
        <el-button type="success" plain @click="elmean">签名</el-button>
        <el-button type="info" @click="infoPlain" plain>表格处理</el-button>
        <el-button type="primary" plain v-bind:title="title" @click="plain1"
          >class背景</el-button
        >
        <el-button type="danger" @click="reverse">数组倒序</el-button>
        <el-button type="primary" round @click="Timeout">定时器</el-button>
        <el-button round type="success" @click="plainone">倒计时</el-button>
        <el-button round type="info" @click="info">3d旋转</el-button>
        <el-button type="primary" icon="el-icon-share" @click="ajax"
          >ajax请求</el-button
        >
        <!-- <el-button type="warning" plain></el-button> -->
      </el-col>
    </el-row>
    <el-row :span="20" :offset="2">
      数组{{ Newnumber }}倒序：{{ NewArr }}
    </el-row>
    <el-divider content-position="left">文档</el-divider>

    <el-row>
      <el-col :span="22" :offset="1">
        <el-table :data="datatable" border :header-cell-style="headClass">
          <el-table-column
            type="index"
            label="序号"
            width="50"
          ></el-table-column>
          <el-table-column
            width="150px"
            prop="name"
            label="名称"
          ></el-table-column>
          <el-table-column prop="text" label="作用"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 非必要显示 -->
    <el-dialog title="定时器" :visible.sync="TIMEOUT" :modal-append-to-body='false'>
      <p>:modal-append-to-body='false'---弹出框阴影</p>
      <p>详情看hover效果</p>
      mounted(){ setInterval(() => { setTimeout(() => { this.clean();
      this.Cvd(); this.Pvd(); this.Print(); }, 0) }, 1000*60) }
    </el-dialog>
    <el-dialog title="倒计时" :visible.sync="TIMplain" :modal-append-to-body='false'>
      <count-down
        :currentTime="1595472277"
        :startTime="1595472277"
        :endTime="1595475877"
        :tipText="'距离订单开始还有'"
        :tipTextEnd="'距离订单关闭还剩'"
        :endText="'已结束'"
        :dayTxt="'天'"
        :hourTxt="'小时'"
        :minutesTxt="'分钟'"
        :secondsTxt="'秒'"
      ></count-down>
    </el-dialog>
  </div>
</template>

<script>
import CountDown from "vue2-countdown";
export default {
  name: "HelloWorld",
  components: {
    CountDown,
  },
  data() {
    return {
      datatable: [
        {
          name: ".slice()方法",
          text: "截取一个字符串的方法，列：.slice(1,2)",
        },
        {
          name: ".split()方法",
          text: '将一个字符串分成几份例子：a=b.c,a.split(".")将b,c分开',
        },
        {
          name: ".replace()方法",
          text: '将一个数组中出现过的字或数替换掉，例子：.arr,replace("","")',
        },
        {
          name: ".map()方法",
          text: "返回一个新的数组，新的数组中的元素为原始数组中的每个元素调用函数处理后得到的值/注意事项:1.map()不会对空数组进行检测，2.map()不会改变原始数组，3.返回新的元素",
        },
        {
          name: "小数处理方法",
          text: "取整：1.parseInt(7/2)向上取整2.Math.cell(7/2)向下取整3.Math.floor(7.2)四舍五入4.Math.round(7/2)取余5.（7%2）",
        },
        {
          name: ".concat()方法",
          text: "用于连接A,B成为一个字符串 例子：A.concat(B)",
        },
        {
          name: ".filter()方法",
          text: "用于创建一个新的数组，其包含通过提供的函数实现的测试的所有元素！例子：var a=datalist.filter(function(index,array){return item}",
        },
        {
          name: "nextTick和$nextTick()方法的区别",
          text: "当数据发生变化、 当dom发生变化，初始化更改data内容(vuetext.vue)，渲染完成后",
        },
        {
          name: " @mouseenter=“鼠标进入事件”，@mouseleave=“鼠标离开时间”",
          text: "鼠标进入，离开事件",
        },
      ],
      msg: "排序去重/创建cookies",
      arr: "",
      array: "",
      title: "鼠标悬停提示",
      ButImglist: false,
      TIMEOUT: false,
      TIMplain: false,
      NewArr: [],
      Newnumber: "",
    };
  },
  methods: {
    ajax() {
      //请求one
      // this.$axios
      //   .get("https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists")
      //   .then(res => {
      //     console.log(res);
      //     // localStorage.setItem('a',JSON.stringify(res))
      //     JSON.stringify(localStorage.setItem("b", res.data));
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      // 请求two
      // this.$axios.get(`${process.env.URL_PATH}/maxwell-report/user`)
      this.$axios
        .get(`/maxwell-report/user`)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    nav() {
      var SuccessCode = "-1";
      //  switch(SuccessCode){//根据后台返回的data.SuccessCode来判断执行什么语句
      //               case "0":
      //                    $("#btn").addClass("btnNow");
      //                   break;
      //               case "-1":
      //                   alert("活动尚未开始");
      //                   break;
      //               case "-2":
      //                   alert("本日已抢完");

      //                   break;
      //               default:

      //                   alert("系统繁忙，请稍后再试")}
      // console.log("多数操作");
    },
    headClass() {
      return "text-align:center; background:#409EFF; color:#fff";
    },
    reverse() {
      //  var arr= ['#f4211c','#f4211c','#f4211c',  '#f42124','#f42124', '#f42124', '#f4696b','#f4696b', '#f4696b', '#f86966','#f86966','#f86966',
      //   '#f8696b','#f8696b','#f8696b', '#f9806f','#f9806f','#f9806f', '#f98c71','#f98c71', '#f98c71', '#f98c71', '#fa9673','#fa9673','#fa9673', '#fa9673', '#fa9d75',
      //   '#fa9d75', '#fa9d75','#fa9d75', '#fa9975','#fa9975','#fa9975', '#fa9975', '#fa9c75','#fa9c75', '#fa9c75','#fa9c75', '#fcbb7a','#fcbb7a', '#fcbb7a', '#fcbb7a', '#fcc57c','#fcc57c',
      //   '#fcc57c', '#fcc57c','#fdc77d','#fdc77d', '#fdc77d','#fdc77d', '#fdce7e','#fdce7e', '#fdce7e','#fdce7e', '#fedd81','#fedd81', '#fedd81', '#fedd81', '#ffeb84','#ffeb84', '#ffeb84',
      //   '#ffeb84', '#f8e984','#f8e984','#f8e984','#f8e984', "#57be7b","#57be7b",  "#57be7b", "#57be7b", "#7ecf7f","#7ecf7f","#7ecf7f", "#7ecf7f", "#8bcf7f","#8bcf7f","#8bcf7f", "#8bcf7f", '#b9d780','#b9d780', '#b9d780', '#a4d17f','#a4d17f', '#a4d17f',
      //      '#9ecf7f','#9ecf7f', '#9ecf7f','#9ecf7f', '#8bcf7f','#8bcf7f','#8bcf7f', '#8bcf7f', '#7ecf7f','#7ecf7f','#7ecf7f', '#7ecf7f', '#57be7b','#57be7b', '#57be7b','#57be7b', '#4ebe7b',
      //      '#4ebe7b', '#4ebe7b', '#4ebe7b','#63be7b', '#63be7b','#63be7b','#63be7b' ];

      var arr = ["#4ebe7b", "#4ebe7b", "#4ebe7b", "#63be7b", "#63be7b"];
      var newArr = [];
      for (var i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
      }
      this.NewArr = newArr;
      this.Newnumber = newArr.length;
      console.log(newArr);
    },
    Timeout() {
      this.TIMEOUT = true;
    },
    echarts() {
      console.log(146);
    },
    elmean() {
      this.$router.push({ path: "/NEWnew" });
    },
    plainone() {
      this.TIMplain = true;
    },
    info() {
      this.$router.push({ path: "/routers/info" });
    },
    plain1() {
      this.$router.push({ path: "/routers/plain1" });
    },
    infoPlain() {
      this.$router.push({ path: "/infoPlain" });
    },
    aa() {
      console.log("获取cookies成功");
      // this.array = "";
      let token = this.$cookies.get("token"); // 获取cookie中的value
      //  let token=this.$cookies.keys()
      console.log(token);
      this.array = "获取cookies成功";
    },
    bb() {
      this.array = "";
      console.log("删除cookies成功");
      this.$cookies.remove("token"); // 删除cookie
      this.array = "删除cookies成功";
    },
    cc() {
      this.array = "";
      let ttt = this.$cookies.isKey("token"); // return false or true
      console.log(ttt);
      this.array = ttt;
    },
    on() {
      this.array = "";
      console.log("创建cookies成功");
      let token = "songyantao";
      this.$cookies.set("token", token); // 设置cookie,默认过期时间单位是1d(1天)
      this.array = "创建cookies成功";

      // 原始存住cookies的方法https://www.cnblogs.com/rxbook/p/11773553.html
      // this.$cookies.set(keyName, value[, expireTimes[, path[, domain[, secure]]]]) //return this
      // alert('谁让你点我的?')
      // var arr = [1, 2, 3, 3, 3, 3, 4, 4, 5, 6, 7];
      //第一种forx循环
      // function unique(arr) {
      //   for (var i = 0; i < arr.length; i++) {
      //     for (var j = i + 1; j < arr.length; j++) {
      //       if (arr[i] === arr[j]) {
      //         arr.splice(j, 1);
      //         j--;
      //       }
      //     }
      //   }
      //console.log(unique(arr)); // => [ 1, 2, 3, 4, 5, 6, 7 ]
      //   return arr;
      // }
      //第二中es6--set方法去重
      // var arr = [1, 2, 3, 3, 3, 3, 4, 4, 5, 6, 7];
      // console.log(arr);
      // function unique(arr) {
      //   return Array.from(new Set(arr));
      // }
      // console.log(unique(arr)); //
      //第三种，排序去重、
      //第四种
      //  this.beforePrintWeight=[1,1,1,2,3,4];
      // var arrone=this.beforePrintWeightlength.filter(function(value,index,self){
      //                     return self.indexOf(value)===index;
      //                 })
      //
      //                   console.log(191,arrone,this.beforePrintWeight)

      //map去重
      //  var alist=[];
      //           repsonse.data.map(train=>{
      //               alist.push(train.position)

      //           })
      //           alist= [...new Set(alist)];
      //           console.log(128,alist)
      var arr = [1, 2, 3, 3, 3, 3, 4, 4, 5, 6, 7];
      function unique(arr) {
        arr = arr.sort();
        var array = [arr[0]];
        for (var i = 1; i < arr.length; i++) {
          if (arr[i] !== arr[i - 1]) {
            array.push(arr[i]);
          }
        }
        return array;
      }
      // console.log(unique(arr)); // => [ 1, 2, 3, 4, 5, 6, 7 ]
      this.arr = unique(arr);
    },
    mounted() {},
  },
  watch: {},
  created() {
    this.nav();
  },
};
</script>
<style scoped>
.el-button {
  margin: 10px;
}
/* 登录三 */
</style>
