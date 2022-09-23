<template>
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right" id="breadcrumb">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="item in levelListdata" :key="item.path">
            {{ item.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    name:"breadcrumb",
    components:{},
    data() {
      return{}
      },
    props:['levelListdata']
}
</script>

<style>
</style>