import { createApp } from 'vue'
import App from './App.vue'
import "/src/assets/css/main.css";
import VueNumberInput from '@chenfengyuan/vue-number-input';

const app = createApp(App)
app.component(VueNumberInput.name, VueNumberInput);
app.mount('#app')
