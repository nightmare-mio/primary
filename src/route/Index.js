/*
 * @Author: wanglongwei wanglongwei@yuqiaotech.com
 * @Date: 2022-06-19 16:23:14
 * @LastEditTime: 2022-11-25 18:00:33
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './HomeRouter'


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router