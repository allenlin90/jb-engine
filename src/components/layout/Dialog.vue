<template>
  <v-dialog v-model="isShown" width="500" id="dialog">
    <v-card>
      <v-card-title class="text grey lighten-2">
        <slot name="title">{{ title }}</slot>
      </v-card-title>
      <v-card-text class="mt-3">
        <slot>{{ message }}</slot>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog">
          Close
        </v-btn>
        <slot name="action"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    isShown: {
      get() {
        return this.isShown;
      },
      set(value) {
        this.toggle({ isShown: value });
      },
    },
    ...mapGetters('dialog', ['message', 'title', 'isShown']),
  },
  methods: {
    closeDialog() {
      this.toggle({
        isShown: false,
      });
    },
    ...mapActions('dialog', ['toggle']),
  },
};
</script>
