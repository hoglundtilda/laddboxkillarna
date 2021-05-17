<template>
  <button @click="$emit('btn_click')" class="primary__btn">
    {{ btn_text }}
  </button>
</template>

<script>
export default {
  props: { btn_text: String },
}
</script>

<style lang="scss" scoped>
.primary__btn {
  @include btn;
  border: none;
}
</style>
