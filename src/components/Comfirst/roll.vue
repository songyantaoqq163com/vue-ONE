<template>
  <div class="">
    <el-button @click="but">去Round</el-button>
    <el-input
      v-model="input0"
      placeholder="输入传过去的参数"
      style="width:150px;"
    ></el-input>
    <el-date-picker
      v-model="timeDate"
      type="datetime"
      placeholder="选择日期时间"
      default-time="12:00:00"
    ></el-date-picker>
    <el-divider content-position="left">$emit方法 子页面=>禁用加载 子传父-》子组件</el-divider>
    <div class="train-city"><el-button @click="select(`大连`)">名字</el-button></div>
    
    <div class="infinite-list-wrapper" style="overflow:auto; height:200px;">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count" class="list-item" :key='i'>{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
     <el-divider content-position="left">鼠标右键在新的窗口打开</el-divider>
     <div class='red' style='width:500px;height:100px' @contextmenu.prevent="onContextmenu">
       在新的窗口打开Login页面
     </div>
  </div>
</template>
<script>
import infiniteScroll from "vue-infinite-scroll";
import moment from "moment";
export default {
  name: "Roll",
  components: {
    infiniteScroll
  },
  data() {
    return {
      count: 10,
      loading: false,
      data: [],
      busy: false,
      input0: "",
      timeDate: "",
      timea: "",
    };
  },
  methods: {
// 鼠标右键
     onContextmenu(event) {
      this.$contextmenu({
        items: [
          {
            label: "在新的页面打开",
            icon: "el-icon-view",
            onClick: () => {
              this.message = "返回(B)";
               let routeUrl=this.$router.resolve({path:'/Login'})
              window.open(routeUrl.href,'_blank')
            }
          },
          { label: "取消", disabled: false }//不可用disabled: true
          ],
           event,
          //  customClass: "class-a",
        zIndex: 3,
        // minWidth: 100
      });
      return false;
      },
    select(val) {
      let data = {
        cityname: val
      };
      console.log(64, data);
      this.$emit("showCityName", data); //select事件触发后，自动触发showCityName事件
    },
    showCityName(){
      console.log(68,'触发showCityName方法')
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
    but() {
// 进入页面，返回后的参数
//  this.$router.push(
//               {
//                 path: this.$route.path,
//                 query: {
//                   beginTime: 1,
//                   endTime: 2,
//                   batchNo: this.queryVo.batchNo,
//                   waferId: this.queryVo.waferId,
//                   lineNo: this.queryVo.lineNo,
//                   lineId: this.queryVo.subLineId,
//                 }
//               }
//       ).catch(err => {
//         console.log(err)
//       });
      let val = {
        Datatimes: this.timea,
        input: this.input0,
        type: "roll"
      };
      console.log("子页面穿的参数", "val");
      this.$router.push({
        path: "/routers/Round",
        query: val
      });
    },
    Datatimes() {
      //   this.timeDate = moment().toDate();//当前时间
      this.timeDate = moment()
        .add(-1, "day")
        .hours(0)
        .minute(0)
        .seconds(0)
        .millisecond(0)
        .toDate();
      this.timea = moment(this.timeDate).format("YYYY-MM-DD HH:mm:ss.SSS");
      console.log(70, this.timea, this.timeDate);
    }
  },
  created() {
    this.Datatimes();
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  }
};
</script>

<style scoped>
.load-more-normal {
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.load-more-hide {
  height: 0;
}
#container{
  color:red;
}
</style>