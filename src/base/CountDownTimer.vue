<template>
  <div class="component">
    ({{wordcount}} Words/{{wordcount_all}} ALL) During {{seconds}}Seconds | Timer:{{num}}/{{period}} Seconds
  </div>
</template>

<script>
import {getWordCount, getWordCountAllTime} from "@/api/AnalyzeService";

export default {
  data () {
    return {
      timer: null, //定时器名称
      wordcount:0,
      wordcount_all:0,
      num:0,
      seconds:3600,
      period:10,
    }
  },
  computed: {

  },
  //打开弹框开始计时
  mounted () {
    this.setNum()
  },
  methods: {
    async getWordCount(seconds) {
      let {data} = await getWordCount(seconds);
      this.wordcount = data.data;
    },
    async getWordCountAllTime() {
      let {data} = await getWordCountAllTime();
      this.wordcount_all = data.data;
    },
    /**
     * @description: 设置定时器
     * @param {type}
     * @return:
     */
    setNum() {
      this.timer = setInterval(async () => {
        if (this.num > 0) {
          this.num--
        } else {
          this.num = this.period;
          await this.getWordCount(this.seconds);
          await this.getWordCountAllTime();
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
  }
}
</script>

<style lang="scss" scoped>

</style>