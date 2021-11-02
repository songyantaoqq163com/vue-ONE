<template>
  <div class="wendang">
    <!-- <span>启动命令更改：pacjage.json--"start": "npm run dev",改为"start": "npm run serve",</span> -->

    <el-row :gutter="20">
      <el-col :span="20" offset="2"
        ><div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >操作按钮</el-button
              >
            </div>
            <div class="text item">
              <ul class="ul">
                <li @click="nav(1)" v-bind:class="{ active: num == 1 }">
                  启动命令更改
                </li>
                <li @click="nav(2)" v-bind:class="{ active: num == 2 }">
                  滚动条样式
                </li>
                <li @click="nav(3)" v-bind:class="{ active: num == 3 }">
                  处理精度丢失问题
                </li>
              </ul>
              <ul style="list-style:none">
                <li v-show="num == 1">
                  <ol>
                    <li>vue启动命令更改</li>
                    <li>pacjage.json文件</li>
                    <li>start:"npm run dev"改为"npm run serve"</li>
                    <li>dev:"改为""serve"</li>
                  </ol>
                </li>
                <li v-show="num == 2">
                  <el-collapse v-model="activeName" accordion>
                    <el-collapse-item
                      title="滚动条样式"
                      name="1"
                      style="border:1px solid gray"
                    >
                      <p>
                        /* 滚动条 */ ::-webkit-scrollbar { width: 5px; height:
                        5px; background-color: #F5F5F5; }
                      </p>
                      <p>
                        /*定义滚动条轨道 内阴影+圆角*/ ::-webkit-scrollbar-track
                        { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                        border-radius: 10px; background-color: #F5F5F5; }
                      </p>
                      <p>
                        /*定义滑块 内阴影+圆角*/ ::-webkit-scrollbar-thumb {
                        border-radius: 10px; -webkit-box-shadow: inset 0 0 6px
                        rgba(0,0,0,.3); background-color: #555; }
                      </p>

                      <!-- <el-collapse v-model="activeName" accordion>
                  <el-collapse-item  v-for="(item,index) in alllist" name="index" :key="index" >-->
                      <!--      {{item.name}}-->
                      <!-- <template slot="title"> -->
                      <!--        <i class="iconfont" :class="menu.icon"></i>-->
                      <!-- <span>{{item.name}}</span>
                  </template>-->
                      <!--      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>-->
                      <!--      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>-->
                      <!-- </el-collapse-item>
                  </el-collapse>-->
                    </el-collapse-item>
                  </el-collapse>
                </li>
                <li v-show="num == 3">
                  <p>let a=0.1*0.2</p>
                  <p>a=o,2000000004</p>
                  <p>Number((0.1*0.2)/toFixed(2))</p>
                  <p>0.02</p>
                </li>
              </ul>
            </div>
          </el-card>
        </div></el-col
      >
      <el-col :span="20" :offset="2"
        ><div class="grid-content bg-purple">
          <el-card>
            <div slot="header" class="clearfix">
              <span>vue框架搭建</span>
            </div>

            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="node检测" name="first"
                >ctrl+r=>cmd=>node -v=>npm -v</el-tab-pane
              >
              <el-tab-pane label="cnpm安装" name="second">
                <p>
                  >npm install -g cnpm --registry=https//registry.npm.taobao.org
                </p>
                <p>cnpm</p>
                <p>安装elementui=>npm i element-ui</p></el-tab-pane
              >
              <el-tab-pane label="脚手架全局安装" name="third"
                >(cnpm)npm install --global vue-cli || npm install vue-cli
                -g</el-tab-pane
              >
              <el-tab-pane label="创建项目" name="fourth"
                ><p>搭建失败需要执行的神奇指令：npm cache clean --force</p>
                <p>vue init webpack --(项目名称)</p>
                <p>去掉警告：build=>webpack.base.conf.js=>43行，重启</p>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <el-card class="box-card">
          <p>
            时间样式
            <el-date-picker
              v-model="three"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </p>
          <p>getTime()数字类型/unix()字符串转成时间戳/valueOf()字符串</p>
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="自动显示当前时间" name="first">{{
              nowtime | updatetime
            }}</el-tab-pane>
            <el-tab-pane label="单个时间" name="second">
              <p>时间内的类型:{{ three }}</p>
            </el-tab-pane>
            <el-tab-pane label="时间参数" name="third"
              ><p>时间字符串:{{ threefirst }}</p></el-tab-pane
            >
            <el-tab-pane label="http请求" name="fourth">
              <p>npm install vue-resource --save-dev</p>
              <p>npm install vue-axios --save</p></el-tab-pane
            >
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "wendang",
  components: { moment },
  data() {
    return {
      num: 1, //默认显示
      activeName: "0",
      activeName: "first",
      activeName2: "first",
      nowtime: new Date(),
      three: "",
      threefirst: ""
      // activeName: '',
      // alllist:[]
    };
  },
  filters: {
    updatetime: function(value) {
      return moment(value).format("YYYY-MM-DD HH:mm:ss.SSS");
    }
  },
  methods: {
    threeone() {
      this.three = moment()
        .endOf("days")
        .hours(8)
        .minute(30)
        .seconds(35)
        .millisecond(0)
        .toDate();
      this.threefirst = moment(this.three).format("YYYY-MM-DD HH:mm:ss.SSS");
    },
    nav(num) {
      this.num = num;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
    // this.$http.get(`/menu`)
    // .then(response=>{
    //   let menuList=response.data.data;
    //   console.log(menuList);
    //   this.alllist=menuList;
    // }).catch(error=>{
    //   console.log(error);
    // })
  },
  mounted() {
    //生命周期模板挂载之后
    let _this = this;
    this.timer = setInterval(() => {
      _this.nowtime = new Date();
    }, 1000);
  },
  created() {
    this.threeone();
  },
  beforeDestroy() {
    //生命周期实例销毁之前
    if (this.timer) {
      clearInterval(this.timer);
    }
    11;
  }
};
</script>

<style scoped>
.ul li {
  list-style: none;
  display: inline-block;
  cursor: pointer;
  margin-left: 20px;
}

.active {
  color: red;
}
#handle {
  border: 1px solid red;
  width: 500px;
  margin: 10px auto;
}

/* 卡片 */
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

/* .box-card {
  width: 480px;
} */
</style>