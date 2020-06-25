<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script>
import navigation from "@/components/Nav.vue";

export default {
  name: "index",
  components: {
    navigation
  }
};
</script>