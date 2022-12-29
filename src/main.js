import {createApp} from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router/index'

createApp(App).use(router).mount('#app')
