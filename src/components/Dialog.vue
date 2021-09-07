<template>
  <v-dialog v-model="isShown" width="500" id="dialog">
    <v-card>
      <v-card-title class="text grey lighten-2">
        {{ title }}
      </v-card-title>
      <v-card-text class="mt-3">{{ message }}</v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    isShown: {
      get() {
        return this.$store.getters['dialog/isShown'];
      },
      set(value) {
        this.$store.dispatch({ type: 'dialog/isShown', isShown: value });
      },
    },
    message() {
      return this.$store.getters['dialog/message'];
    },
    title() {
      return this.$store.getters['dialog/title'];
    },
  },
  methods: {
    closeDialog() {
      this.$store.dispatch({
        type: 'dialog/isShown',
        isShown: false,
      });
    },
  },
};
</script>
