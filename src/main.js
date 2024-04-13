import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mock.js";

import "./config/sweetalert2-config";
import vuetify from "./config/vuetify-config";
import globalMixins from "./mixins/globalMixin";
import ChipVuetify from "./components/atoms/ChipVuetify";
import SwitchVuetify from "./components/atoms/SwitchVuetify";
import Pagination from "./components/molecules/Pagination";
import Timeline from "./components/molecules/Timeline";
import UnorderedList from "./components/molecules/UnorderedList";
import Navigator from "./components/molecules/Navigator";

Vue.mixin(globalMixins);
Vue.component("ChipVuetify", ChipVuetify);
Vue.component("SwitchVuetify", SwitchVuetify);
Vue.component("Pagination", Pagination);
Vue.component("Timeline", Timeline);
Vue.component("UnorderedList", UnorderedList);
Vue.component("Navigator", Navigator);
Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
