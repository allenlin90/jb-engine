<template>
  <popover :rotate="rotate" :btnIcon="icon" :btnText="btnText" class="">
    <template v-slot:header>
      <v-list>
        <v-list-item>
          <v-row no-gutters>
            <v-col cols="5">
              <v-select
                v-model="option"
                :items="options"
                dense
                outlined
                hide-details
                style="border-radius: 0;"
              ></v-select>
            </v-col>
            <v-col cols="7">
              <v-text-field
                v-model.trim="keyword"
                label="Filter"
                outlined
                dense
                flat
                solo
                hide-details
                clearable
                style="border-radius: 0;"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </template>
    <template v-slot:main>
      <v-sheet max-height="300px" class="overflow-y-auto">
        <v-list max-height="100%">
          <v-list-item-group v-model="selectedSources" color="primary">
            <v-list-item
              v-for="source in sourceList"
              :key="source.id"
              :value="source.id"
            >
              <v-list-item-content>
                {{ source.name }} - {{ source[option] }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-sheet>
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
import { mapGetters, mapActions } from 'vuex';
import Popover from '@/components/Popover.vue';

export default {
  components: { Popover },
  props: {
    rotate: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'mdi-filter-outline',
    },
    btnText: {
      type: String,
      default: 'FILTER',
    },
  },
  data: () => ({
    keyword: '',
    option: '',
    renderList: [],
    selectedSources: '',
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
      this.$emit('fetch');
      const sourceObj = this.sources.find(
        (source) => source.id === this.selectedSources,
      );
      this.searchBySource(sourceObj);
      on.click();
    },
    removeChip(index) {
      this.selectedSources.splice(index, 1);
    },
    ...mapActions('news', ['searchBySource']),
  },
};
</script>

<style lang="scss" scoped></style>
