import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import primevue from "./plugins/primevue";
import './plugins/axios'
import "@/assets/styles.scss";

const app = createApp(App)

app.use(router).use(PrimeVue)

Object.keys(primevue).forEach(item => {
    app.component(item, primevue[item]);
})

app.mount('#app')
