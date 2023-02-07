<template>
  <div class="home">
    <Header style="margin-bottom:20px;"></Header>
    <Loading v-show="isLoading"></Loading>
    <div class="margin-basic">
      推荐数量：
      <a-input-number id="inputNumber" v-model="pageSize" :min="1" :max="30" @change="onPageSizeChange"/>
      (1-30)
      <a-button class="margin-basic">刷新</a-button>
    </div>
    <NewsList :news="news" v-show="!isLoading" class="margin-basic"></NewsList>
  </div>
</template>


<script>
import Loading from "@/base/Loading";
import Header from "@/base/Header";

import {getByPage} from "@/api/NewsService";
import NewsList from "@/components/news/NewsList";

export default {
  components: {
    NewsList,
    Loading,
    Header
  },
  data() {
    return {
      news: [],
      isLoading: true,
      pageSize: 10,
      current: 1,
    };
  },
  async mounted() {
    this.current = 1;
    this.pageSize = 10;
    this.getNewsByPage(this.current, this.pageSize);
  },
  methods: {
    async getNewsByPage(page, size) {
      this.isLoading = true;
      let resp = await getByPage(null, null, null, null, 1, page, size); // 会有等待时间
      console.log(resp);
      this.news = resp.data.data.records;
      console.log("this.news:");
      console.log(this.news);
      this.isLoading = false;
    },
    onPageSizeChange(value) {
      console.log('changed', value);
      this.pageSize = value;
    }
  }
};
</script>

<style scoped>
.margin-basic{
  margin-left: 10px;
}
</style>