<template>
  <div :key="getImageObj.id">
    <img :src="getImageObj.full_img" class="bg" />
   </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getImageObj"])
  },
  data() {
    return {};
  },
  /* watch: {
    getImageObj(newOBJ) {
      console.log(newOBJ.id);
    }
  } */
};
</script >
<style lang="scss" scoped>
.bg {
  z-index: -1;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  transition: opacity 500ms;
}

.bg:target{
  visibility: visible;
  opacity: 1;
}
</style>