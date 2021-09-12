<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>All fallback</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    link: '/news',
  }),
  methods: {
    catchFromBG() {
      console.log('catch from functional');
    },
  },
};
</script>
