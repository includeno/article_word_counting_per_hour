import {login, logout} from "@/api/UserService";

// vuex 用户信息模块库
export default {
    namespaced: true,
    state: {
        userData: undefined, // 登录用户对象
        isLoading: false, // 加载状态
    },
    getters: {
        getUser: state => {
            if(!state.userData){
                try {
                    const user = localStorage.getItem(process.env.VUE_APP_USER_KEY)
                    state.userData = JSON.parse(user)
                } catch (e) {
                    console.error(e)
                }
            }
            return state.userData
        }
    },
    mutations: {
        setIsLoading(state, payload) {
            state.isLoading = payload;
        },
        setUserData(state, payload) {
            state.userData = payload;
            console.log("set userData!" + JSON.stringify(payload));
            localStorage.setItem(process.env.VUE_APP_USER_KEY, JSON.stringify(payload));
        },
    },
    actions: {
        // TIPS payload 只能有一个
        async login(context, payload) {
            context.commit("setIsLoading", true);
            let resp = await login(payload.email, payload.password);
            if (resp.data.code == 200) {
                // 登录成功
                context.commit("setUserData", resp.data.data);
            }
            context.commit("setIsLoading", false);
            console.log("查询用户信息")
            console.log(this.state.user.userData)
            console.log(this.state.user.isLoading)
            return resp;
        },
        logout(context) {
            logout();
            context.commit("setUserData", null);
        },
    },
};
