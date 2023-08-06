import axios from "axios";
import Mock from "mockjs";

const state = {
  skillGroup1: [],
  skillGroup2: [],
  skillGroup3: [],
  workExp: [],
};
const getters = {
};
const mutations = {
  setResume(state, data) {
    state.skillGroup1 = data.skillGroup1;
    state.skillGroup2 = data.skillGroup2;
    state.skillGroup3 = data.skillGroup3;
    state.workExp = data.workExp;
  },
};
const actions = {
  fetchResume({ commit }) {
    Mock.mock("/api/data", "post", {
      data: {
        skillGroup1: [
          "Vue.js (Vue2)",
          "Vuetify",
          "Vuex",
          "Vue Router",
          "JavaScript",
          "HTML",
          "CSS",
          "SQL",
        ],
        skillGroup2: [
          "Git",
          "Bitbucket",
          "Kibana",
          "Jenkins",
          "Jira",
          "jBPM",
          "Scrum",
          "Visual Studio Code",
        ],
        skillGroup3: [
          "Word",
          "Excel",
          "PowerPoint",
          "After Effects",
          "Premiere Pro",
          "Final Cut Pro",
          "Sketch",
          "Zeplin",
        ],
        workExp: [
          {
            company: "中國人壽保險股份有限公司",
            title: "Frontend Engineer",
            fromMonth: "20191101",
            toMonth: "now",
            summery:
              "主要負責公司內部使用的理賠系統 (Expert Claim Processing System) 2.0專案",
            detail: "333",
          },
          {
            company: "國立中山大學 學生事務處",
            title: "Frontend Engineer",
            fromMonth: "20161201",
            toMonth: "20181201",
            summery: "協助學校內部使用的網頁前端畫面開發",
            detail: "333",
          },
          {
            company: "Nasrio 拾光網路有限公司",
            title: "Frontend Engineer",
            fromMonth: "20180301",
            toMonth: "20180701",
            summery:
              "協助接案的網頁前端設計開發，其中有律師事務所官網、金融企業網銀等",
            detail: "444",
          },
        ],
      },
    });
    axios
      .post("/api/data")
      .then((response) => {
        commit("setResume", response.data.data);
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
