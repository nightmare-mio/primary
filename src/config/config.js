/*
 * @Author: wanglongwei wanglongwei@yuqiaotech.com
 * @Date: 2022-07-23 23:39:34
 * @LastEditTime: 2022-11-15 20:29:03
 * @Description: 
 */
const ENV = "dev";
const CLIENTID = "f48220e1b60084879128"
const REDIRECTURI = "http://127.0.0.1:8081/api/auth/rallback"
var baseURL;
if (ENV == "dev") {
    baseURL = "http://127.0.0.1:8081";
} else if (ENV == "test") {
    baseURL = "http://42.193.248.221:8081";
}

export { baseURL, CLIENTID, REDIRECTURI }