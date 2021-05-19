<template>
  <div class="wrapper__nav_overlay">
    <img
      src="@/assets/logo/logo_full_white.png"
      alt="logo with name of company"
      class="logo"
    />
    <div class="links">
      <NuxtLink to="/"> Hem </NuxtLink>
      <NuxtLink to="/om"> Om oss </NuxtLink>
      <NuxtLink to="/laddbox"> Laddbox </NuxtLink>
      <NuxtLink to="/foretag-brf"> Företag/BRF </NuxtLink>
      <NuxtLink to="/kontakt"> Kontakt </NuxtLink>
    </div>
    <NuxtLink to="/installation">
      <ButtonGhost btn_text="Beställ laddbox" class="ghost" />
    </NuxtLink>
  </div>
</template>

<script>
export default {}
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

  img {
    width: 50%;
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
