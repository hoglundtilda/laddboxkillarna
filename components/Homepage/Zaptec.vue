<template>
  <div id="zaptec__section">
    <div class="grid">
      <video
        controls
        muted
        preload="auto"
        src="@/assets/video/Produktvideo_Zaptec.mp4"
        type="video/mp4"
      ></video>
      <div class="text">
        <h2>Zaptec Go</h2>
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
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#zaptec__section {
  padding: 10%;
  font-family: $headline;
  color: $white;

  .grid {
    display: grid;
    grid-template-areas: 'video text';
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }
  video {
    grid-area: video;
    width: 90%;
    padding: 2rem;
    justify-self: center;
    z-index: 0;
  }

  .text {
    grid-area: text;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      width: 80%;
      padding: 1rem 0;
    }
  }
}
@media only screen and (max-width: 1300px) {
  #zaptec__section {
    .text {
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
    .grid {
      grid-template-areas:
        'text'
        'video';
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 2rem;
    }
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
    .grid {
      grid-template-areas:
        'text'
        'video';
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
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
