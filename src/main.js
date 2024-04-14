import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./config/sweetalert2-config";
import vuetify from "./config/vuetify-config";
import globalMixins from "./mixins/globalMixin";

// 自動導入atom molecule
const atom = require.context("./components/atoms", true, /\.vue$/);
atom.keys().forEach((fileName) => {
  const config = atom(fileName);
  const name = fileName
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  Vue.component(name, config.default || config);
});
const molecules = require.context("./components/molecules", true, /\.vue$/);
molecules.keys().forEach((fileName) => {
  const config = molecules(fileName);
  const name = fileName
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  Vue.component(name, config.default || config);
});

Vue.mixin(globalMixins);

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
