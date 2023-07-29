import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Mock from "mockjs";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userData: [],
  },
  getters: {},
  mutations: {
    setData(state, data) {
      state.userData = data;
    },
  },
  actions: {
    fetchData({ commit }) {
      // 在這裡模擬 API 請求，並使用 Mock.js 生成數據
      Mock.mock("/api/data", "get", {
        "data|5-10": [
          {
            "id|+1": 1,
            name: "@cname",
            "phoneNum|18-60": 1,
            "balance|18-60000": 1,
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
