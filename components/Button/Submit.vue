<template>
  <button @click.prevent="$emit('btn_click')" type="submit" class="submit__black">
    {{ btn_text }}
  </button>
</template>

<script>
export default {
  props: { btn_text: String },
}
</script>

<style lang="scss" scoped>
.submit__black {
  @include btn;
  background-color: $black;
  color: $white;
  width: 100%;
  display: flex;
  justify-content: center;
  border: none;
  box-shadow: $shadow_btn_black;
  transition: all 0.3s ease-in-out;

  &:active {
    box-shadow: $shadow_btn_black-hover;
    transform: scale(1.03);
  }

  &:hover {
    color: $black;
    background: none;
  }
}
</style>
