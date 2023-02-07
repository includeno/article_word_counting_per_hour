<!--文章列表分页组件-->
<template>
  <div class="news-list">
    <div class="news-item-normal" v-for="(item,id) in news" :key="item.newsId" :index="id">
      <div class="image" v-if="item.imgUrl">
        <a :href="'/content/'+item.id" target="_blank">
          <img :src="item.imgUrl" alt="图片"/>
        </a>
      </div>
      <div class="words">
        <h3 class="title">
          <a :href="'/news/'+item.newsId" target="_blank">{{ item.title }}</a>
        </h3>
        <div class="aside">
          <span>
            <a :href="item.sourceUrl">
              来源：{{ item.source }}
            </a>
          </span>
          <span>发布日期：{{ item.createTime }}</span>
        </div>
        <div class="content" v-html="item.desc || item.content"></div>
      </div>
    </div>
    <a-pagination
        v-model="currentInside"
        :page-size-options="pageSizeOptionsInside"
        :total="totalInside"
        show-size-changer
        :page-size="pageSizeInside"
        @showSizeChange="onShowSizeChange"
        @change="onChange"
    >
      <template slot="buildOptionText" slot-scope="props">
        <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
        <span v-if="props.value === '50'">全部</span>
      </template>
    </a-pagination>
  </div>
</template>

<script>
export default {
  name: 'NewsListPage',
  props: {
    news: {
      type: Array,
      default: () => [] // TIPS 必须使用函数返回默认值，原理类似组件的 data 定义方式
    },
    pageSizeOptions: {
      type: Array,
      default: () => ['10', '20', '30', '40', '50'], // TIPS 必须使用函数返回默认值，原理类似组件的 data 定义方式
    },
    current: {
      type: Number
    },
    pageSize: {
      type: Number
    },
    total: {
      type: Number
    },
  },
  computed: {
    currentInside: {
      set(newval) {
        this.$emit('update:current', newval)
      },
      get() {
        return this.current;
      }
    },
    pageSizeOptionsInside: {
      get() {
        return this.pageSizeOptions;
      }
    },
    pageSizeInside: {
      set(newval) {
        this.$emit('update:pageSize', newval)
      },
      get() {
        return this.pageSize;
      }
    },
    totalInside: {
      set(newval) {
        this.$emit('update:total', newval)
      },
      get() {
        return this.total;
      }

    },
  },
  data() {
    return {}
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log("children onShowSizeChange" + pageSize);
      //this.$emit("change_size", pageSize);
      this.$parent.change_size(pageSize);
      console.log("children onShowSizeChange end" + pageSize);

      console.log("children onShowSizeChange =>>>" + this.current);
      console.log("children onShowSizeChange =>>>" + this.pageSize);
    },
    onChange(current){
      this.$parent.change_current(current);
    }
  },
};
</script>

<style scoped>
.news-item-normal {
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  padding: 20px 0;
}

.image {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  float: left;
  margin-right: 20px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.aside {
  font-size: 14px;
  color: #888;
}

.aside span {
  margin-right: 15px;
}

.content {
  max-height: 100px;
  overflow: hidden;
  line-height: 2;
}
</style>
