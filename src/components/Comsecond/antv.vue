<template>
  <div class="pageFullScreen">
    <div class="about">
      <!-- <div id="container"></div> -->
    </div>
  </div>
</template>
<script>
// import G6 from '@antv/g6';
export default {
  name: "antv",
  components: {
    //   G6
  },
  data() {
    return {

    };
  },
  mounted() {
    // this.initG6()
  },
  methods: {
  initG6 () {
        const data = {
          nodes: [
            {
              id: '0',
              label: '零',
              cluster: 'a'
            },
            {
              id: '1',
              label: '一',
              cluster: 'a'
            },
            {
              id: '2',
              label: '二',
              cluster: 'a'
            },
            {
              id: '3',
              label: '三',
              cluster: 'a'
            },
            {
              id: '4',
              label: '四',
              cluster: 'a'
            },
            {
              id: '5',
              label: '五',
              cluster: 'a'
            },
            {
              id: '6',
              label: '六',
              cluster: 'a'
            },
            {
              id: '7',
              label: '七',
              cluster: 'a'
            },
            {
              id: '8',
              label: '八',
              cluster: 'a'
            },
            {
              id: '9',
              label: '九',
              cluster: 'a'
            },
            {
              id: '10',
              label: '一零',
              cluster: 'a'
            },
            {
              id: '11',
              label: '一一',
              cluster: 'a'
            },
            {
              id: '12',
              label: '一二',
              cluster: 'a'
            },
            {
              id: '13',
              label: '一三',
              cluster: 'b'
            }
          ],
          edges: [
            {
              source: '0',
              target: '1'
              // style: {
              //   fill: '#f00',
              //   stroke: '#ff8fcd',
              //   lineWidth: 1,
              //   endArrow: false,
              //   startArrow: true,
              //   cursor: '#ff8fcd'
              //   // ... 其他属性
              // }
            },
            {
              source: '0',
              target: '2',
              label: 'aa'
              // labelCfg: {
              //   style: {
              //     fill: 'red'
              //   }
              // }
            },
            {
              source: '0',
              target: '3',
              label: 'bb'
            },
            {
              source: '0',
              target: '4'
            },
            {
              source: '0',
              target: '5'
            },
            {
              source: '0',
              target: '7'
            },
            {
              source: '0',
              target: '8'
            },
            {
              source: '0',
              target: '9'
            },
            {
              source: '0',
              target: '10'
            },
            {
              source: '0',
              target: '11'
            },
            {
              source: '0',
              target: '13'
            },
            {
              source: '0',
              target: '14'
            },
            {
              source: '0',
              target: '15'
            },
            {
              source: '0',
              target: '16'
            },
            {
              source: '2',
              target: '3'
            },
            {
              source: '4',
              target: '5'
            }
          ]
        }
        // 初始化
        const width = document.getElementById('container').scrollWidth
        const height = document.getElementById('container').scrollHeight || 500
        const graph = new G6.Graph({
          container: 'container',
          width,
          height,
          // 这里在后面用到，是提示框信息，以及鹰眼的时候用的组件
          // plugins: [tooltip, minimap]
          modes: {
          // 拖动，缩放
            // default: ['drag-canvas', 'drag-node', 'zoom-canvas']
            default:['zoom-canvas']
          },
          layout: {
          // 拓扑图的类型
            type: 'fruchterman',
            gravity: 7,
            speed: 5
          },
          animate: true,
          defaultNode: {
            size: 30,
            style: {
              lineWidth: 2,
              stroke: '#5B8FF9',
              fill: '#C6E5FF'
            },
            // 圈内字体大小
            labelCfg: {
              style: {
                fontSize: 10
              }
            }
          },
          defaultEdge: {
            size: 1,
            color: '#e2e2e2',
            style: {
              endArrow: {
                path: 'M 0,0 L 8,4 L 8,-4 Z',
                fill: '#e2e2e2'
              }
            }
          }
        })
        graph.data(data)
        graph.render()
      }
  },
};
</script>

<style scoped>
.about{
    border:1px solid red;
    height:75vh;
    background:url('../../img/xyserive.png');
    background-size:88vw 78vh;
}
</style>