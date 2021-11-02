<template>
  <div class="eleSelect">
    <p>动态添加下拉框</p>
    <el-form>
      <el-form-item label="端口ID" v-for="(it, index) in list" :key="index">
        <el-select
          v-model="oneId[index]"
          placeholder="请选择"
          style="margin-right: 10px"
        >
          <el-option
            v-for="item in opeIdlist"
            :label="item.eqptgId"
            :value="item.opeId"
            :key="item.id"
          ></el-option>
        </el-select>

        <el-button @click="addItem" type="primary">+</el-button>
        <el-button @click="removeItem(it, index)" type="danger">-</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "eleSelect",
  components: {},
  data() {
    return {
      oneId: [],
      opeIdlist: [],
      list: [{ oneId: "" }],
      datalist: [
        {
          eqptgId: "第一",
          opeId: "one"
        },
        {
          eqptgId: "第二",
          opeId: "two"
        },
        {
          eqptgId: "第三",
          opeId: "three"
        }
      ]
    };
  },
  methods: {
    addItem() {
      console.log("+++");
      this.list.push({ oneId: "" });
    },
    removeItem(it, index) {
      console.log("---", it, index, this.list, this.oneId);
      if (index != 0) {
        this.list.splice(index, 1);
      }
    }
  }
};
</script>

<style>
</style>