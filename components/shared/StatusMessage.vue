<template>
  <span :class="[statusMessage.success ? 'success' : '', 'message']">{{
    statusMessage.message
  }}</span>
</template>

<script>
export default {
  props: { statusMessage: Object },
}
</script>

<style lang="scss" scoped>
.message {
  color: $red;
  font-family: $text;
  font-size: 1rem;
  margin: 1.25rem 0.5rem;
}

.success {
  color: $black;
}
</style>
