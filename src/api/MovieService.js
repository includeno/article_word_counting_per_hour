import {BASE_URL} from './Base'
import axios from "axios";

/*
* 定义路径
* */
let MOVIE = BASE_URL + "/movie";
let MOVIE_LIST = BASE_URL + "/movies";
let MOVIE_PAGE = BASE_URL + "/movies/page";
let MOVIE_RECOMMEND = BASE_URL + "/movie/recommend";

/**
 * 添加文章 TODO
 * @param username 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function addMovie(email, password) {
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    return await axios.post(MOVIE, formdata);
}

/**
 * 更新文章 done
 * @param newsId 电影ID
 * @param title 电影标题
 * @param content 电影内容
 * @param userId 用户ID
 * @param imgUrl 图片链接
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function updateById(newsId, title, content, userId, imgUrl) {
    let formdata = new FormData();
    formdata.append("newsId", newsId);
    formdata.append("title", title);
    formdata.append("content", content);
    formdata.append("userId", userId);
    formdata.append("imgUrl", imgUrl);
    return await axios.put(MOVIE, formdata);
}

/**
 * 根据id查询电影详情
 * @param {BigInteger} id 电影id
 */
export async function getById(id) {
    const response = await axios.get(MOVIE_LIST, {
        params: {
            id: id
        },
    });
    console.log(response);
    return response;
}


/**
 * 分页获取电影 done
 * @param {Integer} page 页码
 * @param {Integer} size 每页数量
 * @param {Integer} newsId 电影id
 * @param {String} title 电影标题
 * @param {String} email 作者email
 * @param {String} username 作者用户名
 * @param {Boolean} valid 是否有效
 * @returns {String} 函数返回值注释
 */
export async function getByPage(newsId, title, email, username, valid = 1, page = 1, size = 10) {
    const response = await axios.get(MOVIE_PAGE, {
        params: {
            page: page,
            size: size,
            title: title,
            email: email,
            username: username,
            valid: valid
        }
    });
    console.log(response);
    return response;
}

/**
 * 根据id列表查询电影
 * @param {Array} ids 电影id列表
 */
export async function getByIds(ids) {
    console.log("getByIds:"+JSON.stringify(ids));
    const response = await axios.get(MOVIE_LIST, {
        params: {
            ids: JSON.stringify(ids).replace("[","").replace("]","")//qs.stringify(ids)
        },
    });
    console.log(response);
    return response;
}


/**
 * 推荐电影
 * @param {Integer} userId 用户id
 * @param {Integer} count 推荐数量
 */
export async function recommend(userId, count) {
    const response = await axios.get(MOVIE_RECOMMEND, {
        params: {
            userId: userId,
            count: count,
        }
    });
    console.log(response);
    return response;
}
