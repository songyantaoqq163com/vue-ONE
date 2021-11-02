<template>
  <div class="elecheckbox">
    <!-- ref的使用未写 -->
    <p>checkbox多选框</p>
    <el-row>
      <el-col :span="12">
        <p>
          <el-button type="danger" plain @click="Transfer"
            >Transfer穿梭框</el-button
          >
        </p>
        <div class="dialog">
          <div class="top" v-for="(item, index) in value22" :key="index">
            {{ item.label }}
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <p>
          <el-button @click="butImg" icon="el-icon-edit">编辑复选框</el-button>
        </p>
        <div class="dialog dialogs">
          <div v-if="Dialog.find(val => val.key === 1)">烘干槽</div>
          <div v-if="Dialog.find(val => val.key === 2)">烘干槽内位置</div>
          <div v-if="Dialog.find(val => val.key === 3)">清洗槽</div>
          <div v-if="Dialog.find(val => val.key === 4)">清洗花篮减重</div>
          <div v-if="Dialog.find(val => val.key === 5)">清洗槽内位置</div>
          <div v-if="Dialog.find(val => val.key === 6)">丝印</div>
          <div v-if="Dialog.find(val => val.key === 7)">丝印台面号</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table
          :data="tableData"
          border
          stripe
          :header-cell-style="headClass"
          :cell-style="rowClass"
        >
          <el-table-column
            type="index"
            label="序号"
            width="50px"
          ></el-table-column>
          <el-table-column prop="data" label="checkbox属性"> </el-table-column>
          <el-table-column prop="text" label="作用"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 编辑弹框 -->
    <el-dialog title="设置显示的载板" :visible.sync="ButImglist">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        >全选</el-checkbox
      >
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox
          v-for="city in serarchData"
          :label="city"
          :key="city.key"
          >{{ city.label }}</el-checkbox
        >
      </el-checkbox-group>
      <div slot="footer" class="dialog-footer">
        <el-button @click="ButImglist = false">取 消</el-button>
        <el-button type="primary" @click="butform">确 定</el-button>
      </div>
    </el-dialog>
    <!-- Transfer穿梭框弹框 -->
    <el-dialog title="编辑内容" :visible.sync="Butlist">
      <el-transfer
        v-model="value2"
        filterable
        :data="serarchData"
        @change="handleChange"
        @left-check-change="handleleft"
        @right-check-change="handleright"
        :render-content="hand"
        :right-default-checked="[3]"
        :titles="['未选', '已选']"
        :props="{
          key: 'key',
          label: 'label'
        }"
      >
      </el-transfer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="Butlist = false">取 消</el-button>
        <el-button type="primary" @click="butlistque">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "elecheckbox",
  components: {},
  data() {
    return {
      tableData: [
        {
          data: ':left-default-checked="[2, 3]"',
          text: "默认左勾选状态"
        },
        {
          data: ':right-default-checked="[1]""',
          text: "默认右勾选状态"
        },
        {
          data: ':button-texts="["到左边", "到右边"]"',
          text: "按钮文本"
        },
        {
          data: "@change",
          text: "按钮操作事件"
        },
        {
          data: 'filter-placeholder="请输入城市拼音"',
          text: "搜索按钮默认文本"
        },
        {
          data:
            ":format='{ noChecked: '${total}',hasChecked: '${checked}/${total}'}",
          text: "可显示的数量"
        },
        {
          data: ":titles='['未选择企业', '已选择企业']'",
          text: "左右框标题"
        },
        {
          data: ' @left-check-change="handle"，@right-check-change="handle"',
          text: "选中左，右选中的状态"
        },
        {
          data: ':render-content="hand"',
          text: "确定显示的数据及对象"
        },
        {
          data: "filterable搜索",
          text: "搜索"
        },
        {
          data: ':prop="{key:"key",label:"label"}"',
          text: "控制搜索的条件及显示与传参的参数名"
        }
      ],
      ButImglist: false,
      Butlist: false,
      Dialog: [],
      checkedCities: [],
      checkAll: false,
      isIndeterminate: true,
      value2: [],
      value22: [],
      value2list: [],
      serarchData: [
        { label: "烘干槽", key: 1 },
        {
          label: "烘干槽内位置",
          key: 2
        },
        { label: "清洗槽", key: 3 },
        {
          label: "清洗花篮减重",
          key: 4
        },
        {
          label: "清洗槽内位置",
          key: 5
        },
        { label: "丝印台面号", key: 6 },
        { label: "丝印", key: 7 }
      ]
    };
  },
  methods: {
    headClass() {
      return "text-align: center;background:red; color:yellow";
    },
    rowClass() {
      return "text-align: center;";
    },
    butImg() {
      this.ButImglist = true;
    },
    butlistque() {
      // this.value2list;
      this.Butlist = false;
    },
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
      let a = [];
      this.value2 = [];
      this.value22 = [];
      value.forEach(v => {
        this.serarchData.forEach(vv => {
          if (vv.key == v) {
            a.push(vv);
            this.value2.push(v); //保存勾选的记录
            this.value22.push(vv);
          }
        });
      });
      console.log("获取到对象", a);
      this.value22 = a;
      // console.log( movedKeys);
    },
    handleleft(value) {
      console.log("155left", value);
    },
    handleright(value) {
      console.log("159right", value);
    },
    hand(h, option) {
      // return h("span", { domProps: { title: option.label } }, option.label);
      return <span title={option.label}>{option.label}</span>;
    },
    Transfer() {
      this.Butlist = true;
    },
    handleCheckedCitiesChange(value) {
      this.checkedCities = value;
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.serarchData.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.serarchData.length;
    },
    butform() {
      this.Dialog = this.checkedCities;
      this.ButImglist = false;
    },
    //全选
    handleCheckedCitiesChange(value) {
      this.checkedCities = value;
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.serarchData.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.serarchData.length;
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.serarchData : [];
      this.isIndeterminate = false;
      if (val == true) {
        this.checkedCities = this.serarchData;
      } else {
        this.serarchlist = [];
        this.checkedCities = this.serarchlist;
      }
    }
  },
  created() {
    this.serarchData.forEach(v => {
      this.value2.push(v.key);
      this.value22.push(v);
    });
  }
};
</script>

<style scoped>
.el-checkbox-group .el-checkbox {
  width: 130px;
}
.dialog {
  width: 500px;
  height: 500px;
  border: 1px solid red;
  overflow: auto;
  display: inline-block;
}
.dialog div {
  width: 150px;
  height: 150px;
  margin: 10px;
  display: inline-block;
}
.dialogs div {
  border: 1px solid lawngreen;
}
.top {
  border: 1px solid rebeccapurple;
}
</style>