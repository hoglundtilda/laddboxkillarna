<template>
  <div class="wrapper__laddbox">
    <section class="box">
      <div class="images">
        <div class="small_img">
          <img src="@/assets/images/zaptec_products/zaptec_white_1.png" />
          <img src="@/assets/images/zaptec_products/zaptec_white_2.png" />
          <img src="@/assets/images/zaptec_products/zaptec_white_3.png" />
        </div>
        <div class="big_img">
          <img src="@/assets/images/zaptec_products/zaptec_white_1.png" />
        </div>
      </div>
      <div class="colors">
        <span>Välj färg:</span>
        <form>
          <input name="radio" value="" type="radio" id="whtie" class="white" />
          <input name="radio" value="" type="radio" id="rock" class="rock" />
          <input name="radio" value="" type="radio" id="moss" class="moss" />
          <input
            name="radio"
            value=""
            type="radio"
            id="midnight"
            class="midnight"
          />
          <input name="radio" value="" type="radio" id="wood" class="wood" />
          <input name="radio" value="" type="radio" id="black" class="black" />
        </form>
      </div>
      <div class="buttons">
        <button class="left">Teknisk specifikation</button>
        <button class="right">
          Ladda ner PDF <fa :icon="fas.faFileDownload" />
        </button>
      </div>
    </section>
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
      <ButtonPrimary btn_text="Beställ laddbox" class="primary" />
    </section>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    fas() {
      return fas
    },
  },
  data() {
    return {
      image: '',

      colors: {
        white: {
          white1: 'zaptec_products/zaptec_white_1.png',
          white2: 'zaptec_products/zaptec_white_2.png',
          white3: 'zaptec_products/zaptec_white_3.png',
        },
        grey: {
          grey1: 'zaptec_products/zaptec_grey_1.png',
          grey2: 'zaptec_products/zaptec_grey_2.png',
          grey3: 'zaptec_products/zaptec_grey_3.png',
        },
        green: {
          green1: '@/assets/images/zaptec_products/zaptec_green_1.png',
          green2: '@/assets/images/zaptec_products/zaptec_green_2.png',
          green3: '@/assets/images/zaptec_products/zaptec_green_3.png',
        },
        blue: {
          blue1: '@/assets/images/zaptec_products/zaptec_blue_1.png',
          blue2: '@/assets/images/zaptec_products/zaptec_blue_2.png',
          blue3: '@/assets/images/zaptec_products/zaptec_blue_3.png',
        },
        brown: {
          brown1: '@/assets/images/zaptec_products/zaptec_brown_1.png',
          brown2: '@/assets/images/zaptec_products/zaptec_brown_2.png',
          brown3: '@/assets/images/zaptec_products/zaptec_brown_3.png',
        },
        black: {
          black1: '@/assets/images/zaptec_products/zaptec_black_1.png',
          black2: '@/assets/images/zaptec_products/zaptec_black_2.png',
          black3: '@/assets/images/zaptec_products/zaptec_black_3.png',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper__laddbox {
  padding: 10%;
  display: flex;
  font-family: $headline;
  justify-content: center;

  .box {
    width: 40%;
    .images {
      display: flex;
    }
    .small_img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 25%;
      img {
        margin: 2rem;
      }
    }
    .big_img {
      img {
        width: 100%;
      }
    }
  }
  .colors {
    .white,
    .rock,
    .moss,
    .midnight,
    .wood,
    .black {
      width: 3rem;
      height: 3rem;
      outline: none;
      padding: 0;
      appearance: none;
      border-radius: 100%;
      margin: 0.5rem;
    }
    .white:checked,
    .rock:checked,
    .moss:checked,
    .midnight:checked,
    .wood:checked,
    .black:checked {
      transform: scale(1.35);
    }

    .white {
      box-shadow: 0px 0px 1.5px 0.001px #000000;
      background-color: $cloud_white;
    }
    .rock {
      background-color: $rock_grey;
    }
    .moss {
      background-color: $moss_green;
    }
    .midnight {
      background-color: $midnight_blue;
    }
    .wood {
      background-color: $wood_brown;
    }
    .black {
      background-color: $asphalt_black;
    }
  }
  .buttons {
    margin: 0;
    display: flex;
    font-family: $text;

    .left,
    .right {
      padding: 8px 36px;
      background: transparent;
      border: 0.00001px solid $black;
    }
    .left {
      border-radius: 80px 0px 0px 80px;
    }
    .right {
      border-radius: 0px 80px 80px 0px;
    }
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
      background: $black;
      color: $white;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 2rem;
    }
  }
}
</style>
