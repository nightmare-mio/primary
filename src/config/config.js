/*
 * @Author: wanglongwei wanglongwei@yuqiaotech.com
 * @Date: 2022-07-23 23:39:34
 * @LastEditTime: 2022-11-25 11:15:51
 * @Description: 
 */
const ENV = "test";

var REDIRECTURI;
var baseURL;
var CLIENTID;
if (ENV == "dev") {
    baseURL = "http://127.0.0.1:8081";
    CLIENTID = "f48220e1b60084879128";
    REDIRECTURI="http://localhost:8081/api/auth/rallback"
} else if (ENV == "test") {
    baseURL = "http://42.193.248.221:8081";
    CLIENTID = "afa0c7c303b3a67b2016";
    REDIRECTURI="http://42.193.248.221:8081/api/auth/rallback"
}

export { baseURL, CLIENTID, REDIRECTURI }