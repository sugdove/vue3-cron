import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import vue3Cron from '../packages/index.js'
const app = createApp(App)
app.use(vue3Cron)
installElementPlus(app)
app.mount('#app')