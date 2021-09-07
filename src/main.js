import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import primevue from "./plugins/primevue";
import './plugins/axios'
import "@/assets/styles.scss";
import store from './store'
import {$axios} from "./plugins/axios";
import {ACCOUNT_SET_PROFILE} from "./store/actions/account";

// const app = createApp(App)
//
// app.use(router).use(PrimeVue).use(store)
//
// Object.keys(primevue).forEach(item => {
//     app.component(item, primevue[item]);
// })
//
// app.mount('#app')


function init_vue() {
    const app = createApp(App).use(store)

    app.use(router).use(PrimeVue)

    Object.keys(primevue).forEach(item => {
        app.component(item, primevue[item]);
    })

    app.mount('#app')
}

async function init() {
    try {
        let r = await $axios.get('profile/')
        store.commit(ACCOUNT_SET_PROFILE, r.data.data)
        init_vue();
    } catch {
        init_vue();
    }
}

init();