<template>
  <div class="AMChild  Mainright">
    <el-menu
      :default-active="activepath"
      router
      :unique-opened="true"
      class="lelmenu"
      @select="handleSelect"
    >
      <menutree :data="menus"></menutree>
    </el-menu>
  </div>
</template>
<script>
import menutree from "../Asidemodule/menutree";
import conmheader from "@/js/conmheader";

export default {
  name: "AMChild",
  components: {
    menutree: menutree
  },
  data() {
    return {
      collapsed: false,
      allmenu: [],
      auth: conmheader.isAuthenticated(),
      breadcrumbListData: [],
      indexBreadcrumbs: [],
      activepath: "1-1",
      menus: [
        {
          id: "1",
          name: "Aside首页",
          icon: "el-icon-burger",
          child: [
            {
              id: "1-1",
              name: "首页",
              icon: "el-icon-right",
              path: "/hello"
            }
          ]
        },
        {
          id: "2",
          name: "功能一",
          icon: "el-icon-tableware",
          child: [
            {
              id: "2-1",
              name: "导出图片",
              icon: "el-icon-right",
              path: "/derive"
            },
            {
              id: "2-2",
              name: "calendar日历",
              icon: "el-icon-right",
              path: "/calends"
            },
            {
              id: "2-3",
              name: "日期选择(接收)",
              icon: "el-icon-right",
              path: "/routers/Round"
            },
            {
              id: "2-6",
              name: "滚动加载(发送)",
              icon: "el-icon-right",
              path: "/com/Roll"
            },
            {
              id: "2-7",
              name: "props方҉法҉",
              icon: "el-icon-right",
              path: "/routers/prop"
            },
            {
              id: "2-4",
              name: "echarts图表",
              icon: "el-icon-right",
              path: "/echarts"
            },
            {
              id: "2-5",
              name: "echarts图例",
              icon: "el-icon-right",
              path: "/com/echarts"
            },
            {
              id: "2-8",
              name: "滚动效果",
              icon: "el-icon-right",
              path: "/fistone/roll"
            },
            {
              id: "2-9",
              name: "hover效果",
              icon: "el-icon-right",
              path: "/fistone/hover"
            },
            {
              id: "2-10",
              name: "vuex方法",
              icon: "el-icon-right",
              path: "/fistone/vuextext"
            }
          ]
        },
        {
          id: "3",
          name: "功能二",
          icon: "el-icon-sugar",
          child: [
            {
              id: "3-1",
              name: "下拉框处理",
              icon: "el-icon-right",
              path: "/Xialakuang"
            },
            {
              id: "3-2",
              name: "Top切换",
              icon: "el-icon-right",
              path: "/wendang"
            },
            {
              id: "3-3",
              name: "知识点记录",
              icon: "el-icon-right",
              path: "/routers/Text"
            },
            {
              id: "3-4",
              name: "跑马灯切换",
              icon: "el-icon-right",
              path: "/routers/qie"
            },
            {
              id: "3-5",
              name: "视频播放",
              icon: "el-icon-right",
              path: "/routers/videpplay"
            },{
              id: "3-6",
              name: "$on()接收",
              icon: "el-icon-right",
              path: "/routers/Child"
            },{
              id: "3-7",
              name: "$emit()发送",
              icon: "el-icon-right",
              path: "/routers/MaxChild"
            },{
              id:"3-8",
              name:'ANTV画布',
              icon:'el-icon-right',
              path:"/two/antv"
            }
          ]
        },
        {
          id: "4",
          name: "Element",
          icon: "el-icon-picture-outline-round",
          child: [
            {
              id: "4-1",
              name: "el-input输入框",
              icon: "el-icon-right",
              path: "/element/input"
            },
            {
              id: "4-2",
              name: "el-checkbox复选框",
              icon: "el-icon-right",
              path: "/element/checkbox"
            },
            {
              id: "4-3",
              name: "el-table表格",
              icon: "el-icon-right",
              path: "/element/eleTable"
            },
            {
              id: "4-4",
              name: "el-dialog弹出框",
              icon: "el-icon-right",
              path: "/element/Dialog"
            },
            {
              id: "4-5",
              name: "Breadcrumb面包屑",
              icon: "el-icon-right",
              path: "/element/Breadcrumb"
            },
            {
              id: "4-6",
              name: "Upload上传",
              icon: "el-icon-right",
              path: "/element/eleupload"
            },
            {
              id: "4-7",
              name: "select下拉框",
              icon: "el-icon-right",
              path: "/element/eleSelect"
            },{
              id:'4-8',
              name:'steps步骤',
              icon:'el-icon-right',
              path:'/element/eleSteps'
            }
          ]
        },
        {
          id: "5",
          name: "图片预览",
          icon: "el-icon-dessert",
          path: "/routers/plain"
        }
      ]
    };
  },
  methods: {
    initMenu() {
      const menudata = this.menus;
      conmheader.setlistMenu(menudata);
      //   this.$root.Bus.$emit("menuList", menudata);
    },

    handleSelect(index, indexPath) {
      this.indexBreadcrumbs = indexPath; // indexPath为一个数组，里面包含选中的菜单，和菜单的index标识
      sessionStorage.setItem("keylist", index); //存储
    },
    initfirst() {
      var data = sessionStorage.getItem("keylist"); //取出
      this.activepath = data;
    }
  },
  created() {
    console.log("created优先级高");
    this.initMenu();
    this.initfirst();
  },
  mounted() {
    console.log("mounted优先级低");
  },
  watch: {
    fullHeight(val) {
      if (!this.timer) {
        this.fullHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  }
};
</script>

<style>
.AMChild {
  background: #e9eef3;
}
</style>