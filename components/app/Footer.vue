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
      <!-- <a href=""><img src="@/assets/logo/linkedIn.svg" alt="linkedIn" /> </a> -->
     <a href="https://instagram.com/laddboxkillarna?utm_medium=copy_link" target="_blank"> <img src="@/assets/logo/instagram.svg" alt="instagram" /></a>
      <a href="https://www.facebook.com/Laddboxkillarna-101947058713590/" target="_blank" ><img src="@/assets/logo/facebook.svg" alt="facebook" /></a>
    </div>
    <div class="footer_text text__secondary">
      <p>&#169;Laddboxkillarna AB</p>
      <p>Org nr: 559311-4142</p>
      <nuxt-link to="kontakt"> <p class="underline">Kontakt</p></nuxt-link>
      <nuxt-link to="policys"
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
  padding: 1% 5%;
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
    width: 35%;
    img {
      width: 100%;
      height: auto;
      shape-rendering: geometricPrecision;
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
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
    padding: 5%;
    .footer_text {
      p {
        padding: 0 0.5rem;
      }
    }
    .image-container {
      width: 50%;
    }
  }
}
</style>
