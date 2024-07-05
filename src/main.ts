import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'

import Ripple from 'primevue/ripple'

// @ts-ignore
// import Aura from './presets/aura' //preset written in js
import Lara from './presets/lara'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara
})
app.directive('ripple', Ripple)

app.mount('#app')
