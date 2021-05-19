<template>
  <div class="wrapper__colorpicker">
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
</template>

<script>
export default {}
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
</style>
