/*
 * @Author: wanglongwei wanglongwei@yuqiaotech.com
 * @Date: 2022-07-23 23:39:34
 * @LastEditTime: 2022-10-24 11:27:17
 * @Description: 
 */
const ENV = "dev";
var baseURL;
if (ENV == "dev") {
    baseURL = "http://127.0.0.1:8081";
} else if (ENV == "test") {
    baseURL = "http://42.193.248.221:8081";
}

export { baseURL }