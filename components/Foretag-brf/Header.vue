<template>
  <div class="wrapper__header">
    <h1>Företagslösningar</h1>
    <section class="header__section">
      <div class="header__left">
        <p class="text__standard">
          Laddboxkillarna AB har fått förmånen att få arbeta med flertal
          fabrikat av laddboxar och har jobbat med laddlösningar åt
          bostadsrättsföreningar och företag vilket har gett oss gedigen
          erfarenhet av vad vi rekommenderar att installera.
        </p>
        <div class="contact">
          <p class="text__standard">
            För företags- och BRF lösningar hänvisar vi till förfrågningar per
            telefon eller mail.
          </p>
          <nuxt-link to="/kontakt"
            ><ButtonPrimaryBlack btn_text="Kontakt" class="primary"
          /></nuxt-link>
        </div>
      </div>
      <div class="header__right">
        <img src="@/assets/images/pro/on_poles.png" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__header {
  padding: 8% 0;
  width: 1300px;
  margin: auto;
  .header__section {
    display: flex;
    padding: 3rem 0;

    .header__left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      padding-right: 2rem;

      .contact {
        width: 60%;
        button {
          margin: 1rem 0 0;
        }
      }
    }
    .header__right {
      padding-left: 2rem;
    }
  }
}
</style>
