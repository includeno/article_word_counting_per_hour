<template>
  <div class="header">
    <div class="header-container">
      <div class="container center">
        <div class="logo">
          <!-- NOTE 声明式导航，推荐使用具名路由，因为路径名称有时需要改变，全局改变时不方便 -->
          <router-link :to="{name:'Home'}">
            <img src="../assets/logo.png"/>
          </router-link>
        </div>
        <ul class="nav ">
          <div class="home">
            <router-link :to="{name:'Home'}">首页</router-link>
          </div>
          <div class="home">
            <router-link :to="{name:'ArticleAdd'}">新增</router-link>
          </div>
        </ul>

      </div>
    </div>
  </div>
</template>
<script>

export default {
  components: {
  },
  computed: {
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {

  }
};
</script>

<style scoped>
.header {
  height: 60px;
}

.header-container {
  height: 60px;
  background: #000;
  color: #fff;
  line-height: 60px;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
}

.container {
  display: flex;
}

.logo a {
  display: flex;
  align-items: center;
  height: 100%;
}

.logo img {
  width: 42px;
  height: 42px;
}

.center {
  width: 100%;
}

.avatar {
  margin-right: 20px;
}

.nav {
  margin: 0 60px;
  display: flex;
  flex-grow: 1;
}

.nav a {
  display: block;
  padding: 0 10px;
}

.nav .router-link-exact-active {
  color: #fcb85f;
}

.nav .home {
  margin: 0 20px;
}

.user {
  font-size: 14px;
}

.user * {
  margin-left: 10px;
}

.header a {
  color: #fff;
}
</style>
