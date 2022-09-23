<template>
  <div class="Child">
    <p>$on()接收</p>
    <div class="red">
      <span> $emit发送过来的数据=>：{{ menufalse }} </span>
    </div>
  </div>
</template>
<script>
import Bus from '../../js/busVue'
export default {
  name: 'Child',
  components: {},
  data () {
    return {
      menufalse: true
    }
  },
  props: {
    msg: String
  },
  mounted () {
    Bus.$on('elswitch', val => {
      console.log(28, val)
      this.menufalse = val
    })
    // this.valuetwo();
  },
  methods: {
    // valuetwo() {
    //   Bus.$on("value2", val => {
    //     this.menuvalue2 = val;
    //     this.menuvalue2='123'
    //   });
    // }
  }
}
</script>

<style>
#container {
  color: red;
}
</style>
