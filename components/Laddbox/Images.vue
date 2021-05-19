<template>
  <div class="wrapper__images">
    <section class="box">
      <div class="images">
        <div class="small_img">
          <img :src="require(`~/assets/images/${colors.white.white1}`)" />
          <img :src="require(`~/assets/images/${colors.white.white2}`)" />
          <img :src="require(`~/assets/images/${colors.white.white3}`)" />
        </div>
        <div class="big_img">
          <img :src="require(`~/assets/images/${colors.white.white1}`)" />
        </div>
      </div>
      <div>
        <span>Välj färg:</span>
        <SharedColorPicker />
      </div>
      <LaddboxButtons />
    </section>
  </div>
</template>

<script>
export default {
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
          green1: 'zaptec_products/zaptec_green_1.png',
          green2: 'zaptec_products/zaptec_green_2.png',
          green3: 'zaptec_products/zaptec_green_3.png',
        },
        blue: {
          blue1: 'zaptec_products/zaptec_blue_1.png',
          blue2: 'zaptec_products/zaptec_blue_2.png',
          blue3: 'zaptec_products/zaptec_blue_3.png',
        },
        brown: {
          brown1: 'zaptec_products/zaptec_brown_1.png',
          brown2: 'zaptec_products/zaptec_brown_2.png',
          brown3: 'zaptec_products/zaptec_brown_3.png',
        },
        black: {
          black1: 'zaptec_products/zaptec_black_1.png',
          black2: 'zaptec_products/zaptec_black_2.png',
          black3: 'zaptec_products/zaptec_black_3.png',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
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
</style>
