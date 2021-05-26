<template>
  <div class="wrapper__nav_overlay">
    <div class="image-container">
      <NuxtLink to="/">
        <img
          src="@/assets/logo/logo_full_white.svg"
          alt="logga"
          class="logo"
      /></NuxtLink>
    </div>
    <div class="links">
      <NuxtLink to="/" @click.native="showOverlay"> Hem </NuxtLink>
      <NuxtLink to="/om" @click.native="showOverlay"> Om oss </NuxtLink>
      <NuxtLink to="/laddbox" @click.native="showOverlay"> Laddbox </NuxtLink>
      <NuxtLink to="/foretag-brf" @click.native="showOverlay">
        Företag/BRF
      </NuxtLink>
      <NuxtLink to="/kontakt" @click.native="showOverlay"> Kontakt </NuxtLink>
    </div>
    <NuxtLink to="/installation" @click.native="showOverlay">
      <ButtonGhost btn_text="Beställ laddbox" class="ghost" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  methods: {
    showOverlay() {
      this.$emit('showOverlay')
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper__nav_overlay {
  background-color: $black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: $headline;
  width: 100%;

  .image-container {
    width: 60%;
    img {
      width: 100%;
      height: auto;
      shape-rendering: crispEdges;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    text-align: center;

    a {
      padding: 2rem;
      color: $white;
      font-size: 1.5rem;
    }
  }
}
</style>
