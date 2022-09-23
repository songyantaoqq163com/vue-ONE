<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
 created() {}

};
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.red{
  border:1px solid red;
   /* width: 500px;
  height: 400px; */
  margin:5px;
  /* float: left; */
  /* display: inline-block; */
}
.yellow{
  width: 100%;
  border:1px solid yellow;
}

.el-carousel__indicator--vertical .el-carousel__button{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: double;
}
.el-checkbox{
  margin-right: auto;
}
.el-transfer-panel__item .el-checkbox__input{
  position:absolute;
  top: 0;
  left: 20px;
}
.el-transfer-panel__item.el-checkbox .el-checkbox__label{
  padding-left:0px;
  line-height: 15px;
}

/* 滚动条 */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.3);
}
.el-submenu__title,.el-menu-item{
  text-align: left!important;
}
</style>
