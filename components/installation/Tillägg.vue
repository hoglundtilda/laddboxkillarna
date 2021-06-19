<template>
  <div class="wrapper__tillägg" @click="closeExtra">
    <section class="text">
      <fa :icon="fas.faTimes" class="close" @click="closeExtra" />
      <div class="information">
        <h3>Extratillägg inkl. moms</h3>
        <div class="prices">
          <p class="text__secondary">Kabel för 16A (5 ledare)</p>
          <p class="text__secondary right">315 kr/m</p>
        </div>
        <div class="prices">
          <p class="text__secondary">Kabel för 32A (5 ledare)</p>
          <p class="text__secondary right">450 kr/m</p>
        </div>
        <div class="prices">
          <p class="text__secondary">Kapsling</p>
          <p class="text__secondary right">1000kr/st</p>
        </div>
        <div class="prices">
          <p class="text__secondary">Markförläggning i befintligt rör</p>
          <p class="text__secondary right">125 kr/m</p>
        </div>
        <div class="prices">
          <p class="text__secondary">Uppsäkring</p>
          <p class="text__secondary right">1600kr</p>
        </div>
        <div class="prices">
          <p class="text__secondary">Extra arbete</p>
          <p class="text__secondary right">700kr/h</p>
        </div>
      </div>
    </section>
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
  methods: {
    closeExtra() {
      this.$emit('showExtra')
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper__tillägg {
  position: absolute;
  width: 70%;
  top: 50%;
  left: 2rem;
  z-index: 1;

  .prices {
    display: flex;
    justify-content: space-between;
    text-decoration: underline;

    .right {
      text-align: right;
    }
  }

  .text {
    background-color: $white;
    box-shadow: $box-shadow;
    padding: 0;
    display: flex;
    flex-direction: column;

    .information {
      padding: 0 10% 10%;
    }

    p {
      padding: 0.5rem 0;
    }
  }
  .close {
    font-size: 2.5rem;
    color: $black;
    align-self: flex-end;
    margin: 1rem;
  }
}
@media only screen and (max-width: 750px) {
  .wrapper__tillägg {
    width: 90%;
  }
}
</style>
