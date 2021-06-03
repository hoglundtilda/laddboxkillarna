<template>
  <div class="wrapper__colorpicker">
    <form>
      <input
        v-for="color in products.colors"
        :key="color.id"
        :style="{ backgroundColor: color.color }"
        name="radio"
        value="color.color"
        type="radio"
        id="white"
        class="white"
        @click="selectColor(color)"
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
    selectColor(color) {
      this.$emit('selectColor', color)
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
    padding: 1rem;
    appearance: none;
    border-radius: 100%;
    margin: 0.5rem;
    border: none;
    box-shadow: $radio_shadow;
    transition: all 0.05s ease-in-out;
    cursor: pointer;

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
