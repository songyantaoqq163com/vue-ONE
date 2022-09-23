/* eslint-disable no-dupe-keys */
/* eslint-disable no-dupe-keys */
/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable vue/no-dupe-keys */
/* eslint-disable no-dupe-keys */
<template>
  <div class="pageFullScreen">
    <el-divider content-position="left"
      >el-row=>type="flex" style="margin:10px 0" justify="center</el-divider
    >
    <el-row>
      <el-col :span="20" :offset="2">
        <!-- 折线 -->
        <ve-line
          :xAxis="xAxis"
          :yAxis="yAxis"
          :series="series"
          :tooltip="tooltip"
          :legend="legend"
          :title="title"
          :events="forwardTracerTlose"
          height="500px"
        ></ve-line>
      </el-col>
      <!-- 柱状图 -->
      <el-col :span="20" :offset="2">
        <ve-histogram
          :legend="legend2"
          :xAxis="xAxis2"
          :yAxis="yAxis2"
          :title="title2"
          :series="series2"
        ></ve-histogram>
      </el-col>
      <!-- 散点图 -->
      <el-col :span="20" :offset="2">
        <ve-histogram
          :xAxis="xAxis2"
          :yAxis="yAxis2"
          :title="title3"
          :series="series3"
        ></ve-histogram>
      </el-col>
    </el-row>
    <!-- 饼图/仪表盘-->
    <el-row>
      <el-col :span="20" :offset="2">
        <el-col :span="10" :offset="1">
          <ve-line
            :series="series4"
            :legend="legend4"
            :title="title4"
            :tooltip="tooltip4"
          ></ve-line>
        </el-col>
        <el-col :span="10" :offset="1">
          <ve-line
            height="400px"
            :series="series5"
            :title="title5"
            :tooltip="tooltip5"
          ></ve-line>
        </el-col>
      </el-col>
    </el-row>
    <el-divider content-position="left">v-charts总结</el-divider>
    <el-row :span="20">
      <el-table
        :data="tableadata"
        :header-cell-style="{ backgroundColor: 'gray', color: '#fff' }"
      >
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="name" label="属性"></el-table-column>
        <el-table-column prop="text" label="作用"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "echartsone",
  components: {},
  data() {
    // let self = this;
    // this.forwardTracerTlose = {
    //   click: function(e) {
    //     self.$router.push({
    //       name: "echarts",
    //       query: {
    //         lineld: "A",
    //         beginTime: self.begin,
    //         endTime: self.end
    //       }
    //     });
    //   }
    // };
    return {
      tableadata: [
        {
          name: ":legend",
          text: "orient布局方式，horizontal,vertical",
        },
        {
          name: "xAxis",
          text: 'splitLine=>"show: true"横轴',
        },
        {
          name: "多个x轴",
          text: 'xAxis=>[{position:"bottom",offser:150}，offset倾斜度]',
        },
        {
          name: "多个y轴",
          text: 'yAxis=>[{position:"right",offser:150}，offset倾斜度]',
        },
        {
          name: "smooth：true/false折线的曲线和直线",
          text: 'yAxis=>[{position:"right",offser:150}，offset倾斜度]',
        },
      ],
      tooltip: {
        show: false, // 显示/隐藏hover
      },
      title: {
        show: true,
        text: "折线",
        x: "left",
        y: "top",
      },
      title2: {
        show: true,
        text: "柱状图",
      },
      title3: {
        show: true,
        text: "散点图",
      },
      legend: {
        data: ["占比", "总计"],
        // icon: 'none',
        show: true, // 是否显示最上面的表头
      },
      // 饼图
      title4: {
        text: "饼图",
        subtext: "虚构数据",
        left: "center",
      },
      tooltip4: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend4: {
        bottom: 10,
        left: "center",
        data: ["西凉", "益州", "兖州", "荆州", "幽州"],
      },
      series4: [
        {
          name: "幽州",
          type: "pie",
          radius: "65%",
          center: ["50%", "50%"],
          selectedMode: "single",
          data: [
            {
              value: 1548,
              name: "幽州",
            },
            { value: 735, name: "荆州" },
            { value: 510, name: "兖州" },
            { value: 434, name: "益州" },
            { value: 335, name: "西凉" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
      legend2: { data: ["Forest", "Steppe", "Desert", "Wetland"] },
      xAxis2: [
        {
          type: "category",
          axisTick: { show: false },
          data: ["2012", "2013", "2014", "2015", "2016"],
          splitLine: {
            show: true,
          },
        },
      ],
      yAxis2: [
        {
          type: "value",
        },
      ],
      series2: [
        {
          name: "Forest",
          type: "bar",
          barGap: 0,
          barWidth: 30,
          itemStyle: {
            normal: {
              color: "#f7dbb9",
            },
          },
          data: [320, 332, 301, 334, 390],
          markLine: {
            data: [
              {
                name: "上限",
                yAxis: 300,
                lineStyle: {
                  color: "red",
                  type: "solid",
                  width: "1",
                },
                label: {
                  show: true,
                  position: "insideEndTop",
                  formatter: function (c) {
                    return "上限:" + c.value;
                  },
                  textStyle: {
                    fontSize: 20,
                  },
                },
              },
              {
                name: "下限",
                yAxis: 110,
                lineStyle: {
                  color: "red",
                  type: "solid",
                  width: "1",
                },
                label: {
                  show: true,
                  position: "insideEndTop",
                  formatter: function (c) {
                    return "下限:" + c.value;
                  },
                  textStyle: {
                    fontSize: 20,
                  },
                },
              },
            ],
          },
        },
        {
          name: "Steppe",
          type: "bar",
          barWidth: 30,
          data: [220, 182, 191, 234, 290],
        },
        {
          name: "Desert",
          type: "bar",
          barWidth: 30,
          data: [150, 232, 201, 154, 190],
        },
        {
          name: "Wetland",
          type: "bar",
          barWidth: 30,
          data: [98, 77, 101, 99, 40],
        },
      ],
      series3: [
        {
          name: "点1",
          type: "scatter",
          data: [320, 332, 301, 334, 390],
          markLine: {
            lineStyle: {
              normal: {
                type: "dashed",
              },
            },
            data: [
              {
                name: "两个坐标之间的标线",
                yAxis: 110,
                xAxis: "周一",
                label: {
                  show: true,
                  position: "insideEndTop",
                  formatter: function (c) {
                    return "下限:" + c.value;
                  },
                  textStyle: {
                    fontSize: 20,
                  },
                },
              },
              {
                name: "一个坐标之间的标线",
                yAxis: 220,
                xAxis: "周二",
                label: {
                  show: true,
                  position: "insideEndTop",
                  formatter: function (c) {
                    return "上限:" + c.value;
                  },
                },
              },
            ],
          },
        },
        {
          name: "点2",
          type: "scatter",
          barWidth: 30,
          data: [220, 182, 191, 234, 290],
        },
      ],
      xAxis: [
        {
          show: true,
          type: "category",
          nameLocation: "start",//坐标位置，支持start,end，middle
          data: ["24.2", "24.1", "24", "23.9", "23.8", "23.7", "23.6", "23.5"],
          axisLabel: {
            interval: 0,
            rotate: 45, // 倾斜45度
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#000", // x轴线颜色
            },
          },
        },
      ],
      // eslint-disable-next-line vue/no-dupe-keys
      yAxis2: [
        {
          type: "value",
        },
      ],
      yAxis: [
        {
          name: "占比",
          type: "value",
          position: "left",
          max: 20,
          interval: 4,
          // interval: Math.ceil(60 / 10),//(y轴最大值/间距)间距等分为6等分
          axisLabel: {
            formatter: function (val) {
              return val + "%";
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#000", // y轴最左侧线的颜色
            },
          },
          axisTick: {
            show: true, // 显示刻度
          },
          splitLine: {
            show: true, // 显示刻度线
          },
        },
        {
          name: "总计",
          type: "value",
          position: "right",
          max: 30,
          interval: 6, // 单个空格的间隔
          axisLabel: {
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      ],
      series: [
        {
          name: "折线图",
          data: [2, 4, 5, 7, 9, 10, 14, 16],
          type: "line", // 折线图
          yAxisIndex: 1, // 对应的右边的y坐标
          // symbol: "circle", //实心点circle
          symbolSize: 10, // image大小
          cursor: "pointer", // 小手样式
          smooth: false, // 折线样式(直线)，true曲线
          showSymbol: true, // 拐点是否显示
          symbol:
            "image://data:image/png;base64,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",
          itemStyle: {
            normal: {
              color: "red",
              label: {
                show: true,
                formatter: function (c) {
                  return c.data.toFixed(2) + "%"; // 保留2位小数加上百分号
                },
                textStyle: {
                  color: "red", // 数据颜色
                },
              },
            },
          },
        },
        {
          name: "柱状图",
          data: [17, 19, 15, 13, 7, 10, 8, 5],
          type: "bar", // 图形（柱状图）
          yAxisIndex: 0, // 对应左边y坐标
          barWidth: 20, // 柱状图的宽度
          itemStyle: {
            normal: {
              color: "yellow", // 柱形图的颜色
              label: {
                show: true, // 是否显示数据
                position: "top", // 显示的位置
                textStyle: {
                  color: "#000000", // 数据颜色
                },
                formatter: "{c}%", // 数据基于百分号
              },
            },
          },
        },
      ],
      // 仪表盘
      title5: {
        text: "仪表盘",
        left: "center",
      },
      tooltip5: {
        formatter: "{a} <br/>{b}:{c}",
      },
      series5: [
        {
          name: "Pressure",
          type: "gauge",
          radius: "65%",
          center: ["50%", "50%"],
          axisLabel: {
            color: "#464646",
            fontSize: 20,
            distance: -60,
          },
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.25, "#FF6E76"],
                [0.5, "#FDDD60"],
                [0.75, "#58D9F9"],
                [1, "#7CFFB2"],
              ],
            },
          },
          detail: {
            valueAnimation: true,
            formatter: "{value}",
          },
          data: [
            {
              value: 33.3,
              name: "可用率",
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>
