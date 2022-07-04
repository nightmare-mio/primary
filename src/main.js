import { createApp } from 'vue'
import App from './App.vue'


import router from './route/Index';
import './assets/css/Common.css';
import './assets/css/Button.css';

const app=createApp(App)
app.use(router)
app.mount('#app')