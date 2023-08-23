import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './HomeRouter'


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router