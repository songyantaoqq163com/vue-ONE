<template>
  <div class="Home">
    <el-header>
      <Header />
    </el-header>
    <el-main ref="elemain">
      <AsideMain/>
      <!-- <Aside /> -->
    </el-main>
    <el-footer>Footer</el-footer>
  </div>
</template>
<script>
import Header from '@/Aside/header'
import AsideMain from '@/Aside/asideMain'
// import Aside from "@/Aside/aside";
export default {
  name: 'Home',
  components: {
    // Aside,
    AsideMain,
    Header
  },
  data () {
    return {
    }
  },
  methods: {},
  created () {
  },
  mounted () {
    setTimeout(() => {
      // this.tableHeight = this.$el.offsetParent.firstChild.clientHeight - this.$refs.form.$el.clientHeight-5;
    }, 100)
  },
  watch: {
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* width:500px;
  height:800px;  */
  /* border: 1px solid #c0c4c4; */
  color: #2c3e50;
}
.el-header,
.el-footer {
  background-color: #d3dce6;
  color: red;
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-menu {
  background-color: #e9eef3;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: unset;
  height: calc(100vh - 120px);
}
.Home {
  height: 100vh;
}

body > .el-container {
  margin-bottom: 40px;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
}
</style>
