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
        <img
          src="@/assets/images/pro/on_poles.png"
          alt="Zaptez Pro on poles outside"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__header {
  padding: 10% 0;
  width: 1300px;
  margin: auto;
  .header__section {
    display: flex;
    padding: 3rem 0;
    justify-content: space-between;

    .header__left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;

      .contact {
        width: 60%;
        button {
          margin-top: 1rem;
        }
      }
    }
    .header__right {
      min-height: auto;
    }
  }
}
@media only screen and (max-width: 1400px) {
  .wrapper__header {
    width: 1100px;

    .header__section {
      .header__left {
        .contact {
          width: 80%;
        }
      }
    }
  }
  @media only screen and (max-width: 1150px) {
    .wrapper__header {
      padding: 10% 5%;
      width: 100%;
      .header__section {
        .header__left {
          padding-right: 1rem;
        }
        .header__right {
          img {
            width: 100%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .wrapper__header {
      width: 100%;
      .header__section {
        flex-direction: column;

        .header__left {
          padding: 3rem 0;
          width: 100%;

          .contact {
            width: 60%;
            padding: 3rem 0;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__header {
    padding: 25% 10%;
    h1 {
      font-size: 3.5rem;
    }
    .header__section {
      .header__left {
        .contact {
          width: 80%;
          button {
            margin-top: 2.5rem;
          }
        }
      }
    }
  }
}
</style>
