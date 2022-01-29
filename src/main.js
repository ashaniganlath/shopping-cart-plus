import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import MainHeader from "./components/MainHeader.vue";

import router from "./router";
import store from "./store";

//css
import "/src/assets/css/main.css";
import "vue-loading-overlay/dist/vue-loading.css";

//plugins
import VueNumberInput from "@chenfengyuan/vue-number-input";
import VueLoading from "vue-loading-overlay";
import axios from "axios";

const app = createApp(App);

//components
app.component(VueNumberInput.name, VueNumberInput);
app.component("VueLoading", VueLoading);
app.component("MainHeader", MainHeader);

//libraries / plugins
app.use(router);
app.use(store);

app.mount("#app");

window.axios = axios;
window.defineAsyncComponent = defineAsyncComponent;
