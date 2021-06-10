<template>
  <div class="wrapper__nav">
    <AppNavDesktop class="desktop" />
    <AppNavMobile class="mobile" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__nav {
  .mobile {
    display: none;
  }
}

@media only screen and (max-width: 1240px) {
  .wrapper__nav {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
