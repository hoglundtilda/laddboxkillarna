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
      <ButtonPrimaryBlack btn_text="Beställ laddbox" class="primary" />
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__laddbox {
  padding: 10%;
  display: flex;
  font-family: $headline;
  justify-content: center;

  .laddbox {
    width: 40%;
  }

  .information {
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
</style>
