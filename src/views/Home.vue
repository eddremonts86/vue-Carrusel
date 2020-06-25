<template>
  <div class="home">
    <carrusel />
  </div>
</template>

<script>
// @ is an alias to /src
import carrusel from "@/components/Carrusel.vue";
export default {
  name: "Home",
  components: {
    carrusel
  }
};
</script>
