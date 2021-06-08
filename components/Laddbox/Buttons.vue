<template>
  <div class="specification__button_wrapper">
    <button :class="setBackground ? 'dark-theme left' : 'light-theme left'">
      <a :href="produktblad" target="_blank"> Teknisk specifikation</a>
    </button>

    <button :class="setBackground ? 'dark-theme right' : 'light-theme right'">
      <a :href="produktblad" download>
        Ladda ner PDF <fa :icon="fas.faFileDownload"
      /></a>
    </button>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      nav_background: false,
    }
  },
  props: {
    produktblad: String,
  },
  computed: {
    fas() {
      return fas
    },
    setBackground() {
      const path = this.$route.path
      console.log(path)
      if (path === '/foretag-brf') {
        return true
      }
      if (path === '/laddbox') {
        return false
      }
    },
  },
}
</script>

<style lang="scss">
.light-theme {
  border: 1px solid $black;
  background: $white;

  a {
    color: $black;
  }
}
.dark-theme {
  border: 1px solid $white;
  background: $black;
  a {
    color: $white;
  }
}

.specification__button_wrapper {
  margin: 0;
  display: flex;
  font-family: $text;
  font-weight: 300;

  button {
    box-shadow: $shadow_btn_white;
    white-space: nowrap;
    padding: 8px 36px;
    background: inherit;
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
