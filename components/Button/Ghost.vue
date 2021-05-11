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
  border: 2px solid $white;
}
</style>