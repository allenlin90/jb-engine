export default {
  namespaced: true,
  state() {
    return {
      history: [],
    };
  },
  actions: {
    history(context, { to, from, timestamp }) {
      const record = {
        to,
        from,
        timestamp,
      };
      context.commit('history', record);
    },
  },
  mutations: {
    history(state, record) {
      const history = localStorage.getItem('history');
      let newRecords = [];
      if (history) {
        const parsedHistory = JSON.parse(history);
        newRecords = [...parsedHistory];
      }
      newRecords.push(record);
      localStorage.setItem('history', JSON.stringify(newRecords));
      state.history = newRecords;
    },
  },
  getters: {
    history(state) {
      return state.history;
    },
  },
};
