<template>
  <div>
    <!-- <el-button @click="fan">返回首页</el-button> -->
    <el-button @click="hreftwo">去父组件的页面</el-button>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <P>下拉框1</P>
          <el-form>
            <el-form-item>
              <el-select v-model="value" placeholder="请选择" @change="Front">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <br />
              {{ value }}-{{ label }}
            </el-form-item>
          </el-form>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
          <P>下拉框2</P>
          <el-select v-model="value1" placeholder="请选择" @change="link">
            <el-option
              v-for="item in cities"
              :key="item.value1"
              :label="item.label"
              :value="item.value1"
            >
              <span style="float: left;">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                item.value1
              }}</span>
            </el-option>
          </el-select>
          <br />
          {{ value1 }}-{{ label1 }}
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <p>下拉框3</p>
          <el-select
            v-model="value2"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签"
            @change="link2"
          >
            <el-option
              v-for="item in optionss"
              :key="item.value2"
              :label="item.label"
              :value="item.value2"
            ></el-option>
          </el-select>
          <br />
          {{ value2 }}-{{ label2 }}
        </div></el-col
      >
    </el-row>
    <el-row>
      <div class="tag" v-if="showTags">
        <ul>
          <li
            class="tags-li"
            v-for="(item, index) in list"
            :class="{ active: isActive(item.path) }"
            :key="index"
          >
            <!--点击每个小按钮跳转相应路由-->
            <router-link :to="item.path" class="tags-li-title">
              {{ item.title }}
            </router-link>
            <span class="tags-li-icon" @click="closeTags(index)"
              ><i class="el-icon-close"></i
            ></span>
          </li>
        </ul>
        <div class="handleTags">
          <el-dropdown @command="handleTags" size="mini" type="primary">
            <el-button type="primary">
              标签选项<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="all">关闭所有</el-dropdown-item>
              <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-row>
    <el-row :span="24">
      <el-table :data="tabeldata" border>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="id" label='下拉框属性'></el-table-column>
        <el-table-column prop="text" label='下拉框用法'></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
import elementUi from "element-ui";

