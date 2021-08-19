<template>
  <div
    class="wrapper__nav_desktop"
    :class="setBackground ? 'dark-theme' : 'light-theme'"
  >
    <div class="image-container">
      <NuxtLink to="/">
        <img src="@/assets/logo/logo_full_white.svg" alt="logga" class="logo"
      /></NuxtLink>
    </div>
    <div class="links">
      <NuxtLink to="/"> Hem </NuxtLink>
      <NuxtLink to="/om"> Om oss </NuxtLink>
      <NuxtLink to="/laddbox"> Laddbox </NuxtLink>
      <NuxtLink to="/foretag-brf"> Företag/BRF </NuxtLink>
      <NuxtLink to="/kontakt"> Kontakt </NuxtLink>
    </div>
    <NuxtLink to="/bestall">
      <ButtonGhost btn_text="Beställ laddbox" class="ghost" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav_background: false,
      scrollPosition: null,
    }
  },
  computed: {
    setBackground() {
      const path = this.$route.path

      if (path === '/' || path === '/om') {
        if (this.scrollPosition < 1000) {
          return true
        }
      } else {
        return false
      }
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
}
</script>

<style lang="scss" scoped>
.dark-theme {
  background-color: transparent;
  box-shadow: transparent;
  border: none;
}

.light-theme {
  background-color: $black;
  box-shadow: $box_shadow;
}

.wrapper__nav_desktop {
  position: fixed;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-areas: 'logo links btn';
  grid-template-columns: 20% 55% 25%;
  align-items: center;
  padding: 1rem 1.5rem;
  z-index: 5;

  .image-container {
    width: 316px;
    grid-area: logo;

    img {
      width: 100%;
      height: auto;
      shape-rendering: geometricPrecision;
    }
  }

  .links {
    grid-area: links;
    display: flex;
    justify-content: center;

    a {
      font-family: $headline;
      font-size: 1.175rem;
      font-weight: 200;
      padding: 0 1.5rem;
      color: $white;
      text-decoration: none;
    }
  }

  .ghost {
    grid-area: btn;
    justify-self: flex-start;
    align-self: flex-start;
    margin-right: auto;
    margin-left: 0;
    padding: 8px 30px;
    font-size: 1rem;
  }
}
@media only screen and (max-width: 1360px) {
  .wrapper__nav_desktop {
    .links {
      a {
        padding: 1rem;
      }
    }
  }
}
</style>
