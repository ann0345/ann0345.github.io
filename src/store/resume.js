import axios from "axios";

const state = {
  skillGroup1: [],
  skillGroup2: [],
  skillGroup3: [],
  workExp: [],
};
const getters = {};
const mutations = {
  setResume(state, data) {
    const {skillGroup1, skillGroup2, skillGroup3, workExp} = data;
    state.skillGroup1 = skillGroup1;
    state.skillGroup2 = skillGroup2;
    state.skillGroup3 = skillGroup3;
    state.workExp = workExp;
  },
};
const actions = {
  fetchResume({ commit }) {
    // TODO axios improve
    axios
      .get("https://mocki.io/v1/0fb78238-a229-45b1-8d56-a180ed889c15")
      .then((res) => {
        commit("setResume", res.data.data);
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
