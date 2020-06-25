import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { imageObj: [] },
  mutations: {
    setImageObj(state, data) {
      state.imageObj = data;
    },
  },
  actions: {
    fetchImageObj({ commit }, item) {
      commit("setImageObj", item);
    },
  },
  getters: {
    getImageObj(state) {
      return state.imageObj;
    },
  },
});
