<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>NEWS</h1>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main app>
      <Dialog />
      <router-view />
    </v-main>

    <v-footer app dark color="primary">{{ new Date().getFullYear() }}</v-footer>
  </v-app>
</template>

<script>
import Dialog from './components/Dialog.vue';

export default {
  name: 'App',
  components: { Dialog },
  data() {
    return {};
  },
  mounted() {
    const message = this.$store.getters['dialog/message'];
    console.log(message);
  },
};
</script>
