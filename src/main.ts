import "./assets/main.css";

//Vue instance
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

//Vue router
import router from "./router";
app.use(router);

//Unhead
import { createHead } from "@unhead/vue";
const head = createHead();
app.use(head);

//Pinia
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

// toast message plugin
import Vue3Toasity, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
app.use(Vue3Toasity, {
  autoClose: 800,
  position:'bottom-right'
} as ToastContainerOptions);

app.mount("#app");
