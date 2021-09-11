<template>
  <popover :rotate="rotate" :btnIcon="icon" btnText="FILTERS">
    <template v-slot:header>
      <v-list>
        <v-list-item>
          <v-select v-model="option" :items="options" outlined dense></v-select>
          <v-text-field
            v-model.trim="keyword"
            hint="Filter news source"
            label="Filter"
            outlined
            dense
          ></v-text-field>
        </v-list-item>
      </v-list>
    </template>
    <template v-slot:main>
      <v-list>
        <v-list-item v-for="source in sourceList" :key="source.id">
          {{ source.name }}
        </v-list-item>
      </v-list>
    </template>
    <template v-slot:footer="{ on }">
      <v-spacer></v-spacer>
      <v-btn text v-on="on">
        Cancel
      </v-btn>
      <v-btn color="primary" text @click="filter(on)">
        Search
      </v-btn>
    </template>
  </popover>
</template>

<script>
import { mapGetters } from 'vuex';
import Popover from '@/components/Popover.vue';

export default {
  components: { Popover },
  props: {
    rotate: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    keyword: '',
    option: '',
    icon: 'mdi-filter-outline',
    renderList: [],
  }),
  watch: {
    keyword(value) {
      this.renderList = this.sources.filter((source) => {
        const option = source[this.option];
        return option.includes(value);
      });
    },
  },
  computed: {
    sourceList() {
      if (this.renderList.length || this.keyword) {
        return this.renderList;
      }
      return this.sources;
    },
    options() {
      if (this.sources.length) {
        const keys = Object.keys(this.sources[0]);
        [this.option] = keys;
        return keys;
      }
      return [];
    },
    ...mapGetters('news', ['sources']),
  },
  methods: {
    filter(on) {
      on.click();
    },
  },
};
</script>
