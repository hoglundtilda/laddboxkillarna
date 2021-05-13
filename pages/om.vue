<template>
  <div class="wrapper__om">
    <h1>Om oss</h1>
    <p class="text__standard">
      I en revolutionerande tid då en hel bilflotta skall bytas ut från fossila
      bränslen till eldrift ser vi ett kraftigt behov av säkra och smidiga
      helhetslösningar avseende laddlösningar.
    </p>
    <p class="text__secondary">
      Vi är certifierade och behöriga elektriker med flera års samlade
      erfarenheter inom elbilsladdning. Laddboxkillarna AB grundades i början på
      2021, dessförinnan arbetade vi flitigt med att installera olika former av
      laddlösningar hos privatpersoner samt företag/bostadrättsföreningar och
      fick privilegiet till att vara med i en helt ny tid av elektricitet och
      vara med i uppstarten av en helt ny bransch. Att vara kunnig inom ett
      område och kunna erbjuda den erfarenhet vi samlat på oss från alla våra
      tidigare installationer har gjort oss säkra på att vi som företag kommer
      kunna erbjuda en framtidssäkrad lösning åt dig/er som skall ha laddlösning
      hemma eller på företaget.
    </p>
    <p class="text__secondary">
      VI värdesätter denna förändring som sker just nu och BRINNER för det vi
      gör! Just detta gör att du som kund kan känna att du är i trygga händer
      och framförallt att du får en kvalitativ och smidig lösning efter dina
      önskemål. Helhetslösningen vi erbjuder är vi ensamma om och med det enorma
      utbudet av olika aktörer på marknaden såg vi möjligheten att kunna
      underlätta för dig som vill installera en laddlösning. Vår samlade
      erfarenhet av över tusen installationer av olika laddlösningar har gjort
      att vi valt med omsorg vad vi vill installera. Kvalité är vårt ledord och
      samarbetar därför endast med företag och tillverkare som håller måttet för
      att du som kund ska få den bästa möjliga laddlösningen.
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__om {
  height: 100vh;
  background-image: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0.5) 0%,
      #121212 100%
    ),
    url(@/assets/images/background_laddboxkillarna_2.png);
  color: $white;
  padding: 7% 10%;
  font-family: $headline;

  .text__standard,
  .text__secondary {
    width: 70%;
  }

  .text__secondary {
    padding: 2rem 0;
  }
}
</style>
