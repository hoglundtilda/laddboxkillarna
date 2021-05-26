<template>
  <div>
    <div class="buttons">
      <button class="left">Teknisk specifikation</button>
      <button class="right">
        Ladda ner PDF <fa :icon="fas.faFileDownload" />
      </button>
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    fas() {
      return fas
    },
  },
}
</script>

<style lang="scss" scoped>
.buttons {
  margin: 0;
  display: flex;
  font-family: $text;
  width: 100%;

  button {
    box-shadow: $shadow_btn_white;
    background: $white;
  }

  .left,
  .right {
    padding: 8px 36px;
    background: transparent;
    border: 1px solid $black;
  }
  .left {
    border-radius: 80px 0px 0px 80px;
    width: 50%;
  }
  .right {
    border-radius: 0px 80px 80px 0px;
    width: 50%;
  }
}
</style>
