<template>
  <div class="status__message__wrapper">
    <span
      v-if="statusMessage.message && statusMessage.success === true"
      class="success"
      >{{ statusMessage.message }}
    </span>
    <span
      v-if="statusMessage.message && statusMessage.success === false"
      class="error"
      >{{ statusMessage.message }}
    </span>
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

  .error {
    color: $red;
    font-family: $text;
    font-size: 1.25rem;
    display: flex;
    margin-bottom: 1rem;
    width: 100%;
  }

  .success {
    color: $successColor;
    font-family: $text;
    font-size: 1.25rem;
    display: flex;
    margin-bottom: 1rem;
    width: 100%;
  }
}
</style>
