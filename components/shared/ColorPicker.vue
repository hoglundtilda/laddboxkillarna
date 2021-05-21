<template>
  <div class="wrapper__colorpicker">
    <form>
      <input
        v-for="color in products.colors"
        :key="color.id"
        :style="{ backgroundColor: color.color }"
        name="radio"
        value=""
        type="radio"
        id="white"
        class="white"
        @click="selectColor(color.id)"
      />
    </form>
  </div>
</template>

<script>
import products from '@/assets/productJSON/products.json'
export default {
  data() {
    return {
      products: products,
    }
  },
  methods: {
    selectColor(input) {
      this.$emit('selectColor', input)
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  .white,
  .rock,
  .moss,
  .midnight,
  .wood,
  .black {
    width: 2.5rem;
    height: 2.5rem;
    outline: none;
    padding: 0;
    appearance: none;
    border-radius: 100%;
    margin: 0.5rem;
    border: none;
    box-shadow: $radio_shadow;
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
</style>
