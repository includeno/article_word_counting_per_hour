import {BASE_URL} from './Base'
import axios from "axios";

/*
* 定义路径
* */
let NEWS = BASE_URL + "/news";
let NEWS_LIST = BASE_URL + "/newses";
let NEWS_PAGE = BASE_URL + "/newses/page";
let NEWS_RECOMMEND = BASE_URL + "/news/recommend";

/**
 * 添加文章 TODO
 * @param username 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function addNews(email, password) {
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    return await axios.post(NEWS, formdata);
}

/**
 * 更新文章 done
 * @param newsId 新闻ID
 * @param title 新闻标题
 * @param content 新闻内容
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
    return await axios.put(NEWS, formdata);
}

/**
 * 根据id查询新闻详情
 * @param {BigInteger} id 新闻id
 */
export async function getById(id) {
    const response = await axios.get(NEWS_LIST, {
        params: {
            id: id
        },
    });
    console.log(response);
    return response;
}


/**
 * 分页获取新闻 done
 * @param {Integer} page 页码
 * @param {Integer} size 每页数量
 * @param {Integer} newsId 新闻id
 * @param {String} title 新闻标题
 * @param {String} email 作者email
 * @param {String} username 作者用户名
 * @param {Boolean} valid 是否有效
 * @returns {String} 函数返回值注释
 */
export async function getByPage(newsId, title, email, username, valid = 1, page = 1, size = 10) {
    const response = await axios.get(NEWS_PAGE, {
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
 * 根据id列表查询新闻
 * @param {Array} ids 新闻id列表
 */
export async function getByIds(ids) {
    console.log("getByIds:"+JSON.stringify(ids));
    const response = await axios.get(NEWS_LIST, {
        params: {
            //传入不带[]的字符串
            ids: JSON.stringify(ids).replace("[","").replace("]","")//qs.stringify(ids)
        },
    });
    console.log(response);
    return response;
}


/**
 * 推荐新闻
 * @param {Integer} userId 用户id
 * @param {Integer} count 推荐数量
 */
export async function recommend(userId, count) {
    const response = await axios.get(NEWS_RECOMMEND, {
        params: {
            userId: userId,
            count: count,
        }
    });
    console.log(response);
    return response;
}
