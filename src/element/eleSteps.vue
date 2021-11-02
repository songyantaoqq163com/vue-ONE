<template>
  <div class="elesteps">
    <p>步骤</p>
    <el-steps
      :active="active"
      finish-status="success"
      simple
      style="margin-top: 20px"
    >
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <el-table :data="datalist" v-show="active == 1">
      <el-table-column prop="index" label="表1"></el-table-column>
    </el-table>
    <el-table :data="datalist" v-show="active == 2">
      <el-table-column prop="indexone" label="表2"></el-table-column>
    </el-table>
    <el-table :data="datalist" v-show="active == 3">
      <el-table-column prop="indextwo" label="表3"></el-table-column>
    </el-table>

    <el-button style="margin-top: 12px;" @click="alt">上一步</el-button>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>
<script>
export default {
  name: "elesteps",
  components: {},
  data() {
    return {
      active: 1,
      datalist: [
        {
          index: "表一",
          indexone: "表二",
          indextwo: "表三"
        }
      ]
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) {
        this.active = 3;
      }
    },
    alt() {
      if (this.active-- < 2) this.active = 1;
    }
  }
};
</script>

<style>
</style>