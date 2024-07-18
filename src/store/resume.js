import axios from "axios";
import Mock from "mockjs";

const state = {
  skillGroup1: [],
  skillGroup2: [],
  skillGroup3: [],
  workExp: [],
};
const getters = {};
const mutations = {
  setResume(state, data) {
    const { skillGroup1, skillGroup2, skillGroup3, workExp } = data;
    state.skillGroup1 = skillGroup1;
    state.skillGroup2 = skillGroup2;
    state.skillGroup3 = skillGroup3;
    state.workExp = workExp;
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
            company: "凱基人壽保險股份有限公司",
            title: "Frontend Engineer",
            fromMonth: "20191101",
            toMonth: "now",
            summery:
              "主要負責公司內部使用的理賠系統 (Expert Claims Processing System) 2.0專案",
            detailList: [
              "使用Vue2(Vuex、Vuetify、Vue Router)開發及維護",
              "與後端協作串接RESTful API",
              "與user溝通畫面需求並撰寫前端開發文件",
              "協助處理基礎Data Patch及資料撈取作業",
              "使用Jenkins上版; Kibana及OCP查log、除錯和效能調校",
              "使用敏捷開發，熟悉Scrum流程",
              "協助公司內部行政事務(擔任福委及部門窗口)",
            ],
          },
          {
            company: "Nasrio 拾光網路有限公司",
            title: "Frontend Engineer",
            fromMonth: "20180301",
            toMonth: "20180701",
            summery: "協助接案的網頁前端設計開發，API串接",
            detailList: ["律師事務所官網、金融企業網銀等"],
          },
          {
            company: "國立中山大學 學生事務處",
            title: "Frontend Engineer",
            fromMonth: "20161201",
            toMonth: "20181201",
            summery: "協助學校內部使用的網頁前端畫面開發，API串接",
            detailList: ["運動證辦證管理系統、出勤管理系統等"],
          },
        ],
      },
    });
    axios
      .post("/api/data")
      .then((response) => {
        commit("setResume", response.data.data);
      })
      .catch((e) => {
        console.error(e);
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
