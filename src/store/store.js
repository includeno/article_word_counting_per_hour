import Vue from "vue";
import Vuex from "vuex";
import user from "./user";

Vue.use(Vuex);

// TIPS 在 vuex 中，提交 mutations 是数据变化的唯一原因
// TIPS 在 mutations 中不能出现副作用操作，即改动或使用外部数据和异步处理
export default new Vuex.Store({
    // 共享状态或共享数据
    // state: {},不推荐使用,我们将使用模块
    modules: {user},
    // mutations: {},
    // actions: {},
    // modules: {},
});
