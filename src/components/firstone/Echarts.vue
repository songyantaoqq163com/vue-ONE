<template>
  <div class="pageFullScreen">
    <p>echarts页面表格实验</p>
    <p>el-col="6"</p>
    <el-row style="display:inline-flex;">
      <el-col :span="6">
        <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
      </el-col>
      <el-col :span="6">
        <div id="myChart1" :style="{ width: '300px', height: '300px' }"></div>
      </el-col>
      <el-col :span="6">
        <div id="myChart2" :style="{ width: '300px', height: '300px' }"></div>
      </el-col>
    </el-row>
    <!-- 树图 -->
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <ve-line :tooltip="tooltip" :series="series"></ve-line>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="20">
        <el-table :data="tableData" border style="width:100%;margin-top:20px">
          <el-table-column prop="name" label="属性"> </el-table-column>
          <el-table-column prop="dateL" label="介绍"> </el-table-column>
          <el-table-column label="细节" prop="list"> </el-table-column>
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="属性1">
                  <span>{{ props.row.list }}</span>
                </el-form-item>
                <el-form-item label="属性2">
                  <span>{{ props.row.list1 }}</span>
                </el-form-item>
                <el-form-item label="属性3">
                  <span>{{ props.row.list2 }}</span>
                </el-form-item>
                <el-form-item label="属性4">
                  <span>{{ props.row.list3 }}</span>
                </el-form-item>
                <el-form-item label="属性5">
                  <span>{{ props.row.list4 }}</span>
                </el-form-item>
                <el-form-item label="属性6">
                  <span>{{ props.row.list5 }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  name: 'echarts',
  components: {
    echarts
  },
  data () {
    var data = {
      name: '一级',
      children: [
        {
          name: '二级1',
          children: [
            {
              name: 'converters',
              children: [
                { name: 'Converters', value: 721 },
                { name: 'DelimitedTextConverter', value: 4294 }
              ]
            },
            {
              name: 'DataUtil',
              value: 3322
            }
          ]
        },
        {
          name: '二级2',
          children: [
            { name: 'DirtySprite', value: 8833 },
            { name: 'LineSprite', value: 1732 },
            { name: 'RectSprite', value: 3623 }
          ]
        }
      ]
    }
    return {
      tableData: [
        {
          name: ':daraZoom{}',
          dateL: '缩放，平移',
          list: 'zoomLock:false/true至平移不变',
          list1: 'fillerColor:显示全部的背景色',
          list2: 'backgroundColor:显示的部分背景',
          list3: 'borderColor:边框颜色',
          list4: '',
          list5: ''
        },
        {
          name: ':settings{}',
          dateL: '绑定基本配置',
          list: " xAxisType: 'value(横轴必须是数字)', 'time(横轴是时间)'",
          list1:
            "select颜色=>itemStyle: {normal: {color: (params) => {let colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#f2a93b', '#f9cf36', '#4a5bdc', '#4cd698', '#f4914e', '#fcb75b', '#ffe180', '#b6c2ff', '#96edc1']return colors[params.dataIndex] }}",
          list2: '拐角点的偏移量：itemStyle: { normal: {label: { show: true,position: "top",offset:[10,-20],rotate: 45,',
          list3: '',
          list4: '',
          list5: ''
        },
        {
          name: ':legend{}',
          dateL: '图例',
          list: ' selectedMode:false,隐藏',
          list1: 'textStyle/文本样式',
          list2: 'show: true,显示/隐藏',
          list3: 'data: ["CVDIN"],名称',
          list4: '',
          list5: ''
        },
        {
          name: ':grid{}',
          dateL: ' bottom: 0,调整位置',
          list: ' width: 200，调整大小',
          list1: '',
          list2: '',
          list3: '',
          list4: '',
          list5: ''
        },
        {
          name: ':series{}',
          dateL: ' barWidth : 20宽度',
          list: ' itemStyle，',
          list1: 'normal{}位置，文本',
          list2: 'symbolSize: 10,(散点图改变大小)',
          list3: 'itemStyle: {normal: {label: {show: true,',
          list4: 'smooth: false,直线',
          list5: ''
        },
        {
          name: 'yAXIS',
          datel: 'axisLine: {}y轴竖线',
          list: 'show: true/lineStyle: {color: "gray"}',
          list1: 'axisLine: {  show: true, lineStyle: { color: "gray", }y线',
          list2: '行间距yAxis: {type: value,interval: 10,',
          list3: '',
          list4: '',
          list5: ''
        },
        {
          name: 'xAXIS',
          datel: 'interval: 0,xx轴无间距',
          list: '',
          list1: '',
          list2: '',
          list3: '',
          list4: '',
          list5: ''
        }
      ],
      chartData: {
        columns: ['name'],
        rows: [
          { 日期: '1/1', 访问用户: 123, 年龄: 3, 下单用户: 1244 },
          { 日期: '1/2', 访问用户: 1223, 年龄: 6, 下单用户: 2344 },
          { 日期: '1/3', 访问用户: 7123, 年龄: 9, 下单用户: 3245 },
          { 日期: '1/4', 访问用户: 4123, 年龄: 12, 下单用户: 4355 },
          { 日期: '1/5', 访问用户: 3123, 年龄: 15, 下单用户: 4564 },
          { 日期: '1/6', 访问用户: 2323, 年龄: 20, 下单用户: 6537 }
        ]
      },
      chartSettings: {
        // dimension: "", // 这个是图表的维度信息
        // metrics: "name", // 这个是图表数据指标信息
        labelLine: {
          // 隐藏指引线
          show: false
        },
        radius: [25, 45], // 环的半径
        offsetY: 50, // y轴上的偏移量
        hoverAnimation: false // 取消滑动、点击事件
      },
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [data],
          left: '2%',
          right: '2%',
          top: '20%',
          bottom: '8%',
          symbol: 'emptyCircle',
          orient: 'BT',
          expandAndCollapse: true,
          label: {
            position: 'bottom',
            // rotate: 90,
            verticalAlign: 'middle',
            align: 'right'
          },
          leaves: {
            label: {
              position: 'top',
              // rotate: 90,
              verticalAlign: 'middle',
              align: 'left'
            }
          },

          animationDurationUpdate: 750
        }
      ]
    }
  },
  mounted () {
    this.drawLine()
    this.drawLine1()
    this.drawLine2()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '柱形图' },
        tooltip: {},
        xAxis: {
          // type:'value',//背景线
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          type: 'value' // 背景线
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    },
    drawLine1 () {
      let myChart = this.$echarts.init(document.getElementById('myChart1'))
      // 绘制图表
      myChart.setOption({
        title: { text: '线型图' },
        tooltip: {},
        xAxis: {
          type: 'value',
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '销量',
            type: 'line',
            data: [5, 12, 23, 12, 12, 76]
          }
        ]
      })
    },
    drawLine2 () {
      let myChart = this.$echarts.init(document.getElementById('myChart2'))
      // 绘制图表
      myChart.setOption({
        title: { text: '原型图' },

        tooltip: {},

        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'pie',
            data: [5, 12, 23, 12, 12, 76]
          }
        ]
      })
    }
  },
  created () {
    console.log(279, this)
  }
}
</script>

<style scoped>
</style>
