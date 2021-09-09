import Vue from 'vue';
import Vuex from 'vuex';

import dialogModule from './modules/dialog/index';
import historyModule from './modules/history/index';
import newsModule from './modules/news/index';

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
    history: historyModule,
    news: newsModule,
  },
});
