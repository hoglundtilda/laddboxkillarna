<template>
  <div id="zaptec__section">
    <h2>Zaptec Go</h2>
    <section class="main">
      <div class="text">
        <h3>Fungerar med alla bilar</h3>
        <p class="text__standard">
          Oavsett var du kör eller vart du ska, är Zaptec go det bästa sättet
          att ladda din resa. Med utgångspunkt i ledande Nordisk grön teknik har
          de skapat en av de minsta 22kW (Maximal laddeffekt) laddaren på
          marknaden och den är lika smart på insidan som enkel på utsidan.
        </p>
        <nuxt-link to="/laddbox"
          ><ButtonPrimary btn_text="Utforska Zaptec Go" class="primary"
        /></nuxt-link>
      </div>
      <video
        autoplay
        loop
        muted
        preload="metadata"
        src="@/assets/video/Produktvideo_Zaptec.mp4#t=0.5"
      ></video>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#zaptec__section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10% 15%;
  font-family: $headline;
  color: $white;

  h2 {
    margin: 1rem 0;
  }

  .main {
    display: flex;
  }

  video {
    width: 50%;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      width: 85%;
    }
  }
}
@media only screen and (max-width: 1300px) {
  #zaptec__section {
    .main {
      flex-direction: column;
    }
    .text {
      padding-top: 3rem;
      margin-left: 0rem;
      p {
        width: 100%;
        padding: 2rem 0;
        font-size: 1.2rem;
      }
    }
  }
}
@media only screen and (max-width: 900px) {
  #zaptec__section {
    video {
      width: 80%;
      padding: 0rem;
    }

    .text {
      p {
        width: 100%;
        padding: 2rem 0;
        font-size: 1.5rem;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  #zaptec__section {
    video {
      width: 100%;
    }

    .text {
      p {
        width: 100%;
        padding: 1rem 0;
      }
    }
  }
}
</style>
