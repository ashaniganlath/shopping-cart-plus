import { createApp } from 'vue';
import App from './App.vue';
import MainHeader from './components/MainHeader.vue';

import router from './router';

//css
import "/src/assets/css/main.css";

//plugins
import VueNumberInput from '@chenfengyuan/vue-number-input';
import axios from "axios";

const app = createApp(App);

app.component(VueNumberInput.name, VueNumberInput);
app.component('main-header', MainHeader);

app.use(router);

app.mount('#app');

window.axios = axios;