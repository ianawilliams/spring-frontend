import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import "@/styles/scss/index.scss";
import { createI18n } from 'vue-i18n'
import { locales } from "@/assets/locales/locales";
import BtnIcon from '@/components/ui/buttons/BtnIcon.vue';

const il8n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: locales,
});

const app = createApp(App);

app.use(router);
app.use(il8n);
app.component("BtnIcon", BtnIcon);

app.mount('#app');
