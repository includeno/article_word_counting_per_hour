<template>
  <standard-table
      :columns="columns"
      :dataSource="dataSource"
      :selectedRows.sync="selectedRows"
      @clear="onClear"
      @change="onChange"
      :pagination="{...pagination, onChange: onPageChange}"
      @selectedRowChange="onSelectChange"
  >
    <div slot="description" slot-scope="{text}">
      {{ text }}
    </div>
    <div slot="action" slot-scope="{text, record}">
      <a style="margin-right: 8px">
        <a-icon type="edit"/>
        编辑
      </a>
      <router-link :to="`/list/query/detail/${record.key}`">详情</router-link>
    </div>
    <template slot="statusTitle">
      <a-icon @click.native="onStatusTitleClick" type="info-circle"/>
    </template>
  </standard-table>
</template>

<script>
import { IPage, ArticleVO } from 'your-api-models';
import { articleLogicService } from 'your-api-services';

export default {
  data() {
    return {
      columns: [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          scopedSlots: {customRender: 'action'},
        },
      ],
      dataSource: [],
      selectedRows: [],
      pagination: {
        current: 1,
        pageSize: 10,
      },
    };
  },
  methods: {
    async fetchData() {
      const {current, pageSize} = this.pagination;
      const articlePage = new Page(current, pageSize);
      const articleVOPage = await articleLogicService.getArticlesWithLatestVersion(articlePage);
      this.dataSource = articleVOPage.records.map(article => ({
        key: article.id,
        title: article.title,
        description: article.description,
      }));
      this.pagination = {
        ...this.pagination,
        total: articleVOP
      }
    }
  },
}
</script>