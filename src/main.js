import { createApp } from 'vue'
import App from './App.vue'
import MainHeader from './components/MainHeader.vue'

//css
import "/src/assets/css/main.css";

//plugins
import VueNumberInput from '@chenfengyuan/vue-number-input';

const app = createApp(App)

app.component(VueNumberInput.name, VueNumberInput);
app.component('main-header', MainHeader);

app.mount('#app')
