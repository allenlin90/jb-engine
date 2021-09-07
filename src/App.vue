<template>
  <v-app>
    <Dialog />
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>NEWS</h1>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main app>
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
  data: () => ({}),
};
</script>
