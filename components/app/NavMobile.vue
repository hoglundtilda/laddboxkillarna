<template>
  <div class="wrapper__nav_mobile">
    <fa
      v-if="!overlay"
      :icon="fas.faBars"
      class="hamburger"
      @click="showOverlay"
    />
    <fa v-if="overlay" :icon="fas.faTimes" class="times" @click="showOverlay" />
    <AppNavOverlay v-if="overlay" @showOverlay="showOverlay" />
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      overlay: false,
    }
  },
  computed: {
    fas() {
      return fas
    },
  },
  methods: {
    showOverlay() {
      this.overlay = !this.overlay
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper__nav_mobile {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2rem;
  background-color: $black;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  box-shadow: $box_shadow;
  z-index: 5;

  .hamburger,
  .times {
    color: $white;
    font-size: 2rem;
    z-index: 100;
  }
}
</style>
