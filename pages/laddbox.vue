<template>
  <div class="wrapper__laddbox">
    <div class="title">
      <h1>Zaptec Go</h1>
    </div>

    <div class="divider">
      <LaddboxImages class="laddbox" />
      <section class="information">
        <h3>6 250 SEK <span class="moms"> Inkl. 25% moms</span></h3>
        <p class="text__secondary headline">
          Vi ansöker om avdraget Grön Teknik för er räkning
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
          Zaptec go är byggd för att hålla länge. Laddaren är designad,
          utvecklad och tillverkad i Norge för nordiska förhållanden.
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
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.wrapper__laddbox {
  min-height: 100vh;
  padding: 8% 0;
  width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    width: 50%;
    transform: translateX(100%);
  }

  .divider {
    display: flex;
    justify-content: space-between;
    .moms {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }

  .laddbox {
    width: 45%;
  }

  .information {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .headline {
      font-weight: 700;
    }

    .text__secondary {
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

@media only screen and (max-width: 1150px) {
  .wrapper__laddbox {
    width: 100%;
    padding: 15% 5%;
    .divider {
      padding: 1rem;
    }
    .laddbox {
      width: 50%;
    }
    .information {
      padding: 0 2rem;
    }
  }
}
@media only screen and (max-width: 800px) {
  .wrapper__laddbox {
    .title {
      width: 100%;
      transform: translateX(0%);
      margin: 2rem 0;
    }
    .divider {
      flex-direction: column;
    }
    .information {
      width: 100%;

      .primary {
        margin-top: 2rem;
      }
    }
    .laddbox {
      width: 100%;
      margin: 2rem 0;
    }
    .text__secondary {
      margin: 1rem 0;
    }
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__laddbox {
  }
}
</style>
