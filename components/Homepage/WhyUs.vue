<template>
  <div id="whyus__section">
    <h2>Vilka är vi?</h2>
    <p class="text text__standard">
      I takt med att elbils försäljningen blomstrar krävs det erfarna elektriker
      som specialiserar sig inom branschen och utför säkra och kvalitativa
      installationer av marknadsledande laddboxar
    </p>
    <h4>Vi har erfarenhet av mer än tusen lyckade installationer</h4>
    <nuxt-link to="/om"
      ><ButtonGhost btn_text="Läs mer" class="ghost"
    /></nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#whyus__section {
  font-family: $headline;
  height: 70vh;
  color: $white;
  background: linear-gradient(
      180deg,
      #121212 0%,
      rgba(18, 18, 18, 0.178) 85.56%,
      #121212 100%
    ),
    url('@/assets/images/background_roads.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .text {
    width: 60%;
    padding: 1.5rem 0;
  }
  .ghost {
    margin: 2rem 0;
  }
}
@media only screen and (max-width: 900px) {
  #whyus__section {
    background: linear-gradient(
        180deg,
        #121212 0%,
        rgba(18, 18, 18, 0.74) 51.56%,
        #121212 100%
      ),
      url('@/assets/images/background_roads_pad.png');

    background-position: center;

    .text {
      width: 80%;
    }
  }
}
@media only screen and (max-width: 600px) {
  #whyus__section {
    background: linear-gradient(
        180deg,
        #121212 0%,
        rgba(18, 18, 18, 0.74) 51.56%,
        #121212 100%
      ),
      url('@/assets/images/background_roads_mobile.png');

    .text {
      width: 100%;
    }
  }
}
</style>
