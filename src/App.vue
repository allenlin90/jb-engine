<template>
  <v-app dark>
    <Dialog />
    <OverlayLoader />
    <v-navigation-drawer v-model="drawer" fixed app>
      <SideNav />
    </v-navigation-drawer>
    <v-app-bar app color="primary" fixed dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="d-flex align-center">
        <router-link to="/"><h1 class="white--text">NEWS</h1></router-link>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main app>
      <router-view />
    </v-main>

    <v-footer app dark color="primary" class="d-flex justify-center">
      <h3>{{ new Date().getFullYear() }} All Rights Reserved.</h3>
    </v-footer>
  </v-app>
</template>

<script>
import Dialog from './components/layout/Dialog.vue';
import SideNav from './components/layout/SideNav.vue';
import OverlayLoader from './components/layout/OverlayLoader.vue';

export default {
  name: 'App',
  components: { Dialog, SideNav, OverlayLoader },
  data: () => ({
    drawer: false,
  }),
};
</script>
