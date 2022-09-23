<template>
  <div class="pageFullScreen">
    <!-- 灰色的头部 -->
    <div>左边</div>
    <div>
      <el-dropdown trigger="click" @command="sumtype">
        <img class="whclick" :src="urling" alt="" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">退出</el-dropdown-item>
          <el-dropdown-item command="2">个人中心</el-dropdown-item>
          <el-dropdown-item command="3">修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "pageFullScreen",
  components: {},
  data() {
    return {
      urling: require("../assets/logo1.png")
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(30, key, keyPath);
    },
    sumtype(command) {
      if (command === "1") {
        window.sessionStorage.removeItem("key-token");
        window.sessionStorage.removeItem("keylist");
        this.$router.push({ path: "/Login" });
      }
    }
  }
};
</script>

<style scoped>
.el-menu-demo {
  background-color: #d3dce6;
}
.pageFullScreen {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.whclick {
  width: 45px;
  height: 45px;
  margin-top: 5px;
  line-height: 45px;
  outline: none;
  border: 1px solid gray;
  border-radius: 50%;
}
</style>