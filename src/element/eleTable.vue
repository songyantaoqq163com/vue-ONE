<template>
  <div class="eletable" ref="eletable">
    <div ref="form">
      <el-divider content-position="left">table表格定位，编辑,样式</el-divider>
    </div>
    <el-tabs :tab-position="tabPosition" :height="tableHeight">
      <!-- el-table属性 -->
      <el-tab-pane label="el-table属性">
        <el-table
          :header-cell-style="{ borderColor: 'red' }"
          :data="tableData"
          style="width: 100%"
          ref="table"
          :row-class-name="tableRowClassName">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="date" fixed label="参数" width="250">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="用法" width="100">
            <template slot-scope="scope">
              <div v-if="!scope.row.isEdit">{{ scope.row.name }}</div>
              <div v-else>
                <el-input v-model="scope.row.name"></el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="介绍">
            <template slot="header" slot-scope="scope">
              <span :class="scope.row">介绍(提示)</span>
              <el-tooltip
                class="item"
                effect="dark"
                content="介绍提示信息"
                placement="top-start"
              >
                <span
                  style="border-radius: 50%; border:1px solid gray;width: 15px;height: 15px;display: inherit;text-align: center;line-height: 15px;"
                  >?</span
                >
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              {{ scope.row.address }}
            </template>
          </el-table-column>
          <el-table-column label="操作" fixed="right" width="160">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                移除
              </el-button>
              <el-button
                @click="handleEdit(scope.row)"
                type="text"
                size="small"
                >{{ scope.row.isEdit ? "完成" : "修改" }}</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
     <!-- table问题 -->
      <el-tab-pane label="table问题">
        <el-table
          border
          :data="tablelist"
          class="tableBox"
          :header-cell-style="headClass"
          @row-click="rowClick"
          :row-style="selected"
          :row-class-name="tableRowName"
          :cell-style="{ borderColor: 'blue' }"
        >
          <el-table-column
            type="index"
            label="序号"
            width="80"
          ></el-table-column>
          <el-table-column prop="type" label="问题"></el-table-column>
          <el-table-column prop="data" label="解释"></el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- table解答 -->
      <el-tab-pane label="table解答">
        <el-table
          border
          :data="tablewidth"
          :cell-style="{ borderColor: 'blue' }"
        >
          <el-table-column type="index" lable="序号"></el-table-column>
          <el-table-column
            prop="type"
            label="问题"
            width="200px"
          ></el-table-column>
          <el-table-column prop="list" label="解答"></el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 提示 -->
      <el-tab-pane label="提示">
        <div class="red">
          <p>一次完整的http过程</p>
          <ol>
            <li>域名解析</li>
            <li>发起tcp的3次握手</li>
            <li>建立tcp连接后发起http请求</li>
            <li>服务器端响应http请求，浏览器得到html代码</li>
            <li>浏览器解析html代码，渲染页面</li>
          </ol>
        </div>
        <div class="red">
          <p>移动端单位</p>
          <ol>
            <li>vw,vh，calc(100vh-100px)</li>
          </ol>
          <p>vuex五个属性</p>
          <ol>
            <li>state(基本数据，样式存放地)</li>
            <li>getters(从基本数据派生的数据)</li>
            <li>mutations(提交更改数据的方法，同步)</li>
            <li>actions(包裹mntations，异步)</li>
            <li>modules(模块化vuex)</li>
          </ol>
        </div>
        <div class="red">
          <p>vue的生命周期(生命周期钩子)</p>
          <ol>
            <li>beforeCreate(实例初始化之后)</li>
            <li>created(实例已经创建完成之后被调用)</li>
            <li>beforeMount(挂载开始之前被调用)</li>
            <li>mounted(挂载实例)</li>
            <li>beforeUpdate(数据更新时调用)</li>
            <li>updated(重新渲染之后调用)</li>
            <li>beforDestroy(实例销毁之前调用)</li>
            <li>destroyed(实例销毁之后调用)</li>
          </ol>
          <p>vue-router中的导航钩子</p>
          <ol>
            <li>全局：beforeach,aftereach</li>
            <li>组件内：beforeRouteEnter,beforeUpdate，beforeRouteLeave</li>
          </ol>
        </div>
        <div class="red">
          <p>什么是js事件冒泡</p>
          <ol>
            <li>在一个对象上触发某个事件，已从里到外的顺序</li>
            <li>vue中如何阻止冒泡事件</li>
            <li>@click.stop=""</li>
          </ol>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "eletable",
  components: {},
  data() {
    return {
      tabPosition: "left",
      tableHeight: null,
      getIndex: "",
      tableData: [
        {
          date: ":gutter='20'",
          name: "间隔",
          address: "el-row布局两边有间隔"
        },
        {
          date: "：header-cell-style='headClass'",
          name: "表头样式-表头内线框",
          address:
            "headClass({rowIndex})/headClass(){}//:header-cell-style='{ backgroundColor: 'blue', color: '#fff' }'"
        },
        {
          date: ":cell-style='rowClass'",
          name: "表格样式处理-表格内线框",
          address: "rowClass({rowIndex,columnIndex})/rowClass(){表格居中}"
        },
        {
          date: "v-loading",
          name: "加载样式",
          address: "data(){loading:'false'}"
        },
        {
          date: " fixed='right'",
          name: "最右边",
          address: "定位到表格最右边"
        },
        {
          date: "fixed",
          name: "定位",
          address: "定位当前位置"
        },
        {
          date: 'type="selection"',
          name: "复选框",
          address: "表格前添加复选框"
        },
        {
          date: ' @cell-dblclick="handle"表头操作"',
          name: "alertchilk编辑内容",
          address: "变价表格内的数据"
        },
        {
          date: ':row-class-name="tableClassName"',
          name: "设置类",
          address: '获得下标，结合点击事件使用@row-click="rowClick"'
        },
        {
          date: ":row-style=selectedsstyle",
          name: "设置行的样式",
          address: "可改变某一行的背景色和字体颜色"
        }
      ],
      tablelist: [
        {
          type: "vue-router有哪几种导航勾子？",
          data:
            "全局守卫：router.beforeEach,组件内的守卫：beforeRouteEnter,beforeRouteUpdate,beforRouteLeave"
        },
        {
          type: "Vue监听属性的变化",
          data: "watch,compated"
        },
        {
          type: "vue中怎么通过router实现替换当前路由路径",
          data: 'router-link, $router.push({path: "/logins"})'
        },
        {
          type: "如何找到所有html select标签的选中项",
          data:
            '$("[name=n-name] :selected").text()选中的文本，$("[name=n-name] :selected").val()选中的值'
        },
        {
          type: "$(document).ready()和window.onload的区别？",
          data:
            "$(documnet).ready()可以编写多个并且都可以执行，window.onload不能同时编写多个，只会执行其中一个"
        },
        {
          type:
            'parseInt("10")==10,parseInt("19",10)==(10+9),parseInt("11",2)==(2+1)',
          data: 'parseInt("17",8)==(8+7),parseInt("if",16)==(16=+15)'
        },
        {
          type: "什么是跨域？",
          data: "浏览器不能执行其他网站的脚本"
        },
        {
          type: "什么是同源？",
          data: "域名，协议，端口均相同"
        },
        {
          type: "v-if和v-for",
          data: "同标签中v-for的优先级比v-if高"
        },
        {
          type: "js在数组中指定位置，插入元素",
          data: "splice方法"
        }
      ],
      tablewidth: [
        {
          type: "xhtml和html的区别？",
          list: "xhtml相对html更加严谨，兼容性更好"
        },
        {
          type: "computed和methods有什么区别？",
          list:
            "computed是属性调用，而methods是函数调用，computed带有缓存功能，而mthods没有"
        },
        {
          type: "foreach和map的区别？",
          list:
            "foreach()返回值是undefined不可以链式调用，map()返回一个新数组，原数组不会改变"
        },
        {
          type: "$route和$router的区别",
          list:
            "route(路由跳转)是路由信息对象，router是VueRouter的一个对象的实例"
        },
        {
          type: "call和apply的区别是什么？",
          list:
            "相同点：都是在特性的作用域中调用函数，不同点：call()逐个传参，apply()可接受2个参数"
        }
      ]
    };
  },
  methods: {
    rowClick(row) {
      this.getIndex = row.index;
    },
    selected({ row, rowIndex }) {
      if (this.getIndex === rowIndex) {
        return {
          "background-color": "red",
          color: "blue"
        };
      }
    },
    tableRowName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    headClass() {
      return "text-align: center;borderColor:red";
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return "warning-row";
      } else if (rowIndex === 1) {
        return "success-row";
      }
      return "";
    },
    handleEdit(row) {
      if (row.isEdit) {
        this.$delete(row, "isEdit");
      } else {
        this.$set(row, "isEdit", true);
      }
      console.log(123, "修改");
    },
    handleClick(row) {
      console.log(row);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  mounted: function() {
    setTimeout(() => {
      console.log(
        111,
        this,
        document.body.clientHeight,
        this.$refs.form.clientHeight
      );
      this.tableHeight = document.body.clientHeight - 40 - 49 - 40;
      console.log("真实的高度", document.body.clientHeight - 40 - 49 - 88);
    }, 100);
  }
};
</script>

<style>
.warning-row {
  color: yellow !important;
}
.success-row {
  color: red !important;
}
.tableBox {
  border: 1px solid red;
}
</style>