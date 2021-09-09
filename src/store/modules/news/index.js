export default {
  namespaced: true,
  state() {
    return {
      newsSource:
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=b397a712eedf498d910d54230c1ee4a3',
      articles: [],
      sourceList:
        'https://newsapi.org/v2/sources?apiKey=b397a712eedf498d910d54230c1ee4a3',
      sources: [],
    };
  },
  actions: {
    async articles(context) {
      try {
        const { newsSource } = context.getters;
        const { status, totalResults, articles } = await fetch(
          newsSource,
        ).then((res) => res.json());
        if (status === 'ok' && totalResults) {
          context.commit('articles', articles);
        }
      } catch (error) {
        context.dispatch('dialog/isShown', { isShown: true }, { root: true });
        context.dispatch(
          'dialog/message',
          { message: error.message, title: 'Failed loading articles' },
          { root: true },
        );
      }
    },
    async sources(context) {
      try {
        const { sourceList } = context.getters;
        const { status, sources } = await fetch(sourceList).then((res) => {
          res.json();
        });
        if (status === 'ok' && sources.length) {
          context.commit('sources', sources);
        }
      } catch (error) {
        context.dispatch('dialog/isShown', { isShown: true }, { root: true });
        context.dispatch(
          'dialog/message',
          { message: error.message, title: 'Failed loading sources' },
          { root: true },
        );
      }
    },
  },
  mutations: {
    articles(state, articles) {
      state.articles = articles;
    },
    sources(state, sources) {
      state.sources = sources;
    },
  },
  getters: {
    newsSource(state) {
      return state.newsSource;
    },
    sourceList(state) {
      return state.sourceList;
    },
    articles(state) {
      return state.articles;
    },
  },
};
