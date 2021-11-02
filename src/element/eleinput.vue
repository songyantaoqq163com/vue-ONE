<template>
  <div class="eleinput">
    <div ref="input0">
      <el-input
        v-model="input0"
        placeholder="普通输入框"
        class="width150"
      ></el-input>
      {{ input0 }}
      <el-input placeholder="请选择日期" v-model="input1" class="width150">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input2" class="width150">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div ref="input1">
      <el-input placeholder="请输入内容" v-model="input1" class="width300">
        <template slot="prepend">Http://</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input2" class="width300">
        <template slot="append">.com</template>
      </el-input>
      <el-input
        placeholder="请输入内容"
        v-model="input3"
        class="input-with-select width300"
      >
        <el-select
          v-model="select"
          slot="prepend"
          placeholder="请选择"
          style="width:90px"
        >
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div ref="input2">
      <el-row class="demo-autocomplete">
        <el-col :span="12">
          <div class="sub-title">激活即列出输入建议</div>
          <el-autocomplete
            class="inline-input"
            v-model="stateone"
            :fetch-suggestions="querySearchone"
            placeholder="请输入内容"
            clearable
            @select="handleSelectone"
          ></el-autocomplete>
        </el-col>
        <el-col :span="12">
          <div class="sub-title">有效模糊查询</div>
          <el-input
            placeholder="input属性"
            icon="search"
            clearable
            v-model="schfilter"
          ></el-input>
        </el-col>
      </el-row>
    </div>

    <el-table
      :data="tableData"
      border
      :header-cell-style="headClass"
      :cell-style="rowClass">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="data" label="input属性"> </el-table-column>
      <el-table-column prop="text" label="作用"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "eleinput",
  components: {},
  data() {
    return {
      optionslist: [],
      input0: "",
      input1: "",
      input2: "",
      input3: "",
      select: "",
      stateone: "",
      Dialog: [],
      list: [],
      state2: "",
      itemsTwo: [],
      schfilter: "",
      tableData: [
        {
          data: "placeholder",
          text: "默认文本"
        },
        {
          data: ':disable="true"',
          text: "是否禁用input"
        },
        {
          data: "clearable",
          text: "可清空输入框"
        },
         {
          data: "filterable",
          text: "可搜索"
        },
        {
          data: "show-password",
          text: "隐藏密码"
        },
        {
          data: '  maxlength="10"，show-word-limit',
          text: "限制输入框内的输入长度"
        },
        {
          data: 'onkeyup="this.value=this.value.replace(/[^d.]/g,"") "',
          text: "输入框只能输入小数和点"
        },
        {
          data: 'onkeyup="this.value=this.value.replace(/[^d]/g,"") "',
          text: "输入框只能输入数值"
        },
        {
          data: ' :fetch-suggestions="querySearchone"',
          text: "输入触发的操作"
        },
        {
          data: "cb(this.options)",
          text: "hover显示的数组"
        },
        {
          data: "v-model输入非空格",
          text: 'v-model.trim=""'
        }
      ]
    };
  },
  methods: {
    querySearchone(queryString, cb) {
      this.options = queryString? this.list.filter(this.createFilter(queryString)): this.list;
      console.log("原", this.listtwo, "hover数组", this.options);
      cb(this.options); //hover显示
      if (queryString === "" || queryString == null) {
        this.optionslist = this.options.map(item => {
          return { text: item.address, data: item.value };
        });
        this.tableData = this.optionslist;
      }
    },
    createFilter(queryString) {
      return process => {
        return (
          process.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1
        );
      };
    },

    handleSelectone(item) {
      console.log("激活的", item);
      this.options = [];
      this.options.push(item);
      this.searchForm(this.options);
    },
    searchForm(val) {
      console.log("单选时触发", val);
      this.Dialog = [];
      if (val.length === 0) {
        if (this.stateone === "") {
          this.Dialog = this.tableData;
        } else {
          this.Dialog = [];
        }
      } else {
        let vals = val.map(item => {
          return { text: item.address, data: item.value };
        });
        this.Dialog = vals;
        this.tableData = this.Dialog;
      }
    },

    searchInput: function() {
      if (document.querySelector("input") == document.activeElement) {
        this.searchApp(this.searchVal.trim());
      }
    },
    searchApp: function() {
      let self = this;
      let dataList = []; //符合查找的数据
      this.datas.forEach(function(element) {
        if (element.name.indexOf(self.searchVal) !== -1) {
          dataList.push(element);
        }
      });
      this.viewData = dataList;
      return this.viewData;
    },

    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    headClass() {
      return "text-align:center; background:gray; color:#fff";
    },
    rowClass() {
      return "text-align: center;";
    }
  },
  mounted() {
    // 重构tabledata
    this.list = this.tableData.map(item => {
      return { value: item.data, address: item.text };
    });
  },
  created() {
    this.itemsTwo = this.tableData;
  },
  watch: {
    searchVal: function() {
      this.searchInput();
    },
    // 有效模糊查询
    schfilter: function(val, oldVal) {
      console.log("--", oldVal);
      // this.itemsTwo=this.tableData
      if (!val) {
        this.tableData = this.itemsTwo;
        console.log("val", this.itemsTwo, "表格", this.tableData);
        return;
      }
      let arr = this.tableData.filter(v => {
        return v.data.includes(this.schfilter);
      });
      this.tableData = arr;
    }
  }
};
</script>

<style scoped>
.width150 {
  width: 150px;
}
.width300 {
  width: 300px;
}
</style>