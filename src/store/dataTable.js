import axios from "axios";
import Mock from "mockjs";

const state = {
  dataTableItems: [],
};
const getters = {
  totalCount(state) {
    return state.dataTableItems.length;
  },
};
const mutations = {
  setDataTable(state, data) {
    state.dataTableItems = data;
  },
};
const actions = {
  fetchDataTable({ commit }) {
    // 模擬API請求，並使用Mock.js生成數據
    Mock.mock("/api/data", "get", {
      "data|40-70": [
        {
          id: "@id",
          name: "@name",
          phoneNum: /^09\d{8}$/,
          "balance|1-100000.2": 1,
          "currency|1": ["NTD", "USD"],
          email: "@email",
        },
      ],
    });
    // 使用Mock.js發送請求並獲取數據
    axios
      .get("/api/data")
      .then((response) => {
        commit("setDataTable", response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
