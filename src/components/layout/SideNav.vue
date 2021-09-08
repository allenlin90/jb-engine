<template>
  <v-list>
    <v-list-item-group color="primary">
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" exact>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-newspaper-variant',
          title: 'News',
          to: '/news',
        },
        {
          icon: 'mdi-history',
          title: 'History',
          to: '/news/history',
        },
      ],
    };
  },
};
</script>
