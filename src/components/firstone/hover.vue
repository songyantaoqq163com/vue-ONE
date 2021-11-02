<template>
  <div class="hover">
    <p>clearInterval() 方法//此方法能够取消setInterval()方法设置的定时器。</p>
    <p>clearTimeout对应的是setTimeout，clearInterval对应的是setInterval，</p>
    <p style="border:1px solid red;" @mouseenter="enter" @mouseleave="leave">
      {{ message }}--{{mestext}}
    </p>
    <div>
        <ul id="mesviewssss" @mouseenter="enterone" @mouseleave="leaveone">
          <li v-for="item in 5" :key="item.index">
            {{ item }}--{{text}}
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hover',
  components: {},
  data () {
    return {
      message: '默认值',
      mestext:'鼠标',
      timer: null,
      text:'执行中'
    }
  },
  mounted () {
    this.timer = setInterval(this.scroll, 6000)
  },
  methods: {
    scroll () {
      this.$nextTick(() => {
        var container = this.$el.querySelector('#mesviewssss')
        container.style.cssText = 'transform:translate(0,0)'
        // container.style.cssText = `transition:opacity .3s;`;
        container.appendChild(container.children[0]) // 把第一个DOM添加到最后一个去
        // container.scrollTop = container.scrollHeight;
      })
    },
    enter () {
      this.message = '修改值'
      this.mestext="鼠标进入"
    },
    leave () {
      //  leave: function(e){
      this.message = '默认值111';
      this.mestext="鼠标出来"
    },
    enterone () {
      clearInterval(this.timer)
      this.timer = null
      this.text='进入停止切换'
    },
    leaveone () {
      this.timer = setInterval(this.scroll, 6000)
      this.text='出来继续切换'
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
    console.log('页面刷新，销毁实例')
  }
}
</script>

<style scoped>
.hover {
  border: 1px solid red;
}
ul {
  width: 300px;
  height: 100px;
  border: 1px solid chartreuse;
  text-align: center;
  overflow: hidden;
}
ul li {
  list-style-type: none;
  border: 1px solid blue;
  width: 250px;
  height: 50px;
  margin: 25px 0;
}
</style>
