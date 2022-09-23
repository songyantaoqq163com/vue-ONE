<template>
  <div class="Tag">
    <el-scrollbar style="margin-right: 6px">
           
      <div class="left">
        <el-tag
          v-for="tag in tagsList"
          :key="tag.title"
          :closable="!tag.hideclose"
          :type="isActive(tag)"
          @close="handleCloseTag(tag)"
        > 
          <router-link :to="tag.path" class="tag-title">{{ tag.title}}</router-link>
        </el-tag>
      </div>
    </el-scrollbar>
    <!-- 标签选项 -->
    <el-dropdown @command="handleCloseBtn" class="_dropdown">
      <el-button type="primary" size="small">
        标签选项
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="closeOther">关闭其它</el-dropdown-item>
        <el-dropdown-item command="closeAll">关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  name: "Tag",
  components: {},
  data() {
    return {
      tagsList: [],
    };
  },
  created(){
    this.tagsList=[];
      var data = sessionStorage.getItem("keytag"); //取出
      var Alist={
        title:data,
        path:'/1',
        name:'/1'
      }
      this.tagsList.push(Alist)
  },
  props: ["levelListdata"],
  methods: {
    handleCloseBtn(command) {
      if (command == "closeOther") { //   关闭其他
        var activeTag = this.tagsList.find((item) => {
          return item.path == this.$route.fullPath;
        }); //查找第一个满足的 //获取满足条件的
        var noCloseTags = this.getNoCloseTabs();
        if (
          noCloseTags.some((item) => {
            return item.path == activeTag.path && item.title == activeTag.title;
          }) == false
        ) {
          noCloseTags = noCloseTags.concat(activeTag); //不包含
        }
        this.tagsList = noCloseTags;
      } else if (command == "closeAll") { //关闭所有,保留没有删除的标签
        this.tagsList = this.getNoCloseTabs();
        this.$router.push({path: "/hello"});
      }
    },
    //没有删除的标签
    getNoCloseTabs() {
      var noCloseList = this.tagsList.filter((item) => {
        return item.hideclose == true;
      });
      return noCloseList;
    },

    // 获取到对应的菜单
    setTags(route) {
      const isExsit = this.tagsList.some((item) => {
        return item.path === route.fullPath;
      });
      if (isExsit == false) {
        this.tagsList.push({
          title: this.levelListdata[1].name, //获取标签名
          name: route.name, //路由里的name对应vue页的name,标签列表里的name可以做vue页面缓存
          path: route.fullPath, //路由
          hideclose: route.meta.hideclose ? route.meta.hideclose : false, //是否隐藏关闭
        });
      }

      var alist=this.tagsList[this.tagsList.length-1].title
      sessionStorage.setItem("keytag", alist); //存储
    },
    // 按钮的状态
    isActive(tag) {
      if (tag.path == this.$route.fullPath) {
        return "";
      } else {
        return "info";
      }
    },
    // 删除标签
    handleCloseTag(tag) {
      this.tagsList.splice(this.tagsList.indexOf(tag), 1); //删除tagslist数组中的tag
      if (this.tagsList.length > 0) {
        this.$router.push(this.tagsList[this.tagsList.length - 1].path);
      } else {
        this.$router.push({ path: "/hello" }); //没有标签的时候返回到地址
      }
    },
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    },
  },
};
</script>

<style lang="scss">
.Tag {
  // border: 1px solid green;
  flex: 0 0 30px;
  display: flex;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-between;
  .left {
    display: flex;
    height: 30px;
    align-items: center;
    .el-tag {
      margin-left: 6px;
      .tag-title {
        color: black;
        padding: 8px 2px;
        text-decoration: none;
      }
    }
  }
  ._dropdown {
    height: 40px;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) -3px 0px 15px 3px;
    padding: 0 5px;
  }
}
</style>