<template>
  <div class="index">
    <div ref="canvas" id="canvasData">
      <p>
        导出当前文件为图片
        <button @click="savecanvas">导出当前图片</button>
      </p>
      <div class="clearfix">
        <el-row type="flex" class="row-bg Page">
          <!-- justify="center"居中 -->
          <el-col :span="22" :offset="1">
            <el-card shadow="hover">
              <el-tabs
                v-model="activeName"
                type="border-card"
                @tab-click="handleClick"
              >
                <el-tab-pane label="element的css样式" name="first">
                  <ol>
                    <li>样式生效："style lang="scss" scoped"</li>
                    <li>表格横排：“el-form:inline="true"”</li>
                    <li>css旋转tranform:rotate(90 deg)</li>
                    <li>
                      表格内部合并：
                      :span-method="arraySpanMethod"=》arraySpanMethod({
                      rowIndex, columnIndex }) { //19列 if (rowIndex === 0) { if
                      (columnIndex === 19) { return [6, 1]; } else if
                      (columnIndex === 20) { return [6, 1]; } else { return [1,
                      1]; } }
                    </li>
                    <li>
                      遍历数组:for(var i=0;i>this.data.length;i++){}
                    </li>
                    <li>
                      表格不换行：render-header="labelHead"=》 labelHead:
                      function(h, { column }) { labelHead: function(h, { column
                      }) { let l = column.label.length; let f = 15;
                      column.minWidth = f * (l + 2); //加上一个文字长度 return
                      h("div", { class: "table-head", style: { width: "100%" }
                      }, [ column.label ]); }, },
                    </li>
                    <li>清除浮动的方法</li>
                    <li>父元素添加overflow:hidden</li>
                    <li>
                      after为元素.claefix:afer{}
                      content:'',display:'block',clear:'both',visibility:'hidden'
                    </li>
                    <li>.clearfix{*zoom:1;}</li>
                    <li></li>
                    <li>占位位与不占位</li>
                    <li>display:nine;不占位隐藏</li>
                    <li>visibility:hidden;占位隐藏</li>
                  </ol>
                  <p>背景占满整个屏幕</p>
                  <p>
                    background:url("../../src/assets/bgg.png"),
                    width:100%,height:100%;overflow: hidden;background-size:100%
                    100%; position:fixed;
                  </p>
                  <p>
                    小手样式及字体间距: cursor:pointer; letter-spacing:10px;
                  </p>
                  <p>
                    获取到父元素class: parentElement.parentElement.clasName
                  </p>
                  <p>
                    /*数组中，取出满足要求的第一个值*/ const
                    myArr=[1,2,3,4,8,12]; var v1=myArr.find(value=>value>8);
                    console.log(v1); /*通过数组下标取对应值*/ var
                    v2=myArr.find((value,index,arr)=>{ return index==4 });
                    console.log(v2); /*对象，取出满足要求的下标*/ const
                    nameArr=[ {id:1,userName:"zhaoqian",age:27},
                    {id:2,userName:"sunli",age:23},
                    {id:3,userName:"zhouwu",age:25 },
                    {id:4,userName:"zhengwang",age:21}];
                    /*满足条件，返回下标位置2*/ var
                    i1=nameArr.findIndex((value)=>value.age==25);
                    console.log(i1); /*没有满足条件的，返回-1*/ var
                    i2=nameArr.findIndex((value)=>value.age==28);
                    console.log(i2);
                  </p>
                </el-tab-pane>
                <el-tab-pane label="moment.js" name="second">
                  <dl>
                    <dd>moment(this.time).format("YYYY-MM-DD HH:mm:ss.SSS")</dd>
                    <dd>
                      表格样式：:cell-style="rowClass" rowClass(){return
                      'text-align:center'}
                    </dd>
                    <dd>
                      表头样式：:header-cell-style="headClass"
                      headClass(){return 'background:"#eef1f6"'}
                    </dd>
                    <dd>
                      401拦截 https://www.cnblogs.com/wjhaaa/p/9366073.html
                    </dd>
                    <dd>font-family:"微软雅黑" !important;</dd>
                    <ol>
                      <li>根据key找到对应的对象</li>
                      <li>
                        let data = [{a:'1',b:'22'},{a:'2',b:'22'},{a:'3',b:'22'},{a:'4',b:'22'}]
                      </li>
                      <li>let arr = [1,3]，let a = []</li>
                      <li>
                        arr.forEach(v=>{data.forEach(vv=>{         if(vv.a==v){
                        a.push(vv) } })     })
                      </li>
                      <li>console.log(a)</li>
                    </ol>
                  </dl>
                </el-tab-pane>
                <el-tab-pane label="原生js" name="third">
                  <ul>
                    方法1.通过标签获取HTMl元素(getElementsByTagName)
                  </ul>
                  <li>3.方法2.通过ID获取HTMl元素(getElementById)</li>
                  <li>4.方法3.通过name获取HTMl元素(getElementsByName)</li>
                  <li>.方法4.通过class获取HTMl元素(getElementsByClassName)</li>
                  <li>
                    var div = document.createElement('div'); //
                    创建一个div元素节点
                  </li>
                  <li>
                    document.getElementsByClassName(className)[0].parentElement.parentElement.style.backgroundColor=color
                  </li>
                  <ol>
                    <li>
                      <p>取最值，借用math方法</p>
                      <ul>
                        <li>
                          var arr = [21,2313,4114,1241424,55,12,3,546,577]; var
                          max = Math.max.apply(this,arr); var min =
                          Math.min.apply(this,arr); console.log(min);
                          console.log(max);
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>取最值，借用math方法</p>
                      <ul>
                        <li>
                          <!-- let Etas=[];
                        for(var i=0;i<this.tableData2.length;i++){
                            if(this.tableData2[i].eta!=null){
                                Etas.push(this.tableData2[i].eta);
                            }
                        };
                        Etas.sort(function(a,b){
                            return a-b;
                        })
                        var min=Etas[0];var max=Etas[Etas.length-1]; -->
                          <p>获取url的数据</p>
                          <p>
                            var strHref=document.location.toString(); var
                            strRight=strHref.indexOf("？")； var
                            strRight=strHref.substr(intPos+1);//获取到右边的参数部分
                            var arrTnp=strRight.split("&"); ar para=[]; for (var
                            i = 0; i 小于 arrTmp.length; i++)
                            //===========循环数组 { var dIntPos =
                            arrTmp[i].indexOf("="); var paraName =
                            arrTmp[i].substr(0, dIntPos); var paraData =
                            arrTmp[i].substr(dIntPos + 1); if
                            (paraName.toUpperCase()) { para.push(paraData); } }
                          </p>
                        </li>
                        <li>
                          <p>url穿参</p>
                          <ul>
                            <li>
                              data(){中} let self = this;
                              this.forwardTracerTlose = { click: function (e) {
                              self.$router.push({ name: "ReportPVDCircle",
                              query: { stepNamelist: e.seriesName, textureNo:
                              e.name, beginTime: self.begin, endTime: self.end,
                              }, }); }, };
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </el-tab-pane>
                <el-tab-pane label="vue.js" name="fourth">
                  <ul>
                    <li>beforCreate(创建前)</li>
                    <li>created(创建后)</li>
                    <li>beforMount(载入前)</li>
                    <li>mounted(载入后)</li>
                    <li>beforUpdate(更新前)</li>
                    <li>updated(更新后)</li>
                    <li>
                      beforeDestroy(销毁前) 列:A -> B ->
                      C,当从B到C时，beforeDestroy
                      函数会执行，但由B点击浏览器返回按钮时返回A时，
                    </li>
                    <li>destroyed(销毁后)</li>
                    <li>
                      <p>vuex的五个属性</p>
                      <ol>
                        <li>state:存储变量，基本数据</li>
                        <li>geeter:计算属性，从starte派生出来的数据</li>
                        <li>mutation:同步处理操作</li>
                        <li>action:异步处理操作</li>
                        <li>modules:异步处理操作</li>
                      </ol>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="根据窗口变动">
                  <ol>
                    <li>
                      return:=>fullHeight:
                      document.documentElement.clientHeight};
                    </li>
                    <li>
                      watch:{}=>// fullHeight(val) { // // console.log("val",
                      val); // if (!this.timer) { // this.fullHeight = val; //
                      this.timer = true; // let that = this; //
                      setTimeout(function() { // that.timer = false; // }, 400);
                      // } // }
                    </li>
                    <li>
                      created()浏览器的宽度和高度:=>// let width = //
                      window.innerWidth || //
                      document.documentElement.clientWidth || //
                      document.body.clientWidth; // var height = //
                      window.innerHeight || //
                      document.documentElement.clientHeight || //
                      document.body.clientHeight;
                    </li>
                    <li>
                      mounted()//初始浏览器的高度=>// var height =
                      window.innerHeight - 130; // var myDiv =
                      document.getElementById("test"); // myDiv.style.height =
                      height + "px"; // //随窗口的变化改变现有的高度 // const
                      that = this; // window.onresize = () => { // //
                      console.log("窗口变化了"); // return (() => { //
                      window.fullHeight = document.documentElement.clientHeight
                      - 130; // that.fullHeight = window.fullHeight; //
                      myDiv.style.height = that.fullHeight + "px"; // })(); //
                      };
                    </li>
                  </ol>
                </el-tab-pane>
                <el-tab-pane label=":style控制高度">
                  <ol>
                    <li>class=>:style="'height:' + tableHeight + 'px'"</li>
                    <li>
                      mounted=> setTimeout(() => { this.tableHeight =
                      document.body.clientHeight - 215; }, 100);
                    </li>
                    <li></li>
                  </ol>
                </el-tab-pane>
                <el-tab-pane label="三种存储方式">
                  <p>sessionStorange存储（页面关闭前有效）</p>
                  <ol>
                    <li>
                      sessionStorage.setItem("key","value");
                      //保存数据到sessionStorage
                    </li>
                    <li>
                      var data = sessionStorage.getItem（"key"）; //获取数据
                    </li>
                    <li>sessionStorage.removeItem("key"); //删除数据</li>
                    <li>sessionStorage.removeItem(name) //删除某一条数据</li>
                    <li>sessionStorage.clear(); //删除保存的所有数据</li>
                  </ol>
                  <p>localStorage存储（永久有效）</p>
                  <ol>
                    <li>
                      localStorage.setItem(111,
                      JSON.stringify('储存内的key'))//保存数据
                    </li>
                    <li>
                      JSON.parse(localStorage.getItem(111))//获取数据
                    </li>
                    <li>
                      window.localStorage.removeItem('maxwelltoken')//删除某一个
                    </li>
                    <li>
                      localStorage.clear()//删除全部
                    </li>
                    <el-button @click="setExpire"
                      >给localStorage一个过期时间</el-button
                    >
                  </ol>
                </el-tab-pane>
                <el-tab-pane label="请求头">
                  <p>
                    this.$axios.defaults.headers['Content-Type'] =
                    'application/x-www-form-urlencoded;charset=UTF-8';
                    this.$axios.post('/queryWaferHisList', qs.stringify({
                    waferId:this.queryVo.waferId, }), // { // headers: { //
                    "Content-Type":
                    "application/x-www-form-urlencoded;charset=utf-8", // }, //
                    } ) .then(response=>{ console.log(response) })
                  </p>
                  <p>swith-case数据处理</p>
                  <span>
                    var SuccessCode = "-1";
                    //switch(SuccessCode){//根据后台返回的data.SuccessCode来判断执行什么语句//
                    case "0": // $("#btn").addClass("btnNow");// break; //case
                    "-1": // alert("活动尚未开始"); // break; // case "-2": //
                    alert("本日已抢完"); // break; // default: //
                    alert("系统繁忙，请稍后再试")} // console.log("多数操作");
                  </span>
                </el-tab-pane>
                <el-tab-pane label="状态码信息">
                  <el-table border :data="list">
                    <el-table-column
                      type="index"
                      label="序号"
                      width="50"
                    ></el-table-column>
                    <el-table-column
                      prop="err"
                      label="错误状态"
                      width="100"
                    ></el-table-column>
                    <el-table-column
                      prop="message"
                      label="错误信息"
                    ></el-table-column>
                  </el-table>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  name: "baoimg",
  components: {},
  data() {
    return {
      activeName: "first",
      list: [
        {
          err: "400",
          message: "错误请求"
        },
        {
          err: "401",
          message: "未授权，请登录"
        },
        {
          err: "403",
          message: "拒绝访问"
        },
        {
          err: "404",
          message: "请求错误，未找到该资源"
        },
        {
          err: "405",
          message: "请求方法未允许"
        },
        {
          err: "408",
          message: "请求超时"
        },
        {
          err: "500",
          message: "服务器出错"
        },
        {
          err: "501",
          message: "网络未实现"
        }
      ]
    };
  },
  methods: {
    setExpire() {
      localStorage.setItem("test", 1234567);
      let test = localStorage.getItem("test");
      console.log(typeof test, test);
    },
    handleClick(tab, event) {
      console.log("derive.vue", tab.index, event.screenY);
    },
    savecanvas() {
      let canvas = document.getElementById("canvasData"); //名字
      html2canvas(canvas, { scale: 2, logging: false, useCORS: true }).then(
        function(canvas) {
          canvas.toBlob(
            function(blob) {
              const eleLink = document.createElement("a");
              // eleLink.download = moment(that.time).format("YYYY-MM-DD")+ '.png';
              eleLink.download = "名字" + ".png";
              eleLink.style.display = "none";
              // 字符内容转变成blob地址
              eleLink.href = URL.createObjectURL(blob);
              // 触发点击
              document.body.appendChild(eleLink);
              eleLink.click();
              // 然后移除
              document.body.removeChild(eleLink);
            },
            "image/png",
            1
          );
        }
      );
    }
  }
};
</script>

<style>
</style>