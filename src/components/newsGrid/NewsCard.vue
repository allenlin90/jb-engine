<template>
  <v-card class="mx-auto" :width="width">
    <v-img height="200" :src="img"></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text>{{ content }}</v-card-text>
    <v-card-actions>
      <v-btn :to="link" color="primary">Read More</v-btn>
    </v-card-actions>
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
};
</script>
