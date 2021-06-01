<template>
  <div class="wrapper__images">
    <section class="box">
      <div class="images">
        <div class="small_img">
          <img
            :src="require(`~/assets/images/${color.smallImage1}`)"
            @click="changeBigImage(color.smallImage1)"
          />
          <img
            :src="require(`~/assets/images/${color.smallImage2}`)"
            @click="changeBigImage(color.smallImage2)"
          />
          <img
            :src="require(`~/assets/images/${color.smallImage3}`)"
            @click="changeBigImage(color.smallImage3)"
          />
        </div>
        <div class="big_img">
          <img :src="require(`~/assets/images/${color.bigImage}`)" />
        </div>
      </div>
      <div class="colorPicker">
        <span>Välj färg: {{ color.name }}</span>
        <SharedColorPicker @selectColor="selectColor" />
      </div>
      <LaddboxButtons />
    </section>
  </div>
</template>

<script>
import Products from '@/assets/productJSON/products.json'
export default {
  data() {
    return {
      color: {
        smallImage1: 'zaptec_products/zaptec_white_1.png',
        smallImage2: 'zaptec_products/zaptec_white_2.png',
        smallImage3: 'zaptec_products/zaptec_white_3.png',
        bigImage: 'zaptec_products/zaptec_white_1.png',
        name: 'Cloud White',
      },

      products: Products,
    }
  },
  methods: {
    selectColor(colorId) {
      const index = this.products.colors.findIndex(function (element) {
        return element.colorId === input
      })
      this.color = this.products.colors[index]
    },
    changeBigImage(smallImage) {
      this.color.bigImage = smallImage
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
      cursor: pointer;

      img {
        margin: 1rem;
        transition: all 0.05s ease-in-out;

        &:hover {
          transform: scale(1.05);
        }
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
      margin: 2.5rem 2rem;
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

    .colorPicker {
      justify-self: center;
      margin: 1rem 1rem;
    }
  }
}
</style>
