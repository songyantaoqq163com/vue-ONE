<template>
  <div class="Breadcrumb">
    <div>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div></el-col
        >
      </el-row>
      <el-divider content-position="left">path实例</el-divider>
    </div>
    <div>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="12">
          <el-menu
            default-active="1-1-1"
            :unique-opened="true"
            router
            active-text-color="#ffd04b"
            @select="handleSelect">
            <menutree :data="menus"></menutree>
          </el-menu>
        </el-col>
        <el-col :span="12">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="o in breadcrumbListData" :key="o.id"
              >{{ o.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-divider content-position="left">tree菜单</el-divider>
      <el-row :gutter="20">
        <el-col :span="10" :offset="1">
          <el-tree
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </el-col>
      </el-row>
     </div>
  </div>
</template>
<script>
import menutree from "./menutreeone";
export default {
  name: "Breadcrumb",
  components: {
    menutree
  },
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      activepath: "/element/Breadcrumb?Name#2",
      activepathnumber:'3',
      levelList: null,
      indexBreadcrumbs: [],
      breadcrumbListData: [],
      menus: [
        {
          index: "1",
          name: "三级",
          icon: "el-icon-shopping-bag-2",
          path: "#2",
          child: [
            {
              index: "1-1",
              name: "二级菜单",
              icon: "el-icon-shopping-bag-2",
              path: "/element/Breadcrumb?Name#11",
              child: [
                {
                  index: "1-1-1",
                  icon: "el-icon-shopping-bag-2",
                  name: "三级菜单",
                  path: "#1"
                }
              ]
            }
          ]
        },
        {
          index: "2",
          name: "二级",
          icon: "el-icon-s-custom",
          path: "#3",
          child: [
            {
              index: "2-1",
              name: "项目一",
              path: "/element/Breadcrumb?Named#6"
            }
          ]
        },
        {
          index: "3",
          name: "一级",
          icon: "el-icon-lock",
          path: "#4"
        }
      ]
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log('tree',data);
    },
    handChange() {
      // this.$emit('hand-change', this.breadcrumbList)
    },
    handleSelect(index, indexPath) {
      console.log(149,index,indexPath)
      this.indexBreadcrumbs = indexPath;
      //存储到sessionStorage中，
      sessionStorage.setItem("nav", index);
    },
    session() {
      // 取出session内的nav
      console.log(139, this.activepath);
      var data = sessionStorage.getItem("nav");
      this.activepath = data;
      console.log(142, this.activepath);
    },
    breadcrumbList() {
      let breadcrumbs = [];
      let menuList = this.menus;
      this.indexBreadcrumbs.map(item => {
        for (let i = 0; i < menuList.length; i++) {
          if (item === menuList[i].path) {
            breadcrumbs.push(menuList[i]);
            if (menuList[i].child) {
              menuList = menuList[i].child;
            }
            break;
          }
        }
      });
      this.breadcrumbListData = breadcrumbs; 
      console.log("170breadcrumb.vue",this.breadcrumbListData)// 返回的一个数组，里面只包含选中的菜单
    },
    timeone() {
      setTimeout(() => {
        this.breadcrumbList();
      }, 100);
    }
  },
  watch: {
    $route() {
      this.breadcrumbList();
    }
  },
  created() {
    // this.session();
    this.timeone();
  },
  computed: {
    defaultActive() {
      // console.log(this.$route.path)
      if (this.$route.path == "/index") {
        return "/home";
      }
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.menutree {
  height: 300px;
  overflow: overlay;
}
</style>