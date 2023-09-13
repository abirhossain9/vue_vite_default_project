<template>
  <RouterView></RouterView>
</template>

<script>
import { RouterView } from "vue-router";
export default {
  data() {
    return {};
  },
  components: { RouterView },
  methods: {},
};
</script>

<style scoped>
/* Add your component-specific CSS styles here */
h1 {
  color: blue;
}
</style>
