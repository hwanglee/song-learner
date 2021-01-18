import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue, {
  BButton: { variant: "outline-secondary", size: "lg" }
});
Vue.use(IconsPlugin);

new Vue({
  render: h => h(App),
  store: store
}).$mount("#app");
