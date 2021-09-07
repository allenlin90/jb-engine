<template>
  <v-container fill-height>
    <v-row>
      <h1>HEADLINES</h1>
      <v-spacer></v-spacer>
      <v-btn color="primary">FILTER <v-icon>mdi-filter-outline</v-icon></v-btn>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>
