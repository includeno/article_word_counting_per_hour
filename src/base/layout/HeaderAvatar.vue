<template>
  <a-dropdown>
    <div class="header-avatar" style="cursor: pointer">
      <a-avatar class="avatar" size="small" shape="circle" :src="loginUser.user.avatar"/>
      <span class="name">{{ loginUser.user.username }}</span>
    </div>
    <a-menu :class="['avatar-menu']" slot="overlay">
      <a-menu-item>
        <a-icon type="home" />
        <span>
          <router-link :to="{name:'Personal'}">个人中心</router-link>
        </span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting"/>
        <span>设置</span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="api"/>
        <span><a href="http://localhost:8086/">后台管理</a></span>
      </a-menu-item>
      <a-menu-divider/>
      <a-menu-item @click="logout">
        <a-icon style="margin-right: 8px;" type="poweroff"/>
        <span>退出登录</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: 'HeaderAvatar',
  computed: {
    loginUser() {
      console.log("read loginUser!" + JSON.stringify(this.$store.state.user.userData));
      return this.$store.getters["user/getUser"]
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logout");
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less">
.header-avatar {
  display: inline-flex;

  .avatar {
    margin-right: 8px;
  }

  .avatar, .name {
    align-self: center;
  }

  .name {
    font-weight: 500;
  }
}

.avatar-menu {
  width: 150px;
}
</style>
