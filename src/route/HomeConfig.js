const HomeConfig = {
    IndexApp: {
        path: '/',
        name: 'index',
        component: () => import( '@/pages/Home.vue'),
        children: [
            {
                path: '/',
                name: 'blogindex',
                component: () => import( '@/pages/BlogIndex/Index.vue'),
            },
            {
                path: '/note',
                name: 'note',
                component: () => import( '@/pages/Note/Note.vue'),
            },
            {
                path: '/tools',
                name: 'tools',
                component: () => import('@/pages/Tools/Tools.vue'),
            },
            {
                path: '/cattery',
                name: 'cattery',
                component: () => import('@/pages/Cattery/Cattery.vue'),
            },
            {
                path: '/friendChain',
                name: 'friendChain',
                component: () => import('@/pages/FriendChain/FriendChain.vue'),
            },
            {
                path: '/about',
                name: 'about',
                component: () => import( '@/pages/Dynamic/Dynamic.vue'),
            },
            {
                path: '/setting',
                name: 'setting',
                component: () => import('@/pages/BlogSetting/Setting.vue'),
            },
            {
                path: '/article',
                name: 'article',
                component: () => import('@/pages/Article/ArticleOne.vue')
            }
        ]
    }
};
// component使用懒加载方式，用到时才引入
// 所有路由组件的配置
// 抛出模块
export default HomeConfig;
