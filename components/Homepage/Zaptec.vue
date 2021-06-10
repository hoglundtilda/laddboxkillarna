<template>
  <div id="zaptec__section">
    <h2>Zaptec Go</h2>
    <section class="main">
      <div class="text">
        <h3>Fungerar med alla bilar</h3>
        <p class="text__secondary">
          Oavsett var du kör eller vart du ska, är Zaptec Go det bästa sättet
          att ladda din resa.
        </p>
        <p class="text__secondary">
          Med utgångspunkt i ledande Nordisk grön teknik har de skapat en av de
          minsta 22kW (Maximal laddeffekt) laddaren på marknaden och den är lika
          smart på insidan som enkel på utsidan.
        </p>
        <nuxt-link to="/laddbox"
          ><ButtonPrimary btn_text="Utforska Zaptec Go" class="primary"
        /></nuxt-link>
      </div>
      <div class="div__video">
        <video
          autoplay
          loop
          muted
          preload="metadata"
          src="@/assets/video/Produktvideo_Zaptec.mp4#t=0.5"
        ></video>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#zaptec__section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  color: $white;
  margin: auto;

  h2 {
    margin: 1rem 0;
    align-self: flex-start;
  }

  .main {
    display: flex;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    p {
      width: 85%;
    }
  }
  .div__video {
    overflow: hidden;
    width: 120%;

    video {
      width: 100%;
      height: auto;
    }
  }
}
@media only screen and (max-width: 1150px) {
  #zaptec__section {
    padding: 0 10% 10%;

    .main {
      flex-direction: column;
    }
    .text {
      margin-bottom: 2rem;
      p {
        width: 70%;
        padding: 1rem 0;
      }
    }
    .div__video {
      overflow: auto;
      width: 100%;

      video {
        width: 100%;
      }
    }
    .primary {
      margin: 2rem 0;
    }
  }
}
@media only screen and (max-width: 900px) {
  #zaptec__section {
    .text {
      p {
        width: 100%;
        padding: 1rem 0;
        font-size: 1.5rem;
      }

      .primary {
        margin: 1.5rem 0;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  #zaptec__section {
    video {
      width: 100%;
    }
  }
}
</style>
