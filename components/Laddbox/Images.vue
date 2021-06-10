<template>
  <div class="wrapper__images">
    <section class="box">
      <div class="images">
        <div class="small_img">
          <img
            :src="require(`~/assets/images/${color.smallImage1}`)"
            @click="changeBigImage(color.smallImage1)"
            alt="image of Zaptec Go from the front"
          />
          <img
            :src="require(`~/assets/images/${color.smallImage2}`)"
            @click="changeBigImage(color.smallImage2)"
            alt="image of Zaptec Go from the side"
          />
          <img
            :src="require(`~/assets/images/${color.smallImage3}`)"
            @click="changeBigImage(color.smallImage3)"
            alt="image of Zaptec Go in profile"
          />
        </div>

        <div class="big_img">
          <img
            :src="require(`~/assets/images/${color.bigImage}`)"
            alt="Big image of Zaptec Go"
          />
        </div>
      </div>
      <div class="colorPicker">
        <span>{{ color.name }}</span>
        <SharedColorPicker @selectColor="selectColor" />
      </div>
      <LaddboxButtons produktblad="Zaptec_Go.pdf" />
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
    selectColor(color) {
      console.log(color)
      const index = this.products.colors.findIndex(function (element) {
        return element.id === color.id
      })
      console.log(index)
      this.color = this.products.colors[index]
    },
    changeBigImage(smallImage) {
      this.color.bigImage = smallImage
    },
  },
}
</script>

<style lang="scss">
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
      align-items: flex-start;
      height: 100%;
      width: 500px;
      img {
        padding: 1rem;
        transition: all 0.05s ease-in-out;
        height: auto;
        width: 100%;
        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .big_img {
      display: flex;
      align-items: flex-start;
      img {
        height: auto;
        width: 100%;
      }
    }

    .colorPicker {
      width: 100%;
      justify-self: center;
      margin: 2.5rem 2rem;

      span {
        font-size: 1.25rem;
        margin: 0.5rem;
      }
    }
  }
}
@media only screen and (max-width: 1400px) {
  .box {
    .small_img {
      .img__container {
        width: 70px;
        height: auto;
        img {
          margin: 0.5rem;
        }
      }
    }

    .colorPicker {
      justify-self: center;
      margin: 1rem 1rem;
    }
  }
}
</style>
