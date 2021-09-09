<template>
  <v-container style="max-width:1264px">
    <v-row justify="space-between">
      <v-col cols="6" align-self="center">
        <h1>HEADLINES</h1>
      </v-col>
      <v-col cols="6" align-self="center">
        <v-btn class="d-block ml-auto" color="primary">
          FILTER <v-icon>mdi-filter-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="post in news" :key="post.newsId">
        <news-card
          :title="post.title"
          :subtitle="post.subtitle"
          :img="post.img"
          :content="post.content"
          :newsId="post.newsId"
        ></news-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(post, index) in articles"
        :key="`n${index}`"
      >
        <news-card
          :title="post.title"
          :subtitle="parseDateString(post.publishedAt)"
          :img="post.urlToImage"
          :content="post.discription"
          :newsId="`n${index}`"
        ></news-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsCard from '../components/newsGrid/NewsCard.vue';

export default {
  components: { NewsCard },
  name: 'Home',
  data: () => ({
    news: [
      {
        newsId: '1',
        title: 'Thailand Today',
        subtitle: '2021/09/30',
        img: 'https://source.unsplash.com/daily',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium saepe voluptate dolor ea dolores. olestias nam harum animi odio porro?',
      },
      {
        newsId: '2',
        title: 'Natural Call',
        subtitle: '2021/09/30',
        img: 'https://source.unsplash.com/1600x900/?nature,water',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium saepe voluptate dolor ea dolores. olestias nam harum animi odio porro?',
      },
      {
        newsId: '3',
        title: 'Adventure',
        subtitle: '2021/09/30',
        img: 'https://source.unsplash.com/1600x900/?nature',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium saepe voluptate dolor ea dolores. olestias nam harum animi odio porro?',
      },
      {
        newsId: '4',
        title: 'Motors',
        subtitle: '2021/09/30',
        img: 'https://source.unsplash.com/1600x900/?car',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium saepe voluptate dolor ea dolores. olestias nam harum animi odio porro?',
      },
      {
        newsId: '5',
        title: 'Food',
        subtitle: '2021/09/30',
        img: 'https://source.unsplash.com/1600x900/?food',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium saepe voluptate dolor ea dolores. olestias nam harum animi odio porro?',
      },
    ],
  }),
  computed: {
    articles() {
      return this.$store.getters['news/articles'];
    },
  },
  methods: {
    parseDateString(dateStr) {
      const time = new Date(Date.parse(dateStr));
      return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
    },
  },
  async beforeCreate() {
    this.$store.dispatch('overlay');
  },
  async mounted() {
    await this.$store.dispatch('news/articles');
    await this.$store.dispatch('news/sources');
    this.$store.dispatch('overlay');
  },
};
</script>
