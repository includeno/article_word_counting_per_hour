import {BASE_URL} from './Base'
import axios from "axios";

/*
* 定义路径
* */
let USER = BASE_URL + "/user";
let LOGIN = BASE_URL + "/user/login";
let REGISTER = BASE_URL + "/user/register";
let ROLES = BASE_URL + "/roles";
let USER_LIST = BASE_URL + "/users/page";
let ROUTES = BASE_URL + "/routes";

/**
 * 登录服务
 * @param email 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function login(email, password) {
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    return await axios.post(LOGIN, formdata);
}

/**
 * 管理员注册服务
 * @param username 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function register(username, password, email, roleId) {
    let formdata = new FormData();
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("roleId", roleId);
    return await axios.post(REGISTER, formdata);
}

/**
 * 普通用户注册服务
 * @param username 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function registercommon(username, password, email) {
    let formdata = new FormData();
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);
    return await axios.post(REGISTER, formdata);
}

/**
 * 获取用户详情
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function getUser(id) {
    return await axios.get(USER, {params: {id: id}});
}

/**
 * 更新用户信息
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function updaterUser(id, username, password, roleId) {
    let formdata = new FormData();
    formdata.append("id", id);
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("roleId", roleId);
    return await axios.put(USER, formdata);
}

/**
 * 删除用户信息
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function deleteUser(id) {
    return await axios.delete(USER, {id: id});
}

/**
 * 获取所有角色
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function getRoleList() {
    return await axios.get(ROLES, {});
}

export async function getUserListByPage(page, size, {username, email, deleted}) {
    return await axios.get(USER_LIST, {
        params: {
            page: page,
            size: size,
            username: username,
            email: email,
            deleted: deleted,
        }
    });
}

/**
 * 退出登录
 */
export function logout() {
    localStorage.removeItem(process.env.VUE_APP_ROUTES_KEY)
    localStorage.removeItem(process.env.VUE_APP_PERMISSIONS_KEY)
    localStorage.removeItem(process.env.VUE_APP_ROLES_KEY)
}

export default {
    login,
    register,
    registercommon,
    getUser,
    updaterUser,
    deleteUser,
    getRoleList,
    getUserListByPage,
    logout
}
