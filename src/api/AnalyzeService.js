import {BASE_URL} from './Base'
import axios from "axios";

/*
* 定义路径
*/
let WORD_COUNT = BASE_URL + "/analyze/wordcount";
let WORD_COUNT_ALL_TIME = BASE_URL + "/analyze/wordcount_alltime";


/**
 * 获取最近写的文字个数
 *  @param seconds 秒数
 *  @returns {Promise<AxiosResponse<T>>}
 */
export async function getWordCount(seconds = 3600) {
    return await axios.get(WORD_COUNT, {
        params: {
            seconds: seconds,
        }
    });
}

/**
 * 获取文字个数
 *  @returns {Promise<AxiosResponse<T>>}
 */
export async function getWordCountAllTime() {
    return await axios.get(WORD_COUNT_ALL_TIME, {
        params: {}
    });
}
