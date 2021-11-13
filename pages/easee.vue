<template>
  <div class="wrapper__easee">
    <div class="title">
      <h1>Easee</h1>
    </div>

    <div class="divider">
      <LaddboxEaseeImages class="divider" />
      <section class="information">
        <h3>6 495 SEK <span class="moms"> Inkl. 25% moms</span></h3>
        <p class="text__secondary headline">
          Vi ansöker om avdraget Grön Teknik för er räkning
          <span class="moms">(Ord pris: 12 990:-) </span>
        </p>
        <p class="text__secondary">
          <span>Universell</span>, passar alla elbilar och laddhybrider. Easee
          laddbox känner automatiskt av vilken kraft fordonet behöver, 1.4 -
          22kW.
        </p>
        <p class="text__secondary">
          <span>Snabbare laddning</span> än via ett vanligt eluttag. Med en
          22kW-bil och laddning i endast en timme får du en räckvidd på 100 km
          på nolltid.
        </p>
        <p class="text__secondary">
          <span>Tålig </span>
          <br />
          Laddaren är designad, utvecklad och tillverkad i Norge för nordiska
          förhållanden.
        </p>
        <p class="text__secondary">
          <span>Framtidssäkrad och alltid uppdaterad. </span>
          <br />
          Easee är fullmatad med den allra senaste tekniken och alltid
          uppkopplad med WiFi eller 4G för att du ska ha tillgång till de
          senaste funktionerna och uppdateringarna. Easee upptäcker om det
          uppstår problem och utför förebyggande underhåll.
        </p>
        <nuxt-link to="/bestall"
          ><ButtonPrimaryBlack btn_text="Beställ laddbox" class="primary"
        /></nuxt-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Easee charger | Laddboxkillarna Göteborg',
    slug: 'https://www.laddboxkillarna.se/Easee',
    meta: [
      {
        hid: 'easee',
        name: 'easee',
        content:
          'Köp Easee laddbox - Marknadens smartaste laddbox med både WiFi & 4G uppkoppling. Passar alla bilar. 50% med avdraget Grön Teknik',
      },
    ],
  },
}
</script>

<style lang="scss">
.wrapper__easee {
  min-height: 100vh;
  padding: 10% 0;
  width: 1300px;
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
    width: 20%;
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
      margin: 10px 0;
      span {
        font-weight: 600;
      }
    }

    a {
      margin-top: 1.5rem;
    }
  }
}
@media only screen and (max-width: 1350px) {
  .wrapper__easee {
    width: 1100px;
  }
}

@media only screen and (max-width: 1150px) {
  .wrapper__easee {
    width: 100%;
    padding: 15% 5%;

    .title {
      padding: 0 2rem;
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
  .wrapper__easee {
    padding: 20% 10%;
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
      padding: 0;

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
</style>
