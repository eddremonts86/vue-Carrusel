<template>
  <div class="home">
    <carrusel />
    <hover />
  </div>
</template>

<script>
// @ is an alias to /src
import carrusel from "@/components/Carrusel.vue";
import hover from "@/components/Hover.vue";
export default {
  name: "Home",
  components: {
    carrusel,
    hover
  }
};
</script>
