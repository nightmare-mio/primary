/*
 * @Author: wanglongwei wanglongwei@yuqiaotech.com
 * @Date: 2022-06-19 16:23:14
 * @LastEditTime: 2022-11-24 18:15:47
 * @Description: 
 */
const HomeConfig = {
    IndexApp: {
        path: '/',
        name: 'index',
        component: () => import('@/pages/Home.vue'),
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: () => import('@/pages/dashboard/index.vue'),
            },
            {
                path: '/note',
                name: 'note',
                component: () => import('@/pages/note/index.vue'),
            },
            {
                path: '/tools',
                name: 'tools',
                component: () => import('@/pages/tools/index.vue'),
            },
            {
                path: '/cattery',
                name: 'cattery',
                component: () => import('@/pages/cattery/index.vue'),
            },
            {
                path: '/friendChain',
                name: 'friendChain',
                component: () => import('@/pages/friendChain/index.vue'),
            },
            {
                path: '/dynamic',
                name: 'dynamic',
                component: () => import('@/pages/dynamic/index.vue'),
            },
            {
                path: '/setting',
                name: 'setting',
                component: () => import('@/pages/setting/index.vue'),
            },
            {
                path: '/article/:id',
                name: 'article',
                component: () => import('@/pages/article/index.vue')
            }
        ]
    }
};
// component使用懒加载方式，用到时才引入
// 所有路由组件的配置
// 抛出模块
export default HomeConfig;
