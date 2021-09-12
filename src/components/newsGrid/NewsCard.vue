<template>
  <v-card class="mx-auto" :width="width">
    <v-dialog v-model="showDialog" width="500" persistent>
      <v-card>
        <v-card-title class="text grey lighten-2">
          Edit Headline
        </v-card-title>
        <v-card-text class="mt-3">
          <v-text-field
            label="Edit Header"
            v-model.trim="headline"
            @keyup.enter="confirmEdit"
            counter
            :rules="rules"
            :maxlength="headerLength"
            clearable
            >{{ showHeadline }}</v-text-field
          >
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="confirmEdit(false)">
            Close
          </v-btn>
          <v-btn color="primary">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-img height="200" :src="img"></v-img>
    <v-card-title>{{ showHeadline }} </v-card-title>
    <v-card-subtitle class="d-flex justify-space-between align-center">
      <div>{{ subtitle }}</div>
      <button-group
        :link="url"
        @edit="editPost(newsId)"
        @external="recordHistory(url)"
      >
        <template v-slot:link>
          <v-icon color="white">mdi-book</v-icon>
        </template>
        <template v-slot>
          <v-icon color="white">mdi-pencil</v-icon>
        </template>
      </button-group>
    </v-card-subtitle>
    <v-card-text>
      {{ content.split('[+')[0] }}
      <router-link :to="link">Read More...</router-link>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
import ButtonGroup from '@/components/functional/ButtonGroup.vue';

export default {
  components: { ButtonGroup },
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
    description: {
      type: null,
    },
    author: {
      type: String,
    },
    url: {
      type: String,
    },
    publishedAt: {
      type: String,
    },
    img: {
      type: String,
      // defulat: 'https://source.unsplash.com/daily',
    },
    source: {
      type: Object,
    },
    imgHeight: {
      type: Number,
      default: 200,
    },
    width: {
      default: '100%',
    },
  },
  data: () => ({
    headerLength: 42,
    showDialog: false,
    headline: '',
  }),
  computed: {
    link() {
      return `/news/${this.newsId}`;
    },
    showHeadline() {
      if (this.headline) {
        return this.truncateText(this.headline, this.headerLength);
      }
      return this.truncateText(this.title, this.headerLength);
    },
    rules() {
      const maxLength = (value) => {
        const errorMsg = `The headline can have only up to ${this.headerLength} characters`;
        return (value || '').length <= this.headerLength || errorMsg;
      };
      const required = (value) => !!value || 'Required!';
      return [maxLength, required];
    },
  },
  methods: {
    editPost() {
      if (!this.headline) {
        this.headline = this.title;
      }
      this.showDialog = !this.showDialog;
    },
    confirmEdit(check = true) {
      if (check && this.headline) {
        this.editHeadline({
          newHeadline: this.headline,
          publishedAt: this.publishedAt,
        });
      } else {
        this.headline = this.title;
      }
      this.showDialog = false;
    },
    recordHistory(url) {
      this.history({
        to: url,
        from: this.$route.path,
        timestamp: new Date(),
      });
    },
    truncateText(text, length) {
      let string = text.split('... [')[0];
      if (string.length > length) {
        string = string.substring(0, length).trim();
        if (string.substring(length - 3, length) !== '...') {
          string += '...';
        }
      }
      return string;
    },
    ...mapActions('news', ['editHeadline']),
    ...mapActions('history', ['history']),
  },
};
</script>
