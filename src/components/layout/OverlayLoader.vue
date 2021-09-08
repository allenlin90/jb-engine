<template>
  <v-overlay :value="overlayLoader" dark>
    <div class="d-flex flex-column justify-center align-center">
      <v-progress-circular
        indeterminate
        size="64"
        class="mx-atuo"
      ></v-progress-circular>
      <h1>Loading</h1>
    </div>
  </v-overlay>
</template>

<script>
export default {
  computed: {
    overlayLoader() {
      return this.$store.getters.overlay;
    },
  },
};
</script>
