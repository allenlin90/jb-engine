<template>
  <v-container fluid :fill-height="!hasRecords" class="align-start">
    <v-row dense :justify="hasRecords ? 'space-between' : 'center'">
      <v-col cols="6"
        ><h1 :class="{ 'text-center': !hasRecords, 'text-start': hasRecords }">
          History
        </h1></v-col
      >
      <v-col v-if="hasRecords" cols="6" class="d-flex justify-end align-center">
        <v-btn dark color="red" @click="removeAllRecords"
          >Clear All Records</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="!hasRecords" cols="12" class="text-center">
        <h1>You have no records yet...</h1>
        <router-link to="/news">Read some News</router-link>
      </v-col>
      <v-col v-else>
        <v-card>
          <v-card-text>
            <v-list>
              <v-list-group v-for="date in dates" :key="date">
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title
                      ><h3 class="font-weight-bold">
                        {{ date }}
                      </h3></v-list-item-title
                    >
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="(record, index) in recordList(date)"
                  :key="date + index"
                >
                  <v-row>
                    <v-col cols="3"
                      >{{ getTimestamp(record.timestamp) }}
                    </v-col>
                    <v-col cols="8">
                      <router-link
                        v-if="!isExternal(record.to)"
                        :to="record.to"
                        >{{ record.to }}</router-link
                      >
                      <a v-else :href="record.to" target="_blank">{{
                        record.to
                      }}</a>
                    </v-col>
                    <v-col cols="1" class="d-flex justify-end">
                      <v-icon
                        class="d-block"
                        @click="removeRecord(date, record.timestamp)"
                        outlined
                        >mdi-trash-can-outline</v-icon
                      >
                    </v-col>
                  </v-row>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'History',
  data: () => ({
    records: null,
  }),
  computed: {
    hasRecords() {
      if (this.records) {
        return true;
      }
      return false;
    },
    dates() {
      if (this.records) {
        return Object.keys(this.records).reverse();
      }
      return [];
    },
  },
  methods: {
    removeRecord(date, timestamp) {
      this.records[date] = this.records[date].filter(
        (item) => item.timestamp !== timestamp,
      );
    },
    removeAllRecords() {
      this.records = null;
    },
    getTimestamp(timestamp) {
      const seconds = Date.parse(timestamp);
      // const year = new Date(seconds).getFullYear();
      // const month = new Date(seconds).getMonth() + 1;
      // const date = new Date(seconds).getDate();
      let hours = new Date(seconds).getHours();
      if (String(hours).length === 1) {
        hours = `0${hours}`;
      }
      let minutes = new Date(seconds).getMinutes();
      if (String(minutes).length === 1) {
        minutes = `0${minutes}`;
      }
      // return `${year}/${month}/${date} - ${hours}:${minutes}`;
      return `${hours}:${minutes}`;
    },
    getDate(timestamp) {
      const seconds = Date.parse(timestamp);
      if (!Number.isNaN(seconds) && !!seconds) {
        const dateObj = new Date(seconds);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth();
        const date = dateObj.getDate();
        return {
          dateStr: `${year}-${month + 1}-${date}`,
        };
      }
      return false;
    },
    recordList(date) {
      // localStorage.removeItem('hitstory');
      return this.records[date];
    },
    isExternal(url) {
      return url.includes('https://');
    },
  },
  beforeMount() {
    const rawRecords = localStorage.getItem('history');
    if (rawRecords) {
      const records = JSON.parse(rawRecords);
      const collection = {};
      records.forEach((record) => {
        const { to, from, timestamp } = record;
        const { dateStr } = this.getDate(timestamp);
        if (!(dateStr in collection)) {
          collection[dateStr] = [];
        }
        collection[dateStr].push({ timestamp, to, from });
      });
      const keys = Object.keys(collection);
      keys.forEach((key) => {
        collection[key] = collection[key].reverse();
      });
      this.records = collection;
    }
  },
};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}

.text-start {
  text-align: start;
}
</style>
