<template>
  <div class="wrapper__images">
    <section class="box">
      <div class="images">
        <div class="small_img">
          <img
            :src="require(`~/assets/images/${smallImage1}`)"
            @click="changeBigImage(smallImage1)"
          />
          <img
            :src="require(`~/assets/images/${smallImage2}`)"
            @click="changeBigImage(smallImage2)"
          />
          <img
            :src="require(`~/assets/images/${smallImage3}`)"
            @click="changeBigImage(smallImage3)"
          />
        </div>
        <div class="big_img">
          <img :src="require(`~/assets/images/${image}`)" />
        </div>
      </div>
      <div class="colorPicker">
        <span>Välj färg:{{ input }}</span>
        <SharedColorPicker @selectColor="selectColor" />
      </div>
      <LaddboxButtons />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      smallImage1: 'zaptec_products/zaptec_white_1.png',
      smallImage2: 'zaptec_products/zaptec_white_2.png',
      smallImage3: 'zaptec_products/zaptec_white_3.png',
      image: 'zaptec_products/zaptec_white_1.png',
      input: 'white',
    }
  },
  methods: {
    selectColor(input) {
      console.log(input)
      if (input == 'white') {
        ;(this.smallImage1 = 'zaptec_products/zaptec_white_1.png'),
          (this.smallImage2 = 'zaptec_products/zaptec_white_2.png'),
          (this.smallImage3 = 'zaptec_products/zaptec_white_3.png')
        this.image = 'zaptec_products/zaptec_white_1.png'
      }
      if (input === 'rock') {
        ;(this.smallImage1 = 'zaptec_products/zaptec_grey_1.png'),
          (this.smallImage2 = 'zaptec_products/zaptec_grey_2.png'),
          (this.smallImage3 = 'zaptec_products/zaptec_grey_3.png'),
          (this.image = 'zaptec_products/zaptec_grey_1.png')
      }
      if (input === 'moss') {
        ;(this.smallImage1 = 'zaptec_products/zaptec_green_1.png'),
          (this.smallImage2 = 'zaptec_products/zaptec_green_2.png'),
          (this.smallImage3 = 'zaptec_products/zaptec_green_3.png'),
          (this.image = 'zaptec_products/zaptec_green_1.png')
      }
      if (input === 'midnight') {
        ;(this.smallImage1 = 'zaptec_products/zaptec_blue_1.png'),
          (this.smallImage2 = 'zaptec_products/zaptec_blue_2.png'),
          (this.smallImage3 = 'zaptec_products/zaptec_blue_3.png'),
          (this.image = 'zaptec_products/zaptec_blue_1.png')
      }
      if (input === 'wood') {
        ;(this.smallImage1 = 'zaptec_products/zaptec_brown_1.png'),
          (this.smallImage2 = 'zaptec_products/zaptec_brown_2.png'),
          (this.smallImage3 = 'zaptec_products/zaptec_brown_3.png'),
          (this.image = 'zaptec_products/zaptec_brown_1.png')
      }
      if (input === 'black') {
        ;(this.smallImage1 = 'zaptec_products/zaptec_black_1.png'),
          (this.smallImage2 = 'zaptec_products/zaptec_black_2.png'),
          (this.smallImage3 = 'zaptec_products/zaptec_black_3.png'),
          (this.image = 'zaptec_products/zaptec_black_1.png')
      }
    },
    changeBigImage(smallImage) {
      this.image = smallImage
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper__images {
  .box {
    .images {
      display: flex;
      justify-content: center;
    }
    .small_img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 25%;
      img {
        margin: 1rem;
      }
    }
    .big_img {
      img {
        width: 100%;
      }
    }
    span {
      font-size: 1.5rem;
    }
    .colorPicker {
      width: 100%;
      justify-self: center;
    }
  }
}
@media only screen and (max-width: 1400px) {
  .box {
    .small_img {
      img {
        margin: 0.5rem;
      }
    }
  }
}
</style>
