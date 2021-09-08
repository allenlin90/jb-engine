import Vue from 'vue';
import Vuex from 'vuex';

import dialogModule from './modules/dialog';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    overlay: false,
  },
  actions: {
    overlay(context) {
      context.commit('overlay');
    },
  },
  mutations: {
    overlay(state) {
      state.overlay = !state.overlay;
    },
  },
  getters: {
    overlay(state) {
      return state.overlay;
    },
  },
  modules: {
    dialog: dialogModule,
  },
});
