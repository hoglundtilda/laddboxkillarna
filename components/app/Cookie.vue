<template>
  <div
    class="wrapper__cookie"
    id="wrapper__cookie"
    @click="hidePopUP"
    :class="setBackground ? '' : 'display'"
  >
    <div class="container">
      <section class="text">
        <p class="text__secondary">Vi använder cookies</p>
        <p class="text__secondary">
          Genom att acceptera godkänner du användningen av cookies
        </p>
      </section>
      <section class="button">
        <ButtonPrimaryBlack btn_text="Acceptera" />
      </section>
    </div>
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

      if (this.scrollPosition < 500) {
        console.log('here')
        return true
      }
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    hidePopUP() {
      console.log('hre')
      document.getElementById('wrapper__cookie').style.display = 'none'
    },
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
}
</script>

<style lang="scss">
.wrapper__cookie {
  width: 100%;
  position: fixed;
  top: 50%;
  height: 20vh;
  background-color: $white;
  display: flex;
  justify-content: center;
  display: none;

  .container {
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
  }
}
.hide {
  display: none;
}

.display {
  display: flex;
}
@media only screen and (max-width: 950px) {
  .wrapper__cookie {
    .container {
      margin: 2rem;
    }
  }
}
</style>
