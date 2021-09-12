export default {
  namespaced: true,
  state() {
    return {
      isShown: false,
      message: '',
      title: '',
    };
  },
  actions: {
    toggle(context, { isShown }) {
      context.commit('isShown', { isShown });
    },
    message(context, payload) {
      if ('title' in payload || 'message' in payload) {
        context.commit('message', payload);
      } else {
        console.warn('no title or message is given!');
      }
    },
  },
  mutations: {
    isShown(state, { isShown }) {
      state.isShown = isShown;
    },
    message(state, { title, message }) {
      if (title) {
        state.title = title;
      }
      if (message) {
        state.message = message;
      }
    },
  },
  getters: {
    isShown(state) {
      return state.isShown;
    },
    message(state) {
      return state.message;
    },
    title(state) {
      return state.title;
    },
  },
};
