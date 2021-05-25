<template>
  <div class="wrapper__footer">
    <div class="image-container">
      <img
        src="@/assets/logo/logo_full_white.svg"
        alt="logo with name of company"
        class="logo"
      />
    </div>
    <div class="socials">
      <img src="@/assets/logo/linkedIn.svg" alt="linkedIn" />
      <img src="@/assets/logo/instagram.svg" alt="instagram" />
      <img src="@/assets/logo/facebook.svg" alt="facebook" />
    </div>
    <div class="footer_text text__secondary">
      <p>&#169;Laddboxkillarna AB</p>
      <nuxt-link to="Kontakt"> <p class="underline">Kontakt</p></nuxt-link>
      <nuxt-link to="Policys"
        ><p class="underline">Integritetspolicy</p></nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
export default {
  computed: {
    fas() {
      return fas
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper__footer {
  padding: 3% 5%;
  color: white;
  display: grid;
  grid-template-areas:
    'img'
    'socials'
    'text';
  align-items: center;
  justify-items: center;
  box-shadow: 1px 0px 10px 1px #00000044;
  background-color: $black;

  .image-container {
    width: 50%;
    img {
      width: 100%;
      height: auto;
      shape-rendering: crispEdges;
    }
  }

  .socials {
    display: flex;

    img {
      width: 3rem;
      height: 3rem;
      margin: 1rem;
      shape-rendering: crispEdges;
    }
  }
  .footer_text {
    display: flex;
    margin: 1rem;
    a {
      text-decoration: none;
      color: $white;
      cursor: pointer;
    }
    p {
      padding: 0 1rem;
    }
    .underline {
      text-decoration: underline;
    }
  }
}
@media only screen and (max-width: 950px) {
  .wrapper__footer {
    .footer_text {

      p {
        padding: 0 0.5rem;
      }
    }
  }
}
</style>
