<template>
  <div class="home">
    <Header style="margin-bottom:20px;"></Header>
<!--    <router-link to="to"> </router-link>-->
  </div>
</template>

<script>
import Header from "@/base/Header";

export default {
  name: "Home",
  components: {
    Header
  },
  data() {
    return {
      current: 1,
      pageSize: 2,
      total: 0,
      pageSizeOptions: ['2', '4', '10', '20', '50'],//['10', '20', '30', '40', '50'],
    };
  },
  async mounted() {
  },
  methods: {

  }
};
</script>
