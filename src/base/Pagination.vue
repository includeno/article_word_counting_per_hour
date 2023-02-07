<template>
  <div class="pager" v-if="total > 0">
    <a
      href="#"
      class="pager-item"
      :class="{disabled: page === 1}"
      @click.prevent="handleChange(1)"
    >首页</a>
    <a
      href="#"
      class="pager-item"
      :class="{disabled: page === 1}"
      @click.prevent="handleChange(page-1)"
    >上一页</a>

    <a
      href="#"
      class="pager-item"
      :class="{active:item===page}"
      v-for="item in numbers"
      :key="item"
      @click.prevent="handleChange(item)"
    >{{item}}</a>

    <a
      href="#"
      class="pager-item"
      :class="{disabled:page===pageNumber}"
      @click.prevent="handleChange(page+1)"
    >下一页</a>
    <a
      href="#"
      class="pager-item"
      :class="{disabled:page===pageNumber}"
      @click.prevent="handleChange(pageNumber)"
    >尾页</a>
    <span class="pager-text">
      <i>{{page}}</i>
      /
      <i>{{pageNumber}}</i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      // 当前页码
      default: 1,
      type: Number
    },
    total: {
      default: 0,
      type: Number
    },
    limit: {
      // 页容量：每页显示的数据条数
      default: 10,
      type: Number
    },
    panelNumber: {
      // 最多显示的数字页码个数
      default: 10,
      type: Number
    }
  },
  computed: {
    // 总页数，向上取整
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 展示的所有页码数组
    numbers() {
      let nums = [];
      for (let i = this.minNumber; i < this.maxNumber; i++) {
        nums.push(i);
      }
      return nums;
    },
    minNumber() {
      // 计算当前显示的最小的页码数字
      let n = this.page - this.panelNumber / 2;
      if (n < 1) {
        n = 1;
      }
      return n;
    },
    maxNumber() {
      let n = this.minNumber + this.panelNumber - 1;
      if (n > this.pageNumber) {
        n = this.pageNumber;
      }
      return n;
    }
  },
  methods: {
    handleChange(newPage) {
      if (newPage < 1) {
        newPage = 1;
      } else if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.page) {
        // 页码无变化
        return;
      }
      this.$emit("pageChange", newPage);
    }
  }
};
</script>

<style scoped>
.pager {
  text-align: center;
  margin: 20px 0;
}

.pager .pager-item {
  display: inline-block;
  padding: 5px 7px;
  border: 1px solid #ccc;
  margin: 8px;
  cursor: pointer;
  color: rgb(96, 96, 224);
}

.pager .pager-item.disabled {
  color: #ccc;
  cursor: not-allowed;
}

.pager .pager-item.active {
  color: #f40;
  border: none;
  cursor: auto;
}
</style>