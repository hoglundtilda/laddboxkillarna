<template>
  <div class="wrapper__footer">
    <img
      src="@/assets/logo/logo_full_white.png"
      alt="logo with name of company"
      class="logo"
    />
    <div class="socials">
      <img src="@/assets/logo/Linkedin.png" alt="" />
      <img src="@/assets/logo/Instagram.png" alt="" />
      <img src="@/assets/logo/Facebook.png" alt="" />
    </div>
    <div class="footer_text text__secondary">
      <p>&#169; Laddboxkillarna AB</p>
      <p class="underline">Kontakt</p>
      <p class="underline">Integritetspolicy</p>
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

  img {
    width: 50%;
  }
  .socials {
    display: flex;

    img {
      width: 3rem;
      height: 3rem;
      margin: 1rem;
    }
  }
  .footer_text {
    display: flex;
    margin: 1rem;
    p {
      padding: 0 1rem;
    }
    .underline {
      text-decoration: underline;
    }
  }
}
</style>
