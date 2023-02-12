import { createApp } from 'vue'
import App from './App.vue'

// Router
import router from './router'

// Bootstrap & Popper
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// import "@popperjs/core"

createApp(App).use(router).mount('#app')
