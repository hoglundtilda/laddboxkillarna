<template>
  <div class="wrapper__om">
    <main>
      <h1>Om oss</h1>
      <p class="text__standard">
        I en revolutionerande tid då en hel bilflotta skall bytas ut från
        fossila bränslen till eldrift ser vi ett kraftigt behov av säkra och
        smidiga helhetslösningar avseende laddlösningar.
      </p>
      <p class="text__secondary">
        Vi är certifierade och behöriga elektriker med flera års samlade
        erfarenheter inom elbilsladdning. Laddboxkillarna AB grundades i början
        på 2021, dessförinnan arbetade vi flitigt med att installera olika
        former av laddlösningar hos privatpersoner samt
        företag/bostadrättsföreningar och fick privilegiet till att vara med i
        en helt ny tid av elektricitet och vara med i uppstarten av en helt ny
        bransch. Att vara kunnig inom ett område och kunna erbjuda den
        erfarenhet vi samlat på oss från alla våra tidigare installationer har
        gjort oss säkra på att vi som företag kommer kunna erbjuda en
        framtidssäkrad lösning åt dig/er som skall ha laddlösning hemma eller på
        företaget.
      </p>
      <p class="text__secondary">
        VI värdesätter denna förändring som sker just nu och BRINNER för det vi
        gör! Just detta gör att du som kund kan känna att du är i trygga händer
        och framförallt att du får en kvalitativ och smidig lösning efter dina
        önskemål. Helhetslösningen vi erbjuder är vi ensamma om och med det
        enorma utbudet av olika aktörer på marknaden såg vi möjligheten att
        kunna underlätta för dig som vill installera en laddlösning. Vår samlade
        erfarenhet av över tusen installationer av olika laddlösningar har gjort
        att vi valt med omsorg vad vi vill installera. Kvalité är vårt ledord
        och samarbetar därför endast med företag och tillverkare som håller
        måttet för att du som kund ska få den bästa möjliga laddlösningen.
      </p>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.wrapper__om {
  min-height: 100vh;
  background-image: linear-gradient(
      180deg,
      rgba(12, 12, 12, 0) 0%,
      rgba(12, 12, 12, 0.789338) 59.9%,
      rgba(12, 12, 12, 0.98) 88.54%,
      $black 94.27%
    ),
    url(@/assets/images/background_laddboxkillarna_2.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  color: $white;
  padding: 10% 0;
  font-family: $headline;

  main {
    margin: auto;
    width: 1300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text__secondary,
  .text__standard {
    padding: 2rem 0;
  }
}
@media only screen and (max-width: 1350px) {
  .wrapper__om {
    padding: 20% 10%;

    main {
      width: 100%;
    }
  }
}
@media only screen and (max-width: 1100px) {
  .wrapper__om {
  }
}
@media only screen and (max-width: 900px) {
  .wrapper__om {
    background-image: linear-gradient(
        180deg,
        rgba(18, 18, 18, 0.5) 0%,
        #121212 100%
      ),
      url(@/assets/images/background_laddboxkillarna_2_pad.png);
  }
}
@media only screen and (max-width: 600px) {
  .wrapper__om {
    background-image: linear-gradient(
        180deg,
        rgba(18, 18, 18, 0.5) 0%,
        #121212 100%
      ),
      url(@/assets/images/background_laddboxkillarna_2_mobile.png);
  }
}
</style>
