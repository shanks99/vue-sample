import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// 아래 두줄만 넣으면 된다.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
.use(router)
.use(BootstrapVue)
.mount('#app')