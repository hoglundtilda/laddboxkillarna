<template>
  <div class="wrapper__colorpicker">
    <form>
      <input
        :style="{ backgroundColor: 'black' }"
        name="radio"
        type="radio"
        class="black"
        checked
      />
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
form {

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

  }


  .black {
    background-color: $asphalt_black;
  }
}
@media only screen and (max-width: 700px) {
  form {
  
    .black {
      width: 3.5rem;
      height: 3.5rem;

    }
  }
}
</style>
