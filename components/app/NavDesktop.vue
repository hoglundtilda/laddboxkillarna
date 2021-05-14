<template>
  <div class="wrapper__nav_desktop">
    <img
      src="@/assets/logo/logo_full_white.png"
      alt="logo with name of company"
      class="logo"
    />
    <div class="links">
      <NuxtLink to="/"> Hem </NuxtLink>
      <NuxtLink to="om"> Om oss </NuxtLink>
      <NuxtLink to="laddbox"> Laddbox </NuxtLink>
      <NuxtLink to="foretag-brf"> Företag/BRF </NuxtLink>
      <NuxtLink to="kontakt"> Kontakt </NuxtLink>
    </div>
    <NuxtLink to="installation">
      <ButtonGhost btn_text="Beställ laddbox" class="ghost" />
    </NuxtLink>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__nav_desktop {
  position: fixed;
  top: 0;
  height: 6rem;
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-areas: 'logo links btn';
  grid-template-columns: 20% 55% 25%;
  align-items: center;
  justify-items: center;
  padding: 2rem;
  background-color: $black;

  img {
    width: inherit;
    grid-area: logo;
  }

  .links {
    grid-area: links;

    a {
      font-family: $headline;
      font-size: 1.2rem;
      font-weight: 300;
      padding: 2rem;
      color: $white;
      text-decoration: none;
    }
  }

  .ghost {
    grid-area: btn;
    justify-self: flex-start;
    padding: 6px 30px;
    font-size: 1rem;
  }
}
</style>
