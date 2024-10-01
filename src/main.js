import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';


import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App);

app.use(router); // Use the router instance

app.mount('#app');