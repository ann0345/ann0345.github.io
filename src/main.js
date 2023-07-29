import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mock.js";

import "./config/sweetalert2-config";
import vuetify from "./config/vuetify-config";

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
