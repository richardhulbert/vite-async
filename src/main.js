import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// const modules = import.meta.glob('./components/dynamic/*.vue' )
//
// for (const path in modules) {
//     modules[path]().then((mod) => {
//         console.log(path, mod)
//     })
// }

const app = createApp(App);
app.mount('#app');

createApp(App).mount('#app')
