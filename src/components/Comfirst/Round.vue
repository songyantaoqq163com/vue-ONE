<template>
  <div class="pageFullScreen">
    <div v-if="!isShow">
      <router-link to="/com/Roll">回Roll</router-link>
      <ul>
        <p>父组件</p>
        <p>{{ value2 }}-->{{ value22 }}</p>
        <li v-if="flag">{{ dadMessage }}</li>
        <li v-if="sonData" v-on:sonData="sonData"></li>
      </ul>
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form :inline="true">
          <el-form-item label="范围日期时间选择:">
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
            <div>{{ value1 }}</div>
          </el-form-item>
          <el-button @click="valone">转换时间戳</el-button>
          <div>{{ val1 }}-{{ val2 }}</div>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-form :inline="true">
          <el-form-item label="单日期时间选择：">
            <el-date-picker
              v-model="value3"
              type="datetime"
              placeholder="选择日期时间"
              default-time="12:00:00"
            ></el-date-picker>
            <div>{{ value3 }}</div>
          </el-form-item>
          <el-button @click="valtwo">转换时间戳</el-button>
          <div>{{ val3 }}</div>
        </el-form>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <p>时间处理</p>
      <el-col :span="12">
        <el-form :inline="true">
          <el-form-item label="输入时间戳:">
            <el-input
              v-model="form.time1"
              placeholder="请输入时间戳"
              style="width:150px;"
            ></el-input>
            <el-button @click="spanTime1">转换成字符串</el-button>
            <el-input
              v-model="form.forminput1"
              placeholder="请输入字符串"
              style="width:200px;"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-form :inline="true">
          <el-form-item label="输入字符串:">
            <el-input
              v-model="form.time2"
              placeholder="请输入字符串"
              style="width:200px;"
            ></el-input>
            <el-button @click="spanTime2">转换成时间戳</el-button>
            <el-input
              v-model="form.forminput2"
              placeholder="请输入时间戳"
              style="width:150px;"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "Round",
  components: {},
   props: {
            isShow: {
                type: Boolean,
                default: false
            },
            myData: {}
        },
  data() {
    return {
      toCity: "北京",
      dadMessage: "",
      flag: false,
      value1: "",
      val1: "",
      val2: "",
      value3: null,
      val3: "",
      value2: "",
      value22: "",
      form: {
        time1: "1605542400000",
        forminput1: "",
        time2: "2020-11-18 00:00:00.000",
        forminput2: ""
      }
    };
  },
  methods: {
    updateCity(data) {
      //触发子组件城市选择-选择城市的事件
      this.toCity = data.cityname; //改变了父组件的值
      console.log("toCity:" + this.toCity);
    },
    spanTime1() {
      this.form.forminput1 = moment(Number(this.form.time1)).format(
        "YYYY-MM-DD HH:mm:ss"
      );
    },
    spanTime2() {
      this.form.forminput2 = moment(String(this.form.time2)).valueOf();
    },
    sonData(sonData) {
      this.dadMessage = sonData.name;
      this.flag = sonData.flag;
    },
    valone() {
      if (this.value1 !== "") {
        if (this.value1 != null) {
          this.val1 = moment(this.value1[0]).format("YYYY-MM-DD HH:mm.ss.SSS");
          this.val2 = moment(this.value1[1]).format("YYYY-MM-DD HH:mm.ss.SSS");
        } else {
          this.val1 = "";
          this.val2 = "";
          this.val1 = "前时间";
          this.val2 = "未时间";
        }
      } else {
        this.val1 = "";
        this.val2 = "";
        this.val1 = "前时间";
        this.val2 = "未时间";
      }
    },
    valtwo() {
      if (this.value3 !== "") {
        if (this.value3 != null) {
          this.val3 = moment(this.value3).format("YYYY-MM-DD HH:mm.ss.SSS");
        } else {
          this.val3 = "";
          this.val3 = "未选时间";
        }
      } else {
        this.val3 = "";
        this.val3 = "未选时间";
      }
    },
    query(data) {
      this.value3 = data.beginTime;
      this.value1 = [];
      this.value1[0] = data.begin;
      this.value1[1] = data.end;
    }
  },
  mounted() {
    let data = this.$route.query;
    if (data && data.type == "roll") {
      this.value2 = data.type + "子组件跳转过来的";
    }
  },
  created() {
    console.log("父页面接受的数据", this.$route.query);
    this.value22 = this.$route.query;
    this.value3 = moment(this.$route.query.Datatimes).format(
      "YYYY-MM-DD HH:mm:ss.SSS"
    );
  }
};
</script>

<style>
</style>