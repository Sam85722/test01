import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 
import axios from 'axios'
import VueAxios from 'vue-axios'
// 

const app = createApp(App)

// 
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// 

app.use(router).use(ElementPlus).use(VueAxios, axios)

app.mount('#app')
