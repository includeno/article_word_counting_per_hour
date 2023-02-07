<template>
  <div>
    <Header style="margin-bottom:20px;"></Header>
    <div>
      <a-card style="margin-top: 24px" :bordered="false" title="标题">
        <detail-list>
          <detail-list-item term="标题" style="margin-top: 24px">{{title}}</detail-list-item>
        </detail-list>
      </a-card>
      <a-table :dataSource="articleVersions" :columns="columns" :pagination="pagination">
      </a-table>
    </div>
  </div>

</template>

<script>
import detailList from "@/base/DetailList";
import {getArticleVersions,getArticleById} from '@/api/ArticleService'
import Header from "@/base/Header";

export default {
  components: {
    Header,
    detailList,
  },
  data() {
    return {
      articleId: this.$route.params.id,
      title:"",
      articleVersions: [],
      columns: [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: 'content',
          dataIndex: 'content',
        },
        {
          title: '版本',
          dataIndex: 'version',
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
        },
      ],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
        onChange: this.loadData,
      },
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData(page = 1, size = 10) {
      const article=await getArticleById(this.articleId);
      this.title=article.data.data.title;

      const {data} = await getArticleVersions(this.articleId, this.pagination.current, this.pagination.pageSize);
      this.articleVersions = data.data.records;
      this.pagination.total = data.data.total;
      this.pagination.current = data.data.current;
      this.pagination.pageSize = data.data.size;
    },
  },
};
</script>