export default {
  name: "Xialakuang",
  components: {
    elementUi,
  },
  data() {
    return {
      activeMenu: "",
      indexBreadcrumbs: [],
      breadcrumbListData: [],
      activepath: "1",
      tableHeight: null,
      list: [],
      tabeldata: [
        {
          id: "clearble",
          text: "el-select标签内添加，可清空下拉菜单"
        },{
          id:'placeholder',
          text:'el-select标签内添加，可默认文字‘请选择'
        }
      ],
      menu_data: [
        {
          index: "1",
          name: "工艺",
          icon: "el-icon-s-data",
          children: [
            {
              index: "1-1",
              name: "效率汇总",
              icon: "el-icon-c-scale-to-original",
              path: "/newionProduction"
            },
            {
              index: "1-2",
              name: "EL统计",
              icon: "el-icon-folder-opened",
              path: "/newTracerTesting?testing=el"
            },
            {
              index: "1-3",
              name: "SPC",
              icon: "el-icon-sort",
              children: [
                {
                  index: "1-3-1",
                  name: "基本质量参数SPC",
                  icon: "el-icon-share",
                  path: "/1-3-1"
                },
                {
                  index: "1-3-2",
                  name: "相关性统计SPC",
                  icon: "el-icon-share",
                  path: "/1-3-2"
                }
              ]
            }
          ]
        },
        {
          index: "2",
          name: "设备",
          icon: "el-icon-s-platform",
          path: "/2"
        }
      ],
      menus: [
        {
          id: "1",
          name: "门户管理",
          icon: "menhuguanli",
          path: "#2",
          child: [
            {
              id: "1-1",
              name: "轮播图",
              path: "/backstage/protaManage/turns"
            },
            {
              id: "1-2",
              name: "基础数据",
              path: "/backstage/protaManage/basis"
            },
            {
              id: "1-3",
              name: "分类管理",
              path: "/backstage/protaManage/classify"
            },
            {
              id: "1-4",
              name: "内容发布",
              path: "/backstage/protaManage/content"
            }
          ]
        },
        {
          id: "2",
          name: "我的云盘",
          icon: "yunpan",
          path: "/backstage/yunManage"
        },
        {
          id: "3",
          name: "管理菜单",
          icon: "shezhi",
          path: "/backstage/menusManage"
        },
        {
          id: "4",
          name: "编辑板块",
          icon: "fabuzhongxin",
          path: "/backstage/editPlate"
        }
      ],
      sonData: {
        flag: false,
        // message:'',
        name: "一条给父组件的消息"
      },
      options: [
        {
          value: "Clean",
          label: "清洗"
        },
        {
          value: "CVD",
          label: "CVD"
        },
        {
          value: "PVD",
          label: "PVD"
        },
        {
          value: "PRINT",
          label: "丝印"
        }
      ],
      cities: [
        {
          value1: "Beijing",
          label: "北京"
        },
        {
          value1: "Shanghai",
          label: "上海"
        },
        {
          value1: "Nanjing",
          label: "南京"
        },
        {
          value1: "Chengdu",
          label: "成都"
        },
        {
          value1: "Shenzhen",
          label: "深圳"
        },
        {
          value1: "Guangzhou",
          label: "广州"
        }
      ],
      optionss: [
        {
          value2: "HTML1",
          label: "HTML"
        },
        {
          value2: "CSS1",
          label: "CSS"
        },
        {
          value2: "JavaScript1",
          label: "JavaScript"
        }
      ],
      value2: [],
      value1: "",
      label: "",
      label1: "",
      label2: [],
      value: "Clean",
      FrontValue: ""
    };
  },
  methods: {
    handChange() {
      this.$emit("hand-change", this.breadcrumbList);
    },
    handleSelect(index, indexPath) {
      this.indexBreadcrumbs = indexPath; // indexPath为一个数组，里面包含选中的菜单，和菜单的index标识
    },
    //下拉框2
    link(value1) {
      // console.log("111", value1);
      let obj = {};
      obj = this.cities.find(item => {
        //options上面遍历额数据源
        return item.value1 === value1; //key：item.value
      });
      console.log(obj, obj.label, obj.value1);
      this.label1 = obj.label;
    },
    //x下拉框1
    Front(value) {
      this.FrontValue = value;
      let obj = {};
      obj = this.options.find(item => {
        //options上面遍历额数据源
        return item.value === value; //key：item.value
      });
      this.label = obj.label;
      console.log(obj);
    },
    //下拉框3
    link2(value2) {
      //  let obj = {};
      //  console.log(this.optionss)
      // obj = this.optionss.find(item => {
      //   console.log(item.label)
      //   return label2 ===item.label; //key：item.value
      // });
      //      console.log(obj)

      for (var i = 0; i < this.optionss.length; i++) {
        let obj = [];
        obj.push(this.optionss[i]);
        this.label2 = this.optionss[i].label;
        console.log(this.optionss[i]);
      }
    },
    hreftwo() {
      this.$router.push({ path: "/routers/Round" });
    },
    // 选中状态  返回 true false
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 标签选项 关闭单个 关闭所有
    handleTags(command) {
      command === "all" ? this.closeAll() : this.closeOther();
    },
    // 点击关闭  单个 按钮
    closeTags(index) {
      const delItem = this.list.splice(index, 1)[0]; // 获取当前的
      const item = this.list[index] ? this.list[index] : this.list[index - 1]; // 获取到下一个
      if (item) {
        // 有下一个  跳到下一个
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        // 没有 去 home页面
        this.$router.push("/Home");
      }
    },
    // 点击关闭 所有
    closeAll() {
      this.list = [];
      this.$router.push("/Home");
    },
    // 点击关闭其他
    closeOther() {
      let currentList = this.list.filter(ele => {
        return ele.path === this.$route.fullPath;
      });
      this.list = currentList;
    },
    // 展示的数组
    setTages(newValue) {
      const isExist = this.list.some(item => {
        return item.path === newValue.fullPath;
      });

      if (!isExist) {
        if (this.list.length >= 8) {
          this.list.shift();
        }
        this.list.push({
          title: newValue.meta.title,
          path: newValue.path,
          name: newValue.matched[1].components.default.name
        });
      }
    }
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTages(newValue);
    }
  },
  created() {
    this.handChange();
  },
  computed: {
    showTags() {
      return this.list.length > 0;
    }
  },
  mounted() {
    setTimeout(() => {
      // this.tableHeight = document.body.clientHeight - 100;
      this.tableHeight = 150;
    }, 100);
  }
};
</script>

<style>
/* .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
} */
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>