import {BASE_URL} from './Base'
import axios from "axios";

/*
* 定义路径
*/
let ARTICLE = BASE_URL + "/article";
let ARTICLES = BASE_URL + "/articles";
let ARTICLES_VERSIONS = BASE_URL + "/article/{articleId}/versions";

/**
 * 添加文章
 *  @returns {Promise<AxiosResponse<T>>}
 */
export async function addArticle(title,content) {
    let formdata = new FormData();
    formdata.append("title", title);
    formdata.append("content", content);
    return await axios.post(ARTICLE, formdata);
}

/**
 * 获取文章最新版本数据
 *  @returns {Promise<AxiosResponse<T>>}
 */
export async function getArticleById(id) {
    return await axios.get(ARTICLE, {
        params: {
            id: id,
        }
    });
}

/**
 * 更新文章版本
 *  @returns {Promise<AxiosResponse<T>>}
 */
export async function updateArticleById(id,title,content) {
    let formdata = new FormData();
    formdata.append("id", id);
    formdata.append("title", title);
    formdata.append("content", content);
    return await axios.put(ARTICLE, formdata);
}

/**
 * 获取文章列表
 *  @param page 页数
 *  @param size 每页数据数量
 *  @returns {Promise<AxiosResponse<T>>}
 */
export async function getArticles(page = 1, size = 10) {
    return await axios.get(ARTICLES, {
        params: {
            page: page,
            size: size
        }
    });
}

/**
 * 获取文章版本列表
 *  @param articleId 文章id
 *  @param page 页数
 *  @param size 每页数据数量
 *  @returns {Promise<AxiosResponse<T>>}
 */
export async function getArticleVersions(articleId, page = 1, size = 10) {
    return await axios.get(ARTICLES_VERSIONS.replace('{articleId}', articleId), {
        params: {
            page: page,
            size: size
        }
    });
}