<template>
  <div class="infoPlain">
    <p>:gutter='20'=>:span='12'</p>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form>
          <el-form-item label="下拉框控制表格头">
            <el-select v-model="value" placeholder="请选择" @change="valueOne">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-table
          :data="tableData"
          :header-cell-style="headClass"
          :cell-style="rowClass"
          ref="table"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column
            prop="data"
            label="第一个表格数据"
            v-if="colData[0].istrue"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="第二个表格数据"
            v-if="colData[1].istrue"
          ></el-table-column>
          <el-table-column label="白/夜班"
            ><!--转至main.js里的方法-->
            <template slot-scope="scope">
              <div>{{ scope.row | ClassId("ala", "classId") }}</div>
            </template>
          </el-table-column>
          <el-table-column label="改变ul的颜色" prop="alarm"> </el-table-column>
          <!-- 改变单个颜色 -->
          <!-- <el-table-column
                            prop="alarmDescription"
                            :show-overflow-tooltip="true"  //内容超出后hover显示
                            label="报警描述">
                        <template slot-scope="scope">
                            <span v-if="scope.row.ala='a'" style="color:yellow">{{ scope.row.alarmDescription }}</span>
                            <span v-else-if="scope.row.ala='b' style="color: red">{{ scope.row.alarmDescription }}</span>
                        </template>
                    </el-table-column> -->

          <!-- 嵌套输入框 -->
          <!-- <el-table-column v-model="input.checkValue" label="测量值">
                        <template slot-scope="scope">
                            <el-input type="number" v-model="scope.row.checkValue" @change="inputchange(scope.row)"></el-input>
                        </template>
                    </el-table-column> -->
        </el-table>
      </el-col>
      <el-col :span="12">
        <p>表格内布局</p>
        <el-table
          :data="tableData"
          :span-method="objectSpanMethod"
          :header-cell-style="headClass"
          :cell-style="rowClass"
        >
          <el-table-column prop="data" :width="120"></el-table-column>
          <el-table-column type="index" label="序号"></el-table-column>
          <el-table-column prop="value" label="a"></el-table-column>
          <el-table-column prop="date" label="b"></el-table-column>
          <el-table-column prop="alarm" label="c"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-button @click="tabledata">template百分比</el-button>
        <el-table
          :data="tableData"
          :span-method="objectSpanMethod"
          :header-cell-style="headClass"
          :cell-style="rowClass"
        >
          <el-table-column prop="data" :width="120"></el-table-column>
          <el-table-column type="index" label="序号"></el-table-column>
          <el-table-column prop="number" label="百分数">
            <template slot-scope="scope">
              <el-progress
                :stroke-width="26"
                :text-inside="true"
                :color="scope.row.color"
                :percentage="scope.row.number > 100 ? 100 : scope.row.number"
              ></el-progress>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="b"></el-table-column>
          <el-table-column prop="alarm" label="c"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <el-button @click="Datass">第四个表格按钮</el-button>
        <el-table
          v-loading="loading"
          :data="tableDatas"
          :cell-style="rowClassone"
          :header-cell-style="headClass"
          ref="table"
          style="width: 100%"
        >
          <el-table-column prop label="不良类型" width="190px">
            <template slot-scope="scope">{{
              scope.row | safetyValue(0)
            }}</template>
          </el-table-column>
          <el-table-column label="汇总" width="190px">
            <template slot-scope="scope">
              {{ scope.row | safetyValue(scope.$index + 1, "ratio") }}
              <!-- {{scope.$index}} 数据处理-->
            </template>
          </el-table-column>
          <el-table-column align="center" prop="QXS" label="显示数值">
            <template slot-scope="scope">
              <el-progress
                type="line"
                :stroke-width="22"
                :show-text="true"
                :text-inside="true"
                :format="format"
                :percentage="
                  scope.row | safetyValue(scope.$index + 1, 'number')
                "
                :color="scope.row | safetyValue(10)"
              >
              </el-progress>
            </template>
          </el-table-column>
          <el-table-column lign="center" prop="CLEAN" label="显示百分数">
            <template slot-scope="scope">
              <el-progress
                type="line"
                :stroke-width="22"
                :show-text="true"
                :text-inside="true"
                :percentage="scope.row | safetyValue(0)"
                :color="scope.row | safetyValue(10)"
              ></el-progress>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "infoPlain",
  components: {},
  data() {
    return {
      value: "a",
      loading: false,
      tableDatas: [],
      tableData: [
        {
          value: "一",
          data: "2020-10-12",
          date: "10-12",
          alarm: "红色",
          ala: "a",
          number: 10,
          count: 3.5,
          color: "red",
          ngData: [{ number: 100, ratio: "十" }],
        },
        {
          value: "二",
          data: "2020-10-13",
          date: "10-13",
          alarm: "黄色",
          ala: "b",
          number: 30,
          count: 5.5,
          color: "blue",
          ngData: [{ number: 80, ratio: "二十" }],
        },
        {
          value: "三",
          data: "2020-09-09",
          date: "09-09",
          alarm: "红色",
          ala: "a",
          number: 60,
          count: 7.5,
          color: "green",
          ngData: [{ number: 60, ratio: "三十" }],
        },
      ],
      options: [
        {
          value: "a",
          label: "第一个表格数据",
        },
        {
          value: "b",
          label: "第二个表格数据",
        },
      ],
      colData: [
        {
          title: "第一个表格数据",
          istrue: true,
        },
        {
          title: "第二个表格数据",
          istrue: false,
        },
      ],
    };
  },
  methods: {
    format(percentage) {
      var anumber = Math.round((percentage * 100) / 100);
      return percentage === 100 ? "满" : `${anumber}`;
    },
    tabledata() {
      console.log("查询");
    },
    valueOne(value) {
      if (value === "a") {
        this.colData[0].istrue = true;
        this.colData[1].istrue = false;
      } else {
        this.colData[0].istrue = false;
        this.colData[1].istrue = true;
      }
    },
    headClass() {
      return "text-align:center; background:#eef1f6;";
    },
    rowClass() {
      return "text-align: center;";
    },
    timeStyle(column) {
      if (column.columnIndex === 0 || column.columnIndex === 1) {
        return "text-align:center";
      }
    },
    tableRowClassName({ row }) {
      if (row.ala == "a") {
        return "success-row";
      } else {
        return "warning-row";
      }
    },
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 3 === 0) {
          return [3, 1];
        } else {
          return [0, 0];
        }
      }
    },
    // 第四个表格
    rowClassone({ rowIndex, columnIndex }) {
      if (rowIndex === 0 && columnIndex === 1) {
        //指定坐标
        return "background:#C00000";
      } else if (rowIndex === 1 && columnIndex === 1) {
        return "background:#FFC000";
      } else if (rowIndex === 2 && columnIndex === 1) {
        return "background:#FFFF00";
      }
    },
    Datass() {
      var datalist = [];
      this.tableDatas = [];
      this.tableData.forEach((e) => {
        datalist.push(e);
        // pvdcolumns.push(e.ngData[0].ratio)
      });
      for (var row in this.tableData) {
        let columns = new Array(this.tableData.length + 2); //横向
        columns[0] = this.tableData[row].count; //个数
        columns[10] = this.tableData[row].color;
        for (var col in this.tableData[row].ngData) {
          let index = this.getIndex(
            datalist,
            this.tableData[row].ngData[col].number
          );
          if (index < 0) continue;
          let val = this.tableData[row].ngData[col];
          columns[index + 1] = {
            ...val,
            ratio: val.ratio == null ? null : val.ratio,
          };
        }
        this.tableDatas.push(columns);
      }
    },
    getIndex(array, value) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].ngData[0].number == value) {
          return i;
        }
      }
      return -1;
    },
  },
  created() {
    this.Datass();
  },
};
</script>

<style>
.warning-row {
  color: yellow;
}
.success-row {
  color: red;
}
</style>