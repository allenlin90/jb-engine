<template functional>
  <div class="btn-group" role="group" aria-label="Basic example">
    <a
      class="btn btn-light text-white"
      :href="props.link"
      target="_blank"
      @click="listeners['external']"
    >
      <slot name="link">
        {{ props.link }}
      </slot>
    </a>
    <button class="btn btn-light" @click="listeners['edit']">
      <slot>Edit</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
</style>
