<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-on="on"
        v-bind="attrs"
        class="d-block ml-auto"
        color="primary"
        :disabled="rotate"
      >
        {{ btnText }}
        <span :class="{ rotate }"
          ><v-icon>{{ icon }}</v-icon></span
        >
      </v-btn>
    </template>
    <v-card>
      <slot name="header"> </slot>

      <v-divider></v-divider>

      <slot name="main"> </slot>

      <v-card-actions>
        <slot name="footer" v-bind:on="onCancel">
          <v-spacer></v-spacer>
          <v-btn text @click="togglePop">
            Cancel
          </v-btn>
          <v-btn color="primary" text @click="togglePop">
            Cofirm
          </v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    rotate: {
      type: Boolean,
      default: false,
    },
    btnIcon: {
      type: String,
      default: 'mdi-filter-outline',
    },
    btnText: {
      type: String,
      default: 'OPTIONS',
    },
  },
  data: () => ({
    menu: false,
    fav: true,
    message: false,
    hints: true,
  }),
  computed: {
    icon() {
      if (this.rotate) {
        return 'mdi-loading';
      }
      return this.btnIcon;
    },
    onCancel() {
      const popover = this.togglePop;
      return {
        click: popover,
      };
    },
    ...mapGetters('news', ['sources']),
  },
  methods: {
    togglePop() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style lang="scss" scoped>
.rotate {
  animation: rotate 0.7s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
