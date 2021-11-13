<template>
  <div class="wrapper__images">
    <section class="box_easee">
      <div class="easee_images">
        <div class="easee_small_img">
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
      </div>
      <LaddboxButtons produktblad="Easee_Produktblad.pdf" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: {
        smallImage1: 'easee/front_easee.png',
        smallImage2: 'easee/right_easee.png',
        smallImage3: 'easee/left_easee.png',
        bigImage: 'easee/front_easee.png',
      },

    }
  },
  methods: {

    changeBigImage(smallImage) {
      this.color.bigImage = smallImage
    },
  },
}
</script>

<style lang="scss">
.wrapper__images {
    width: 50%;
  .box_easee {
      padding-right: 4rem;
      .easee_images {
      display: flex;
      justify-content: center;
      padding-bottom: 2.5rem;
    }

    .easee_small_img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      width: 220px;
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

  
  }
}
@media only screen and (max-width: 1400px) {
    .wrapper__images {
  .box_easee {
    .easee_small_img {
      .img__container {
        width: 70px;
        height: auto;
        img {
          margin: 0.5rem;
        }
      }
    }
  }
}}
@media only screen and (max-width: 800px) {
    .wrapper__images {
        width: 100%;
        padding-bottom: 1rem;
  .box_easee {
      padding: 0;
    .easee_small_img {
      .img__container {
        width: 70px;
        height: auto;
        img {
          margin: 0.5rem;
        }
      }
    }
  }
    }
}
</style>
