import Vue from "vue";
import Vuex from "vuex";
import dataTable from "./dataTable";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    dataTable,
  },
});

export default store;
