import Vue from "vue";
import Vuex from "vuex";
import dataTable from "./dataTable";
import resume from "./resume";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    dataTable,
    resume,
  },
});

export default store;
