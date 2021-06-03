<template>
  <div class="wrapper__tillägg" @click="closeExtra">
    <section class="text">
      <fa :icon="fas.faTimes" class="close" @click="closeExtra" />
      <div class="information">
        <h3>Extratillägg inkl. moms</h3>
        <p class="text__secondary">Kabel för 16A (5 ledare) 315 kr/m</p>
        <p class="text__secondary">Kabel för 32A (5 ledare) 450 kr/m</p>
        <p class="text__secondary">Kapsling 1000kr/st</p>
        <p class="text__secondary">Markförläggning i befintligt rör 125 kr/m</p>
        <p class="text__secondary">Uppsäkring 1600kr</p>
        <p class="text__secondary">Extra arbete 700kr/h</p>
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

  top: 50%;
  left: 20%;
  transform: translateX(-50%) translateY(-20%);
  z-index: 1;

  .text {
    background-color: $white;
    box-shadow: $box-shadow;
    padding: 0;
    display: flex;
    flex-direction: column;

    .information {
      padding: 10%;
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
@media only screen and (max-width: 950px) {
  .wrapper__tillägg {
    width: 80%;
  }
}
</style>
