import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

axios.defaults.baseURL = "https://api.thecatapi.com/v1/images/search";
axios.defaults.headers.common["x-api-key"] =
  "45fbfa2d-54ce-41af-bcec-4c961a6d335f";
app.use(store).use(router).use(VueAxios, axios).mount("#app");
