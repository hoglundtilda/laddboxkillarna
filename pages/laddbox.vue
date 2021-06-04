<template>
  <div class="wrapper__laddbox">
    <div class="headline">
      <h1>Zaptec Go</h1>
      <span class="span">6 250 SEK Inkl. 25% moms</span>
    </div>
    <LaddboxImages class="laddbox" />
    <section class="information">
      <h4 class="text_1">
        Installerat & klart efter avdraget Grön Teknik som vi ansöker om för Er
        räkning
      </h4>
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
  max-width: 1200px;
  display: grid;
  margin: auto;
  padding: 10% 0;
  grid-template-areas: 'headline headline' 'laddbox info';
  grid-template-columns: 45% 45%;
  grid-template-rows: 10% 80%;
  column-gap: 6rem;
  justify-content: center;
  align-items: flex-end;

  .headline {
    display: flex;
    gap: 2rem;
    grid-area: headline;
    justify-content: flex-end;
  }

  .span {
    font-family: $headline;
    font-weight: 500;
    font-size: 1.5rem;
    margin: 1rem 0;
    margin-top: auto;
    margin-bottom: 1.1rem;
    bottom: 0;
  }

  .laddbox {
    grid-area: laddbox;
    width: 100%;
  }

  .information {
    grid-area: info;
    width: 100%;

    h4 {
      margin: 1rem 0;
      font-weight: 200;
    }

    h4 {
      font-weight: 600;
      margin-bottom: 2rem;
    }

    .text__secondary {
      padding: 1rem 0rem;

      span {
        font-weight: 600;
      }
    }
    .primary {
      margin-top: 1.5rem;
      bottom: 0;
    }
  }
}
@media only screen and (max-width: 1400px) {
  .wrapper__laddbox {
      grid-template-areas: '. headline' 'laddbox info';

    .headline {
      flex-direction: column;
    }
    .span {
      grid-area: price;
      margin-bottom: 2rem;
    }

    .information {
      .text_1 {
        grid-area: text_1;
      }
    }
  }
}
@media only screen and (max-width: 900px) {
  .wrapper__laddbox {
    grid-template-areas:
      'headline .'
      'laddbox laddbox'
      'info info';
    grid-template-columns: 100%;
    grid-template-rows: 10% 90%;
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__laddbox {
    padding-top: 30%;
    grid-template-areas:
      'laddbox'
      'headline'
      'info';
    grid-template-columns: 100%;
  }
}
</style>
