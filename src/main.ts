import './assets/main.css'

import App from '@/App.vue'
import router from '@/router'
import "@/styles/scss/index.scss";
import { createI18n } from 'vue-i18n'
import { locales } from "@/assets/locales/locales";
import BtnIcon from '@/components/ui/buttons/BtnIcon.vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { createApp, h, provide } from 'vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const il8n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: locales,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router);
app.use(il8n);
app.component("BtnIcon", BtnIcon);

app.mount('#app');
