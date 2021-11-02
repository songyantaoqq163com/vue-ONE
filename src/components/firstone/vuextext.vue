<template>
  <div class="menutree">
    <p>vuex文本</p>
    <div>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="600"
        show-word-limit
      >
      </el-input>
      列子：使用vuex=》state
      <p>获取state内容：==={{ this.$store.state.name }}</p>
      <el-divider content-position="left">mutaion</el-divider>
      <p>
        <el-button @click="setNameDefault">不带参数传递</el-button>
        <el-input
          v-model="name2"
          style="width:150px;"
          placeholder="请输入带参数"
        ></el-input>
        <button @click="setName">带参数</button>
        {{ this.$store.state }}
      </p>
    </div>
    <el-table border :data="datalist" :header-cell-style="headClass">
      <el-table-column type="index" label="序号" width="50px"></el-table-column>
      <el-table-column prop="one" label="属性" width="100px"></el-table-column>
      <el-table-column prop="two" label="作用"></el-table-column>
    </el-table>
    <div ref="aa">
        <p>aa部分</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "menutree",
  components: {},
  data() {
    return {
      name2: "",
      datalist: [
        {
          one: "state",
          two: "Vuex的基本数据，用来储存变量"
        },{
            one:'geeter',
            two:'（计算属性）从基本数据state派生的数据'
        },{
            one:'mutation',
            two:'(同步操作) 提交更行数据的方法'
        },{
            one:'action',
            two:'(异步操作)-action提交的是mutation而不是直接变更状态'
        },{
            one:'modules',
            two:'模块化vuex'
        }
      ],
      textarea:
        " 1.安装npm install vuex --save 2.vuex.store状态， 3.mutaion更改store状态的唯一方法"
    };
  },
  created(){
      let that=this;
      console.log("vuextext.vue")
      that.$nextTick(function(){
          this.$refs.aa.innerHTML="更改了内容隐藏p标签的内容"
      })
  },
  methods: {
    setNameDefault() {
      this.$store.commit("budaicanshu"); //同步操作
      //   this.$store.dipatch('budaicanshu')//异步操作
    },
    setName() {
      this.$store.commit("daicanshu", {
        name: this.name2
      });
      //提交对象
      this.$store.commit({
        type: "daicanshu",
        name: this.name2
      });
    },
    headClass() {
      return "text-align: center;background:#eef1f6;";
    }
  },
  mounted() {
    console.log("vuextext.vue", this.$store);
  }
};
</script>

<style>
</style>