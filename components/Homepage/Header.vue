<template>
  <div id="header__section">
    <section class="text">
      <h1>Din helhetslösning</h1>
      <div>
        <h4 class="check">&#x2714; Köp din laddbox</h4>
        <h4 class="check">&#x2714; Installerat & klart</h4>
        <h4 class="check">&#x2714; Inga mellanhänder</h4>
        <h4 class="check">&#x2714; Till Fast Pris</h4>
      </div>
      <p class="description text__standard">
        Vår helhetslösning går ut på att göra det så enkelt som möjligt för dig
        som kund. Vi sköter allt inkl. installation. Inga mellanhänder som drar
        ut på tiden eller trissar upp priser. Det enda du behöver göra är att
        lägga en beställning. Vi garanterar återkoppling inom 24 timmar
      </p>
    </section>
    <div class="buttons">
      <ButtonPrimary btn_text="Produkter" class="primary" />
      <ButtonGhost btn_text="Beställ här" class="ghost" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#header__section {
  color: $white;
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 0%,
      rgba(18, 18, 18, 0.87) 78.65%,
      #121212 100%
    ),
    url('@/assets/images/background_laddboxkillarna_1.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10%;

  .check {
    padding: 0.2rem 0;
  }
  .description {
    width: 60%;
    margin: 1rem 0;
  }

  .buttons {
    display: flex;
  }

  .primary {
    margin-right: 2rem;
  }
}
@media only screen and (max-width: 1100px) {
  #header__section {
    padding: 20% 10%;
  }
}
@media only screen and (max-width: 600px) {
}
</style>
