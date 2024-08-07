import { createApp } from 'vue'
import './style.css'
import App from './App.vue'




const asyncComponents= import.meta.glob('./components/dynamic/**.vue',{ eager: false })
console.log(asyncComponents)

const app = createApp(App);
app.mount('#app');


