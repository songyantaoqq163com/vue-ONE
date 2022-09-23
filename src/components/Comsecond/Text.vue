<template>
  <div class="pageFullScreen test test-1">
    <el-divider content-position="left">搜索表格</el-divider>
    <el-table
      :data="
        tableData.filter(
          data =>
            !search || data.value.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width:100%;"
      :header-cell-style="headClass"
      border
      ref="table"
      :cell-style="timeStyle"
      :height="tableHeight"
      class="scrollbar "
    >
      <el-table-column
        prop="value"
        label="问题"
        width="160px"
        :show-overflow-tooltip="true"
      >
        <template slot="header" slot-scope="scope">
          <!-- {{ scope.row.value }} -->
          <el-input :calss="scope.row" v-model="search" size="mini" placeholder="搜索问题" />
        </template>
        <template slot-scope="scope">
          <span>{{ scope.row.value }}</span>
        </template>
      </el-table-column>
      <el-table-column align="right" label="解答">
        <template slot-scope="scope">
          <span>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "Textone",
  components: {},
  data() {
    return {
      restaurants: [],
      state1: "",
      search: "",
      tableData: [
        {
          value: "element引入",
          address:
            'import Element from "element-ui"/import "elment-ui/lib.theme-chalk/index.css"'
        },
        {
          value: "表格内容超出",
          address: ':show-overflow-tooltip="true"'
        },
        {
          value: "什么是MVVM?",
          address:
            "model(负责数据)-view(负责展示)-viewmodel(负责view和model关联起来，起到一个中介的作用)"
        },
        {
          value: "get接口拼接",
          address:
            "this.$https/get(`/data-api/{lineNo}/el-defect/report?lineld=${this.queryVo.lineld}`,{params:{defect:this.value}})"
        },
        {
          value: "sort取数组中的最大值和最小值",
          address:
            "let lis=[]; lis.sort(); var min=lis[0]; var max=lis[lis.length-1] "
        },
        {
          value: "data时间戳转换",
          address: 'moment(data).format("YYYY-MM-DD HH:mm:ss"'
        },
        {
          value: "div中添加style",
          address: ':style="{height:tableHeight+"px"}"'
        },
        {
          value: 'style绑定对象 html :style="styleObj"',
          address: 'data(){return{styleObj{color:"red",fontSize:"13px"}}}'
        },
        {
          value: "forEach()方法",
          address:
            "const arr= [4, 9, 16, 25];arr.forEach(item => arr1.push(item));console.log(arr1)  // [4, 9, 16, 25]"
        },
        {
          value: "数组集合换数组对象",
          address:
            " for(var i=0;i<this.options.length;i++){this.str.push({ id:i, name:this.options[i]})}"
        },
        {
          value: "split的方法",
          address:
            '把一个字符串分割成字符串数组。解析点：this.value0=this.value.split(".")'
        },
        {
          value: "reverse()函数的使用",
          address: "可以对字符串反转操作，（字符串倒序）"
        },
        {
          value: "join()的方法",
          address: "把数组中的所有元素放入一个字符串"
        },
        {
          value: "computed和watch的区别",
          address:
            "computed:计算属性，支持缓存，不支持异步！watch:侦听属性，不支持缓存，深度监听"
        },
        {
          value: "props的用法",
          address:
            "需要更改的父组件 :ishow控制显示的部分，ref指向的位置，：maydata传过去的参数，点击事件中传过去“this.$refs.query(this.queryVo)”,需要接收的组件中：methods同级props:{isshow:{type:boolean,default:false}mayData:{}} methods中需要又query(data)接收"
        },
        {
          value: "splice方法",
          address:
            "this.value.splice(“原有的元素”，1（删除的个数），“替换新的元素”)"
        },{
          value:'concat方法',
          address:'拼接方法，a=[1,2],b=[3,4] c=b.concat(a) c=[1,2,3,4]'
        },{
          value: "slice取值",
          address: "this.value.slice(start,end)/start下标位置，end指定的某个元素"
        },
        {
          value: "文字与图片水平对齐",
          address: "vertical-align:middle;"
        },
        {
          value: "小数后取2位有效数字",
          address: '"数字".toFixed(2)，"数字".toPrecision(0)取小数后的有效数字'
        },
        {
          value: "js判断对象是否为空,es6语法，onject.keys()",
          address:
            "var data={},var arr=object.keys(data),alert(arr.length==0)//true为空，false不为空"
        },
        {
          value: "js判断对象是否为空,json对象转化json字符串",
          address:
            'var dara={},var b=(JSON.stringify(data)=="{}");,alert(b);true为空，false不为空'
        },
        {
          value: "filter()取数组中的值",
          address:
            "const arr= [32, 33, 16, 40];const arr1 = arr.filter(item => item >= 18);console.log(arr1)  // [32, 33, 40]"
        },
        {
          value: "filter()标签方法",
          address:
            '<template slot-scope="scope"><p :class="scope.row|etaClass("halm",lineld)"></p></template>//filters:{etaClass:function(obj){……}}'
        },
        {
          value: "filter()main.js方法",
          address:
            '<template slot-scope="scope"><p>{{scope.row|Hamline{"halm","lineld"}}}</p></template>//main.js//Vue.filter("Hamline",function(obj,prop,child){……})'
        },
        {
          value: "map方法",
          address:
            "const arr= [4, 9, 16, 25];const arr1 = arr.map(item => item+2);console.log(arr1)  // [6, 11, 18, 27]"
        },
        {
          value: "reverse()方法",
          address: "数组倒序"
        },
        {
          value: "unshift()方法",
          address: "添加在开头"
        },
        {
          value: "shift()方法",
          address: "删除开头第一个"
        },
        {
          value: "push()方法",
          address: "在数组中最后添加一个"
        },
        {
          value: "pop()方法",
          address: "删除最后一个"
        },{
          value:'click和onclick的区别',
          address:'click 是方法，onclick是事件'
        },{
          value:'==和===的区别',
          address:'==和===之间的区别在于，==在强制转换后根据值进行比较，而===在不强制转换下根据值和类型进行比较。'
        }
      ],
      tableHeight: null
    };
  },
  methods: {
    headClass() {
      return "text-align:center; background:#eef1f6;";
    },
    timeStyle(column) {
      //console.log(column)
      return "text-align:left;";
    },
    // input输入框
    //  :data="
    //     tableData.filter(
    //       data =>
    //         !search || data.value.toLowerCase().includes(search.toLowerCase())
    //     )
    //   "
   
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.tableHeight = document.body.clientHeight - 220;
    }, 100);
  }
};
</script>

<style scoped>
.el-table td,
.el-table th.is-leaf,
.el-table--border,
.el-table--group {
  border-color: black;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: black;
}
/*滚动条*/

/* ./deep/ .el-table__body-wrapper::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

   /deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
       background-color: #ddd;
       border-radius: 3px;
   } */
</style>