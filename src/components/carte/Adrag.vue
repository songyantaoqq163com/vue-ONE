<template>
  <div class="Adrag">
    <p>拖拽，拉拽</p>
    <div id="hello-id">
      <div id="left-id"></div>
      <div id="resize1" class="resize-div" />
      <!-- <div id="middle-id"></div>
      <div id="resize2" class="resize-div" />
      <div id="right-id"></div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Adrag',
  components: {},
  data () {
    return {}
  },
  methods: {
    dragControllerDiv: function () {
      const box = document.getElementById('hello-id')
      const left = document.getElementById('left-id')
      const resize1 = document.getElementById('resize1')
      const middle = document.getElementById('middle-id')
      const resize2 = document.getElementById('resize2')
      const right = document.getElementById('right-id')
      // 左边拖拽区域添加mousedown事件
      resize1.onmousedown = function (e) {
        const initWindowWidth = box.clientWidth
        const initLeftWidth = left.clientWidth
        const initResize1Width = resize1.clientWidth
        const initMiddleWidth = middle.clientWidth
        const initResize2Width = resize2.clientWidth
        const initRightWidth = right.clientWidth
        const mouseStartDistanceToWindowLeft = e.clientX
        // 左边拖拽区域添加mousemove事件，并不断计算各区域宽度
        document.onmousemove = function (e) {
          const mouseFinalDistanceToWindowLeft = e.clientX
          // 获取鼠标移动的距离
          const mouseMovedDistance =
            mouseFinalDistanceToWindowLeft - mouseStartDistanceToWindowLeft
          // 各种计算距离和宽度
          resize1.style.left = initLeftWidth + mouseMovedDistance
          left.style.width = initLeftWidth + mouseMovedDistance + 'px'
          middle.style.left =
            initMiddleWidth + mouseMovedDistance + initResize1Width + 'px'
          middle.style.width =
            initWindowWidth -
            initRightWidth -
            initLeftWidth -
            initResize1Width -
            initResize2Width -
            mouseMovedDistance +
            'px'
        }
        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouseup = null
          resize1.releaseCapture && resize1.releaseCapture()
        }
        resize1.setCapture && resize1.setCapture()
        return false
      }
      // 右边拖拽区域添加mousedown事件
      resize2.onmousedown = function (e) {
        const initWindowWidth = box.clientWidth
        const initLeftWidth = left.clientWidth
        const initResize1Width = resize1.clientWidth
        const initMiddleWidth = middle.clientWidth
        const initResize2Width = resize2.clientWidth
        const mouseStartDistanceToWindowLeft = e.clientX
        // 右边拖拽区域添加mousemove事件，并不断计算各区域宽度
        document.onmousemove = function (e) {
          const mouseFinalDistanceToWindowLeft = e.clientX
          // 获取鼠标移动的距离
          const mouseMovedDistance =
            mouseFinalDistanceToWindowLeft - mouseStartDistanceToWindowLeft
          // 各种计算记录和宽度
          resize2.style.left =
            initLeftWidth +
            initResize1Width +
            initMiddleWidth +
            mouseMovedDistance
          middle.style.width = initMiddleWidth + mouseMovedDistance + 'px'
          right.style.left =
            initLeftWidth +
            initResize1Width +
            initMiddleWidth +
            initResize2Width +
            mouseMovedDistance +
            'px'
          right.style.width =
            initWindowWidth -
            initLeftWidth -
            initResize1Width -
            initMiddleWidth -
            initResize2Width -
            mouseMovedDistance +
            'px'
        }
        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouseup = null
          resize2.releaseCapture && resize2.releaseCapture()
        }
        resize2.setCapture && resize2.setCapture()
        return false
      }
    }
  },
  mounted () {
    this.dragControllerDiv()
  }
}
</script>

<style scoped>
#hello-id {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
}
#hello-id div {
  border: 1px solid red;
}

.resize-div {
  position: relative;
  width: 5px;
  height: 100px;
  cursor: w-resize;
  float: left;
  background-color: #eeeeee;
}

#left-id {
  height: 100px;
  width: 20%;
}

#middle-id {
  height: 100px;
  width: 25%;
}

#right-id {
  height: 100px;
  width: 55%;
}
</style>
