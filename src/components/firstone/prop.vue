<template>
    <div class="pageFullScreen">
        <div>引҉入pound页҉面҉：</div>
        <el-button @click="but">显҉示҉时҉间҉</el-button>
        <Round :isShow="true" ref="effect" :myData="queryVo"></Round>
    </div>
</template>
<script>
import Round from '@/components/firstone/Round'
import moment from 'moment'
export default {
  name: 'pageFullScreen',
  components: {
    Round
  },
  data () {
    return {
      queryVo: {
        lineNo: 1,
        classId: 1,
        subLineId: 0
      },
      begin: null,
      end: null,
      beginTime: null
    }
  },
  methods: {
    but () {
      this.beginTime = moment().toDate()
      // this.beginTime=moment(this.begin).format('YYYY-MM-DD HH:mm.ss.SSS')
      this.begin = moment()
        .add('days')
        .hours(8)
        .minute(30)
        .seconds(0)
        .millisecond(0)
        .toDate(),
      this.end = moment()
        .endOf('day')
        .hours(20)
        .minute(30)
        .seconds(0)
        .millisecond(0)
        .toDate(),
      this.queryVo = {
        ...this.queryVo,
        beginTime: this.beginTime,
        begin: this.begin,
        end: this.end
      }
      this.$refs.effect.query(this.queryVo)
    }
  }
}
</script>

<style>
</style>
