
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import 'bootstrap';
import './assets/scss/style.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
