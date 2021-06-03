<template>
  <div class="wrapper__laddbox">
    <h1>Zaptec Go</h1>
    <LaddboxImages class="laddbox" />
    <section class="information">
      <p class="text__secondary headline">
        6 250 SEK Inkl. 25% moms installerat & klart (efter avdraget Grön Teknik
        som vi ansöker om för Er räkning)
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
      <nuxt-link to="/bestall"
        ><ButtonPrimaryBlack btn_text="Beställ laddbox" class="primary"
      /></nuxt-link>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.wrapper__laddbox {
  min-height: 100vh;
  padding: 8% 15%;
  display: grid;
  grid-template-areas: '. headline' 'laddbox info';
  grid-template-columns: 40% 40%;
  grid-template-rows: 10% 80%;
  row-gap: 2rem;
  column-gap: 5rem;
  justify-content: center;
  align-items: flex-end;

  .laddbox {
    grid-area: laddbox;
  }

  h1 {
    grid-area: headline;
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
      margin-top: auto;
      bottom: 0;
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
