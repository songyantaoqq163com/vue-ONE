<template>
  <div class="Dialog">
    <p>el-Dialog弹出框</p>
    <p>:modal-append-to-body='false'(防止被遮罩层遮住)</p>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        下拉查询条件<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu>
        <el-form inline="false">
          <el-form-item label="输入框">
            <el-input v-model='input1'></el-input>
          </el-form-item>
           <el-form-item label="输入框2">
            <el-input v-model='input1'></el-input>
          </el-form-item>
        </el-form>
      </el-dropdown-menu>

      <!-- <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
      </el-dropdown-menu> -->
    </el-dropdown>
    <el-row :gutter="20">
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <div>
            <el-button @click="DiaTable">打开嵌套表格</el-button>
            <el-dialog title="打印的几种方式" :visible.sync="Diafirst">
              <el-table :data="gridData">
                <el-table-column
                  property="date"
                  label="日期"
                  width="150"
                ></el-table-column>
                <el-table-column
                  property="name"
                  label="姓名"
                  width="200"
                ></el-table-column>
                <el-table-column
                  property="address"
                  label="打印的方式"
                ></el-table-column>
              </el-table>
            </el-dialog>
          </div></div
      ></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <div>
            <el-button @click="DiaForm">打开嵌套表单</el-button>
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false"
                  >确 定</el-button
                >
              </div>
            </el-dialog>
          </div>
        </div></el-col
      >
      <el-col :span="12">
        <el-button type="text" @click="centerDialogVisible = true"
          >点击打开 Dialog</el-button
        >
        <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%">
          <span>需要注意的是内容是默认不居中的</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </el-col>
      <el-col :span="12">
        <el-popover
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <el-button slot="reference">hover 激活</el-button>
        </el-popover>

        <el-popover
          placement="bottom"
          title="标题"
          width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <el-button slot="reference">click 激活</el-button>
        </el-popover>
      </el-col>
      <el-col :span="12">
        <el-button
          type="primary"
          @click="drawer = true"
          style="margin-left: 16px;"
          >中文数字转换为阿拉伯数字</el-button
        >
        <el-drawer
          title="我嵌套了表格!"
          :visible.sync="drawer"
          direction="ttb"
          size="50%"
        >
          <el-input v-model="inputA" placeholder="数字数字转为文字"></el-input>
        </el-drawer>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Dialog",
  components: {},
  data() {
    return {
      input1:'',
      Diafirst: false,
      drawer: false,
      inputA: "",
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "console.group"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "console.warn"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "console.error"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "console.info"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      centerDialogVisible: false,
      visible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    datalist() {
      switch (this.inputA) {
        case "1":
          this.inputA = "一";
          break;
        case "2":
          this.inputA = "二";
          break;
        case "3":
          this.inputA = "三";
          break;
        case "4":
          this.inputA = "四";
          break;
        default:
          alert("系统繁忙，请稍后再试");
      }
      console.log(this.inputA);
    },
    DiaTable() {
      this.Diafirst = true;
      //接口地址
    },
    DiaForm() {
      this.dialogFormVisible = true;
    }
  },
  created() {
    // console.group("五虎上将");
    // console.log("关羽");
    // console.error("张飞");
    // console.info("赵云");
    // console.warn("五子良将");
  }
  // watch:{
  //   datalist()
  // }
};
</script>

<style>
</style>