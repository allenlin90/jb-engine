import localArticles from '@/assets/headlines.json';
import localSources from '@/assets/newsSource.json';

export default {
  namespaced: true,
  state() {
    const apiKey = 'b397a712eedf498d910d54230c1ee4a3';
    return {
      endpoints: {
        topHeadlinesUrl: `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us`,
        sourceUrl: `https://newsapi.org/v2/sources?apiKey=${apiKey}`,
        queryUrl: `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`,
        errorUrl: 'https://newsapi.org/v2/sources?apiKey',
      },
      options: {
        category: '',
        country: '',
        id: '',
        language: '',
        source: '',
      },
      articles: [],
      sources: [],
      searchResult: [],
    };
  },
  actions: {
    async errorRequest(context) {
      try {
        await fetch(context.endpoints.errorUrl);
      } catch (error) {
        context.dispatch('dialog/toggle', { isShown: true }, { root: true });
        context.dispatch(
          'dialog/message',
          {
            message:
              'Make a wrong API call to this URL https://newsapi.org/v2/sources?apiKey and display an error message',
            title: 'Intended failure',
          },
          { root: true },
        );
      }
    },
    async getArticles(context) {
      let state = false;
      try {
        const { topHeadlinesUrl } = context.getters.endpoints;

        const response = await fetch(topHeadlinesUrl).then((res) => res.json());

        const { status, totalResults, articles } = response;

        if (status === 'ok' && totalResults) {
          context.commit('articles', articles);
          state = true;
        } else if (status === 'error') {
          context.commit('articles', localArticles.articles);
          throw new Error(response.message);
        }
      } catch (error) {
        context.dispatch('dialog/toggle', { isShown: true }, { root: true });

        context.dispatch(
          'dialog/message',
          { message: error.message, title: 'Failed loading articles' },
          { root: true },
        );
      }
      return state;
    },
    async getSources(context) {
      let state = false;
      try {
        const { sourceUrl } = context.getters.endpoints;
        const { status, sources, message } = await fetch(
          sourceUrl,
        ).then((res) => res.json());

        if (status === 'ok' && sources.length) {
          context.commit('sources', sources);
          state = true;
        } else if (status === 'error') {
          context.commit('sources', localSources.sources);
          throw new Error(message);
        }
      } catch (error) {
        context.dispatch('dialog/toggle', { isShown: true }, { root: true });
        context.dispatch(
          'dialog/message',
          { message: error.message, title: 'Failed loading sources' },
          { root: true },
        );
      }
      return state;
    },
    async searchNews(context, query) {
      let state = false;
      try {
        const { queryUrl } = context.getters.endpoints;

        const { status, articles, message } = await fetch(
          `${queryUrl}&q=${encodeURI(query)}`,
        ).then((res) => res.json());

        if (status === 'ok') {
          context.commit('searchResult', articles);
          state = true;
        } else if (status === 'error') {
          throw new Error(message);
        }
      } catch (error) {
        context.dispatch('dialog/toggle', { isShown: true }, { root: true });
        context.dispatch(
          'dialog/message',
          { message: error.message, title: 'Failed to search articles' },
          { root: true },
        );
      }
      return state;
    },
    async editHeadline(context, headline) {
      // this can be preseved to interact with server
      context.commit('editHeadline', headline);
    },
  },
  mutations: {
    articles(state, articles) {
      const indexedArticles = articles.map((article, index) => {
        const instance = { ...article };
        if (!instance.id) {
          instance.id = String(instance.source.id) + String(index);
        }
        return instance;
      });
      state.articles = indexedArticles;
    },
    sources(state, sources) {
      state.sources = sources;
    },
    searchResult(state, articles) {
      if (articles.length) {
        const indexedArticles = articles.map((article, index) => {
          const instance = { ...article };
          if (!instance.id) {
            instance.id = String(instance.source.id) + String(index);
          }
          return instance;
        });
        state.searchResult = indexedArticles;
      }
    },
    editHeadline(state, headline) {
      const { newHeadline, publishedAt } = headline;
      const index = state.articles.findIndex(
        (article) => article.publishedAt === publishedAt,
      );
      if (index > -1) {
        state.articles[index].title = newHeadline;
      }
    },
  },
  getters: {
    endpoints(state) {
      return state.endpoints;
    },
    articles(state) {
      if (!state.articles.length) {
        // use only in testing
        return localArticles.articles;
      }
      return state.articles;
    },
    sources(state) {
      return state.sources;
    },
    searchResult(state) {
      return state.searchResult;
    },
  },
};
