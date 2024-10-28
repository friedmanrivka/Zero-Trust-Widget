import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // ייבוא הגדרות ה-Vuetify

import 'vuetify/styles'; // ייבוא הסגנונות של Vuetify
import '@mdi/font/css/materialdesignicons.css'; // אייקונים של Material Design Icons

createApp(App)
  .use(vuetify)
  .mount('#app');