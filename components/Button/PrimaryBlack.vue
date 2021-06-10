<template>
  <button @click="$emit('btn_click')" class="primary__black">
    {{ btn_text }}
  </button>
</template>

<script>
export default {
  props: { btn_text: String },
}
</script>

<style lang="scss" scoped>
.primary__black {
  @include btn;
  background-color: $black;
  color: $white;
  width: 100%;
  display: flex;
  justify-content: center;
  border: none;
  box-shadow: $shadow_btn_white;
  transition: all 0.3s ease-in-out;

  &:active {
    box-shadow: $shadow_btn_white-hover;
    transform: scale(1.03);
  }

  &:hover {
    color: $black;
    background: none;
  }
}
</style>
