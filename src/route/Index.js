/*
 * @Author: wanglongwei wanglongwei@yuqiaotech.com
 * @Date: 2022-06-19 16:23:14
 * @LastEditTime: 2022-11-28 14:22:59
 * @Description: 
 */
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './HomeRouter'


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router