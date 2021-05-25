<template>
  <button @click="$emit('btn_click')" class="ghost__btn">
    {{ btn_text }}
  </button>
</template>

<script>
export default {
  props: { btn_text: String },
}
</script>

<style lang="scss" scoped>
.ghost__btn {
  @include btn;
  color: $white;
  border: 1.5px solid $white;
  transition: all 0.15s ease-in;
  
  &:hover {
    background: $white;
    color: $black;
    font-weight: 500;
  }
}
</style>