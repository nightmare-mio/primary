/*
 * @Author: wanglongwei wanglongwei@yuqiaotech.com
 * @Date: 2022-06-19 16:20:33
 * @LastEditTime: 2022-10-25 09:55:17
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'


import router from './route/Index';
import './assets/css/Common.css';
import './assets/css/Button.css';


const app = createApp(App)
app.use(VueCookies)
app.use(router)
app.mount('#app')