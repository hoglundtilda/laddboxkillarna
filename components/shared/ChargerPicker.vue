<template>
  <div class="wrapper__colorpicker">
    <form>
      <div
        :class="['laddbox', 'easee', isEasee ? 'easeChecked' : '']"
        @click="selectCharger('Easee')"
      >
        <div class="imageContainer">
          <img src="~/assets/images/easee/front_easee.png" alt="" />
        </div>
        <div class="info">
          <h4>Easee</h4>
          <h5>6 990:-</h5>
        </div>
      </div>
      <div
        :class="['laddbox', 'easee', isZaptec ? 'zaptecChecked' : '']"
        @click="selectCharger('Zaptec Go')"
      >
        <div class="imageContainer">
          <img
            src="~/assets/images/zaptec_products/zaptec_black_1.png"
            alt=""
          />
        </div>
        <div class="info">
          <h4>Zaptec Go</h4>
          <h5>6 495:-</h5>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEasee: false,
      isZaptec: false,
    }
  },
  methods: {
    selectCharger(charger) {
      if (charger === 'Easee') {
        this.isEasee = true
        this.isZaptec = false
      } else if (charger === 'Zaptec Go') {
        this.isZaptec = true
        this.isEasee = false
      }

      this.$emit('selectCharger', charger)
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;

  .laddbox {
    width: 50%;
    display: flex;
    padding: 12px;
    border-radius: 2rem;
    opacity: 0.80;

    .imageContainer {
      width: 100px;

      img {
        width: 100%;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .easeChecked {
    box-shadow: $shadow_btn_black-hover;
    transform: scale(1.2);
    opacity: 1;
  }

  .zaptecChecked {
    box-shadow: $shadow_btn_black-hover;
    transform: scale(1.2);
    opacity: 1;
  }

  .easee,
  .zaptec {
    &:hover {
      transform: scale(1.2);
      transition: ease-in-out 0.2s;
    }
  }
}
@media only screen and (max-width: 700px) {
  form {
    .easee,
    .zaptec {
           &:checked:hover {
        transform: scale(1.2);
      }
      &:hover {
        transform: scale(1.08);
      }
      &:checked {
        transform: scale(1.2);
      }
    }
  }
}
</style>
