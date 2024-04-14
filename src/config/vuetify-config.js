import Vue from "vue";
import Vuetify from "vuetify";
import zhHant from "vuetify/es5/locale/zh-Hant";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa",
  },
  theme: {
    themes: {
      light: {
        primary: "#1976d2",
      },
      dark: {
        background: "#FFFFFF",
        text: "#21283E",
      },
    },
  },
  lang: {
    locales: { zhHant },
    current: "zhHant",
  },
});
