<template>
  <div class="pageFullScreen">
    <p>
      <router-link to="/hello">返回</router-link>
    </p>
    <el-button type="success" plain @click="nav">:class显示</el-button>
    <div v-show="flag" v-bind:class="{ active: flag }"></div>
    <el-button @click="but">添加class</el-button>
    <el-button @click="bos">去掉class</el-button>
    <p class="color" :class="{ setClass: p1 }">文字内容</p>
    <p :class="{ red1: active }">利用class改变颜色</p>
    <img src="@/img/logo.png" alt />
    <div class="block">
      <span class="demonstration" :style="{color:color1}">改变字体颜色</span>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
    <div class="red">
      <p>map方法</p>
      var a=[1,2,3,4];
      var alist=a.map(item=>{ return item*})
      console.log([2,4,6,8])
    </div>
  </div>
</template>
<script>
export default {
  name: "plain1",
  components: {},
  data() {
    return {
      flag: false,
      p1: false,
      active: true,
      queryVo: {},
      color1:null
    };
  },
  methods: {
    nav() {
      this.flag = !this.flag;
    },
    but() {
      this.p1 = true;
      // this.queryVo.beginTime = "2020-11-18 00:00:00.000";
      // this.queryVo.endTime = "2020-11-20 00:00:00.000";
      // this.queryVo.pageNo = 1;
      // this.queryVo.pageSize = 10;
      // this.queryVo.stepName = "CVDIN";
      // this.queryVo.subLineId = 0;
      // this.$http
      //   .post("data-tracer-api/1/halm/carrier", this.queryVo)
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     console.log(error.response);
      //   });
    },
    bos() {
      this.p1 = false;
      // $.ajax({
      //   type:'GET',
      //   url:'test.php',
      //   success:function(data){
      //     console.log(data)
      //   },
      //   beforeSend:function(xhr){
      //     console.log(xhr)
      //   }
      // })
    },
    blockcolor(){
      this.color1
    }
  }
};
</script>

<style scoped>
.active {
  width: 100px;
  height: 100px;
  background: red;
}
.setClass {
  border: 2px solid red;
  color: yellow;
}
.red1 {
  color: rebeccapurple;
}
.demonstration{
  position: relative;
  top: -12px;
}
</style>