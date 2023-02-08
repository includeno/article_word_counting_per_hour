<template>
  <div>
    <Header style="margin-bottom:20px;"></Header>
    <CountDownTimer></CountDownTimer>
  </div>

</template>

<script>
import Header from "@/base/Header";
import CountDownTimer from "@/base/CountDownTimer";
import {getWordCount} from "@/api/AnalyzeService";

export default {
  name: 'ArticleAdd',
  components:{
    Header,
    CountDownTimer,
  },
  beforeCreate() {
  },
  data () {
    return {
      timer: null, //定时器名称
      wordcount:0,
      num:10,
      seconds:3600,
      period:10,
    }
  },
  mounted() {

  },
  methods:{
    async getWordCount(seconds) {
      let {data} = await getWordCount(seconds);
      this.wordcount = data.data;
    },
    /**
     * @description: 设置定时器
     * @param {type}
     * @return:
     */
    setNum() {
      this.timer = setInterval(() => {
        if (this.num > 0) {
          this.num--
        } else {
          this.num = this.period;
          this.getWordCount(this.seconds);
        }
      }, 1000)
      //定时器中途关闭清除计数
      this.$once('hook:beforeDestroy', () => {
        this.clearIntervalTimer()
      })
    },
    clearIntervalTimer() {
      window.clearInterval(this.timer)
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
