<template>
  <v-container style="max-width:1264px">
    <v-row justify="space-between">
      <v-col cols="6" sm="3" align-self="center" order="1">
        <h1>HEADLINES</h1>
      </v-col>
      <v-col cols="12" sm="7" align-self="center" order="3">
        <v-text-field
          v-model.trim="search"
          outlined
          hide-details
          label="Search"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="6" sm="2" align-self="center" order="2" order-sm="4">
        <filter-pop v-if="activeFilter" :rotate="rotate"> </filter-pop>
      </v-col>
    </v-row>
    <v-row v-if="!!articlesToRender.length">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="({
          title,
          publishedAt,
          urlToImage,
          author,
          source,
          url,
          content,
          description,
        },
        index) in articlesToRender"
        :key="`n${index}`"
      >
        <news-card
          :newsId="`n${index}`"
          :title="title"
          :subtitle="parseDateString(publishedAt)"
          :content="content ? content : description ? description : ''"
          :description="description"
          :author="author"
          :url="url"
          :publishedAt="publishedAt"
          :img="urlToImage"
          :source="source"
        ></news-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <h1 class="text-center">Oops... there is nothing to show</h1>
      </v-col>
    </v-row>
    <v-btn
      v-show="fab"
      :fab="fab"
      bottom
      right
      fixed
      @click="scrollTop"
      v-scroll="onScroll"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NewsCard from '@/components/newsGrid/NewsCard.vue';
import FilterPop from '@/components/newsGrid/FilterPop.vue';

export default {
  components: { NewsCard, FilterPop },
  name: 'Home',
  data: () => ({
    rotate: false,
    fab: false,
    keyword: '',
    search: '',
    timer: null,
  }),
  watch: {
    search(value) {
      if (value) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          this.searchNews(value);
        }, 500);
      }
    },
  },
  computed: {
    articlesToRender() {
      if (this.search) {
        return this.searchResult;
      }
      return this.articles;
    },
    activeFilter() {
      if (this.sources.length) {
        return true;
      }
      return false;
    },
    ...mapGetters('news', ['articles', 'sources', 'searchResult']),
  },
  methods: {
    parseDateString(dateStr) {
      const time = new Date(Date.parse(dateStr));
      return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
    },
    scrollTop() {
      this.$vuetify.goTo(0, {
        easing: 'easeInCubic',
        duration: '1000',
      });
    },
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    ...mapActions('news', [
      'getArticles',
      'getSources',
      'searchNews',
      'errorRequest',
    ]),
  },
  async beforeCreate() {
    this.$store.dispatch('overlay');
  },
  async mounted() {
    if (!this.articles.legnth) {
      // await this.getArticles();
    }
    this.$store.dispatch('overlay');

    this.rotate = true;
    if (!this.sources.length) {
      // await this.getSources();
    }
    this.rotate = false;

    // await this.errorRequest();
  },
};
</script>
