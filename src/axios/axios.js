//1、引入axios
import axios from 'axios';
import { baseURL } from '@/config/config'

//2、创建axios的实例
let httpService = axios.create({
    baseURL: baseURL,
    timeout: 500000
})
//3、axios的拦截--request
httpService.interceptors.request.use(config => {
    return config;
}, err => {
    Promise.reject(err);// 请求错误处理
})

//4、axios的拦截--response
httpService.interceptors.response.use(response => {
    return response;
}, err => {
    return Promise.reject(err);
})

//5、get请求的封装
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        httpService({
            url: url,
            method: 'get',
            params: params
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

//6、post请求封装  默认json格式:'Content-Type':'application/json',如果是文件上传，可以修改headers为 headers: { 'Content-Type': 'multipart/form-data' }
export function post(url, params = {}, responseTypes, headers = { 'Content-Type': 'application/json' }, onDownloadProgress) {
    return new Promise((resolve, reject) => {
        httpService({
            url: url,
            method: 'post',
            data: params,
            responseType: responseTypes,
            headers: headers,
            onDownloadProgress: onDownloadProgress
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

//7、将模块暴露
export default {
    get,
    post,
    axios
}
