<template>
  <div v-html="content" class="mb" />
</template>

<script>
export default {
  props: ['mb'],
  computed: {
    content() {
      return this.$markflat.makeHtml(this.mb);
    }
  }
};
</script>
