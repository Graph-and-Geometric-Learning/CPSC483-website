import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import VCalendar from 'v-calendar'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VCalendar, {})
  .mount('#app')
