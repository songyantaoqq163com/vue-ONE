<template>
  <div class="asideMain">
    <el-row id="test" class="Mainleft">
        <Multipane class="vertical-panes">
      <el-col :span="three" ref="mainMenu" :style="{ minWidth: '180px',  maxWidth: '500px', backgroundColor: '#fff'}">
        <el-scrollbar>
          <div id="menu">
            <AMChild></AMChild>
          </div>
        </el-scrollbar>
      </el-col>
      <multipane-resizer></multipane-resizer>
      <el-col :span="span21" class="Mainright">
          <Breadcrumb :levelListdata="levelList"></Breadcrumb>
        <el-scrollbar>
          <div class="routerview">
            <router-view />
          </div>
        </el-scrollbar>
      </el-col>
        </Multipane>
    </el-row>
  </div>
</template>
<script>
import {Multipane, MultipaneResizer} from 'vue-multipane';
import Breadcrumb from "./Breadcrumb.vue"
import AMChild from "./AMChild";
import conmheader from "@/js/conmheader";
export default {
  name: "asideMain",
  components: {
    Breadcrumb,
    AMChild,
    Multipane,
    MultipaneResizer
  },
  data() {
    return {
      three: 3,
      span21: 21,
      levelList: null
    };
  },
  created() {
    this.initLevel();
    this.initName();
  },
  methods: {
    initName() {
      if (this.levelList.length !== 0) {
        this.listmenu = this.levelList[this.levelList.length - 1].name;
      }
    },
    initLevel(p) {
      const path = p || this.$route.fullPath;
      let level = [];
      const menuone = conmheader.findMenuPath(path, null, level);
      console.log("adiseMain.js", menuone);
      this.levelList = level.reverse();
      this.initName();
    }
  },
  watch: {
    $route(to) {
      this.initLevel(to.fullPath);
    }
  }
};
</script>

<style>
.login-bg{
   width: 100%;
    height: 100%;
    background: #3E3E3E;
}
.Mainright {
  height: calc(100vh - 120px);
  overflow-y: auto;
  background: #fff;
}
#breadcrumb {
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  box-shadow:0 -12px 12px 12px #409eff; 
}
.routerview{
  margin: 15px;
  padding: 15px;
  height: calc(100vh - 210px);
      overflow-y: auto;
  box-shadow:0 0 20px 5px #d3dce6; 
}


.vertical-panes {
        width: 100%;
        height: calc(100vh - 210px);
        /* border: 1px solid red; */
    }

    .vertical-panes > .pane {
        overflow: hidden;
    }
    .layout-v > .multipane-resizer {
        margin-left: -6px;
    }

</style>