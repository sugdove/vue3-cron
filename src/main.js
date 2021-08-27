import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import cron from './components/index.js'
const app = createApp(App)
app.use(cron)
installElementPlus(app)
app.mount('#app')