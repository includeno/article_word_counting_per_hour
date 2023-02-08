import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/ArticleListPage"),
    },
    {
        path: '/api/:id/versions',
        name: "ArticleVersionsPage",
        component: () => import("@/views/ArticleVersionsPage"),
    },
    {
        path: '/api/add',
        name: "ArticleAdd",
        component: () => import("@/views/ArticleAdd"),
    },
    {
        path: '/api/:id/edit',
        name: "ArticleEdit",
        component: () => import("@/views/ArticleEdit"),
    },
    {
        path: "/countdown",
        name: "CountDown",
        component: () => import("@/views/CountDown"),
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router