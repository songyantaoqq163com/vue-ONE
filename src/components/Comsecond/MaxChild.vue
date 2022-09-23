<template>
  <div class="pageFullScreen">
    <p>$emit发送</p>
    <div class="red">
      <el-row :span="20" :offset="2">
        <el-col :span="20">
          <el-switch
            v-model="value1"
            active-text="开"
            inactive-text="关"
            @change="butt"
          >
          </el-switch>
          {{ value1 }}
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Bus from '../../js/busVue'
export default {
  name: 'MaxChild',
  components: {},
  data () {
    return {
      text: '父组件的值“1111”',
      value1: true
    }
  },
  methods: {
    dataChange (data) {
      this.msg = data
    },
    butt () {
      console.log('开关', this.value1)
      Bus.$emit('elswitch', this.value1)
    }
  },
  watch: {}
}
</script>

<style>
</style>
