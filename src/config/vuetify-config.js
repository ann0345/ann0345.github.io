import Vue from "vue";
import Vuetify from "vuetify";
import zhHant from "vuetify/es5/locale/zh-Hant";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa",
  },
  lang: {
    locales: { zhHant },
    current: "zhHant",
  },
});
