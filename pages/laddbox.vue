<template>
  <div class="wrapper__laddbox">
    <LaddboxImages class="laddbox" />
    <section class="information">
      <h1>Zaptec Go</h1>
      <p class="text__secondary headline">
        6 250 SEK Inkl. 25% moms installerat & klart (efter avdraget Grön
        Teknik) eller 12 500 SEK Inkl. 25% moms installerat & klart utan
        skattereduktion
      </p>
      <p class="text__secondary">
        <span>Passar alla bilar</span> samt hem och med en storlek motsvarande
        en surfplatta är Zaptec go 80 % mindre och lättare än andra laddare av
        samma typ på marknaden.
      </p>
      <p class="text__secondary">
        <span>Med Zaptec Go laddar du 10 gånger snabbare</span> än via ett
        vanligt eluttag. Med en 22kW-bil och laddning i endast en timme får du
        en räckvidd på 100 km på nolltid.
      </p>
      <p class="text__secondary">
        <span>5 års garanti. </span>
        <br />
        Zaptec go är byggd för att hålla länge. Laddaren är designad, utvecklad
        och tillverkad i Norge för nordiska förhållanden.
      </p>
      <p class="text__secondary">
        <span>Framtidssäkrad och alltid uppdaterad. </span>
        <br />
        Zaptec Go är fullmatad med den allra senaste tekniken och alltid
        uppkopplad med WiFi eller 4G LTE-M för att du ska ha tillgång till de
        senaste funktionerna och uppdateringarna.
      </p>
      <nuxt-link to="/installation"
        ><ButtonPrimaryBlack btn_text="Beställ laddbox" class="primary"
      /></nuxt-link>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__laddbox {
  min-height: 100vh;
  padding: 10%;
  display: grid;
  grid-template-areas: 'laddbox info';
  grid-template-columns: 40% 50%;
  grid-gap: 3rem;
  font-family: $headline;
  justify-content: center;

  .laddbox {
    grid-area: laddbox;
  }

  .information {
    grid-area: info;
    .headline {
      font-weight: 700;
    }

    .text__secondary {
      padding: 1rem 0rem;

      span {
        font-weight: 600;
      }
    }
    .primary {
      margin-top: 2rem;
    }
  }
}
@media only screen and (max-width: 1200px) {
  .wrapper__laddbox {
    padding: 15% 10%;
  }
}
@media only screen and (max-width: 900px) {
  .wrapper__laddbox {
    grid-template-areas:
      'laddbox'
      'info';
    grid-template-columns: 100%;
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__laddbox {
    padding-top: 30%;
    grid-template-areas:
      'laddbox'
      'info';
    grid-template-columns: 100%;
  }
}
</style>
