<template>
  <div class="wrapper__zaptecPro">
    <h2>Zaptec Pro</h2>
    <section class="pro">
      <div class="pro__left">
        <h3>Vår rekommendation av laddsystem</h3>
        <article>
          <h4>Effektivt</h4>
          <p class="text__standard">
            Zaptec Pro har ett helt unikt sätt att balansera mellan 1- och
            3-fasladdning. Detta gör det möjligt att utmyttja all den
            tillgängliga strömmen effektivare än andra laddstationer.
          </p>
        </article>
        <article>
          <h4>Smart</h4>
          <p class="text__standard">
            Laddsystemet fördelar strömmen smart mellan alla laddstationer som
            du genom Zaptec Portal kan ha full överblick över elförbrukningen.
          </p>
        </article>
        <article>
          <h4>4g</h4>
          <p class="text__standard">
            Med 4G i laddstationen behöver ni inte installera ytterligare
            nätverkslösning vilket innebär lägre installationskostnader.
          </p>
        </article>
      </div>
      <div class="pro__right">
        <img src="@/assets/images/pro/zaptec_app.png" alt="" />
        <article>
          <h4>Zaptec Portal</h4>
          <p class="text__standard">
            I Zaptec Portal finns alla verktyg för att få en överblick över
            status på Ert laddsystem, som elförbrukning, laddhistorik. Här kan
            Ni också styra alla laddstationer.
          </p>
        </article>

        <a href="https://zaptec.com/sv/zaptec-portal/" target="_blank"
          ><ButtonPrimary btn_text="Mer om Zaptec Portal" class="primary"
        /></a>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__zaptecPro {
  width: 1300px;
  margin: auto;

  .pro {
    display: flex;
    justify-content: space-between;

    article {
      padding: 1rem 0;

      h4 {
        font-weight: 700;
      }
    }

    .pro__left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 45%;
    }
    .pro__right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 45%;

      img {
        width: 60%;
      }
      .primary {
        background-color: $orange;
        text-decoration: underline;
        box-shadow: $shadow_btn_black;
      }
    }
  }
}
@media only screen and (max-width: 1400px) {
  .wrapper__zaptecPro {
    width: 1100px;
  }
}
@media only screen and (max-width: 1150px) {
  .wrapper__zaptecPro {
    padding: 10% 5%;
    width: 100%;

    .pro {
      .pro__left {
        padding-right: 1rem;
      }
      .pro__right {
        padding-left: 1rem;

        img {
          width: 80%;
        }
      }
    }
  }
}
@media only screen and (max-width: 910px) {
  .wrapper__zaptecPro {
    padding: 0 10%;
    .pro {
      flex-direction: column;
      align-items: center;

      article {
        padding: 1.5rem 0;
      }
      .pro__left {
        width: 100%;
      }
      .pro__right {
        width: 100%;
        img {
          width: 50%;
          padding: 2rem 0;
        }
      }
    }
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__zaptecPro {
    .pro {
      .pro__right {
        img {
          width: 100%;
          padding: 4rem 0;
        }
        .primary {
          margin-top: 2.5rem;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
