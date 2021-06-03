<template>
  <div>
    <div class="buttons">
      <button class="left">
        <a :href="produktblad" target="_blank"> Teknisk specifikation</a>
      </button>

      <button class="right">
        <a :href="produktblad" download>
          Ladda ner PDF <fa :icon="fas.faFileDownload"
        /></a>
      </button>
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    produktblad: String,
  },
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
