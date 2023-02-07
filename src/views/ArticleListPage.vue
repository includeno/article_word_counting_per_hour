<template>
  <div class="home">
    <Header style="margin-bottom:20px;"></Header>
<!--    <a-button v-on:click="">添加数据</a-button>-->
    <standard-table
        :columns="columns"
        :dataSource="dataSource"
        :selectedRows.sync="selectedRows"
        @clear="onClear"
        @change="onChange"
        :pagination="{...pagination, onChange: onPageChange}"
        @selectedRowChange="onSelectChange"
    >
      <div slot="action" slot-scope="{record}">
        <a style="margin-right: 8px">
          <a-icon type="edit"/>
          <router-link :to="`/api/${record.id}/edit`">编辑</router-link>
        </a>
        <router-link :to="`/api/${record.id}/versions`">详情</router-link>
      </div>
    </standard-table>
  </div>
</template>

<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: '标题',
    dataIndex: 'title'
  },
  {
    title: '内容',
    dataIndex: 'content'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    title: '版本号',
    dataIndex: 'version'
  },
  {
    title: '操作',
    scopedSlots: {customRender: 'action'}
  }
]

import Header from "@/base/Header";
import StandardTable from "@/base/StandardTable";
import {getArticles} from "@/api/ArticleService"
import dateutil from "@/utils/dateutil";

export default {
  components:{
    Header,
    StandardTable
  },
  data() {
    return {
      articles: [],
      selectedRows: [],
      columns: columns,
      dataSource: [],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
        onChange: this.handlePageChange
      },
    };
  },
  mounted() {
    this.getArticles(this.pagination.current,this.pagination.pageSize);
  },
  methods: {
    onPageChange(page, pageSize) {
      this.pagination.current = page
      this.pagination.pageSize = pageSize
      this.getData()
    },
    handlePageChange(page, pageSize) {
      // 获取数据
      this.getArticles(page, pageSize);
    },
    async getArticles(page, pageSize) {
      let {data} =await getArticles(page,pageSize);
      console.log(data)
      console.log(data.data)
      this.dataSource=data.data.records;

      let final_data=[]
      this.dataSource.forEach(r => {

        final_data.push({
          id: r["id"],
          content: r["content"],
          title: r["title"],
          version: r["version"],
          createTime: dateutil.getDateStringFromTimestamp(r["createTime"]),
        });
        this.dataSource=final_data;
      });
    },
    onClear() {
      this.$message.info('您清空了勾选的所有行')
    },
    onStatusTitleClick() {
      this.$message.info('你点击了状态栏表头')
    },
    onChange() {
      this.$message.info('表格状态改变了')
    },
    onSelectChange() {
      //this.$message.info('选中行改变了')
    },
  },
  created() {
    this.getArticles(this.pagination.current, this.pagination.pageSize);
  }
};
</script>
