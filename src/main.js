import Vue from 'vue'
import App from './App.vue'
import './theme/index.less'
import Antd from 'ant-design-vue'
import router from './router'
import store from "@/store/store";

Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
