<template>
  <div class="calendar">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="50" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <div class="demo-basic--circle">
            <el-avatar> user </el-avatar>
            <!-- <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div> -->
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg Page" justify="center">
      <el-col  :span="18">
        <el-calendar v-model="value" class="val"></el-calendar>
      </el-col>
    </el-row>
    <el-row>
      <el-button @click="ctore">localStorage储存</el-button>
      <el-button @click="gain">localStorage获取</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'calendar',
  components: {},
  data () {
    return {
      value: new Date(),
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      // squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      // sizeList: ["large", "medium", "small"]
    }
  },
  methods: {
    ctore () {
      localStorage.setItem('calsendar', JSON.stringify('储存内的key值1234567890'))
    },
    gain () {
      console.log(JSON.parse(localStorage.getItem('calsendar')))
      // localStorage.clear()
      // 删除某个
      // window.localStorage.removeItem('maxwelltoken')
    }
  }
}
</script>

<style scoped>
.val {
  width: 800px;
  height: 700px;
  margin: 0 auto;
}
/* .el-calendar__header{
    height: 35px;
} */
</style>
