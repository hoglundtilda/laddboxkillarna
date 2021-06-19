<template>
  <div class="status__message__wrapper">
    <span
      v-if="statusMessage.message"
      class="message"
      :class="{'error': !statusMessage.success}"
      >{{ statusMessage.message }}</span
    >
  </div>
</template>

<script>
export default {
  props: { statusMessage: Object },
}
</script>

<style lang="scss" scoped>
.status__message__wrapper {
  margin: 1rem 0;
  .message {
    color: $black;
    font-family: $text;
    font-size: 1.25rem;
    display: flex;
    margin-bottom: 1rem;
  }

  .error {
    color: $red;
  }
}
</style>
