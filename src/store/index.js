import Vue from 'vue';
import Vuex from 'vuex';

import dialogModule from './modules/dialog';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    dialog: dialogModule,
  },
});
