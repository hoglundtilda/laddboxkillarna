<template>
  <div v-if="cookieConsent" class="wrapper__cookie" id="wrapper__cookie">
    <div class="container">
      <section class="text">
        <p class="text__secondary">Vi använder cookies</p>
        <p class="text__secondary">
          Genom att acceptera godkänner du användningen av cookies
        </p>
        <NuxtLink to="/policys"> Läs mer om cookies</NuxtLink>
      </section>
      <section class="button">
        <ButtonPrimaryBlack
          btn_text="Acceptera"
          @btn_click="cookieConsentAccept"
        />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookieConsent: false,
    }
  },
  methods: {
    cookieConsentAccept() {
      this.cookieConsent = false
    },
  },
  mounted() {
    console.log(document.cookie)
  },
}
</script>

<style lang="scss">
.wrapper__cookie {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 20vh;
  background-color: $white;
  display: flex;
  justify-content: center;

  .container {
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
  }
}

@media only screen and (max-width: 950px) {
  .wrapper__cookie {
    .container {
      margin: 2rem;
    }
  }
}
</style>
