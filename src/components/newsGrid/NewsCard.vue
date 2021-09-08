<template>
  <v-card class="mx-auto" :width="width">
    <v-img height="200" :src="img"></v-img>
    <v-card-title>
      <router-link :to="link" class="text-decoration-none black--text">{{
        title
      }}</router-link>
      <v-spacer></v-spacer>
      <v-icon @click="editPost(newsId)">mdi-pencil</v-icon>
    </v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text
      >{{ content }}
      <router-link :to="link">Read More...</router-link></v-card-text
    >
  </v-card>
</template>

<script>
export default {
  props: {
    newsId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      defulat: 'https://source.unsplash.com/daily',
    },
    imgHeight: {
      type: Number,
      default: 200,
    },
    width: {
      default: '100%',
    },
  },
  computed: {
    link() {
      return `/news/${this.newsId}`;
    },
  },
  methods: {
    editPost(id) {
      console.log(`editing ${id}`);
    },
  },
};
</script>
