import { createApp } from 'vue'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import enTexts from '@/i18n/en.yaml'
import App from './App.vue'

i18next.init({
  debug: true,
  lng: 'en',
  interpolation: {
    escapeValue: false
  },
  fallbackLng: false,
  resources: {
    en: {
      translation: enTexts
    }
  }
})

createApp(App)
  .use(I18NextVue, {i18next})
  .mount('#app')
