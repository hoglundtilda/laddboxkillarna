<template>
  <div id="whyus__section">
    <h2>Vilka är vi?</h2>
    <p class="text">
      I takt med att elbils försäljningen blomstrar krävs det erfarna elektriker
      som specialiserar sig inom branschen och utför säkra och kvalitativa
      installationer av marknadsledande laddboxar
    </p>
    <h4>Vi har erfarenhet av mer än tusen lyckade installationer</h4>
    <buttonsButtonGhost btn_text="Läs mer" class="ghost" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#whyus__section {
  font-family: $headline;
  height: 100vh;
  color: $white;
  background: linear-gradient(
      180deg,
      #121212 0%,
      rgba(18, 18, 18, 0.74) 51.56%,
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
</style>
