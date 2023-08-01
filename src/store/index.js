import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Mock from "mockjs";

Vue.use(Vuex);
Mock.setup({
  timeout: 2000,
});
const store = new Vuex.Store({
  state: {
    userData: [],
  },
  getters: {
    totalCount(state) {
      return state.userData.length;
    }
  },
  mutations: {
    setData(state, data) {
      state.userData = data;
    },
  },
  actions: {
    fetchData({ commit }) {
      // 在這裡模擬 API 請求，並使用 Mock.js 生成數據
      Mock.mock("/api/data", "get", {
        "data|30-50": [
          {
            id: "@id",
            name: "@name",
            phoneNum: /^09\d{8}$/,
            "balance|1-10000000.2": 1,
            "currency|1": ["NTD", "USD", "EUR", "JPY"],
            email: "@email",
          },
        ],
      });

      // 使用 Mock.js 發送請求並獲取數據
      axios
        .get("/api/data")
        .then((response) => {
          commit("setData", response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  modules: {},
});

export default store;
