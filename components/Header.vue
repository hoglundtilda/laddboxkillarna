<template>
  <div id="header__section">
    <section class="text">
      <h1>Din helhetslösning</h1>
      <div>
        <p class="check">&#x2714; Köp din laddbox</p>
        <p class="check">&#x2714; Installerat & klart</p>
        <p class="check">&#x2714; Inga mellanhänder</p>
        <p class="check">&#x2714; Till Fast Pris</p>
      </div>
      <p class="description">
        Vår helhetslösning går ut på att göra det så enkelt som möjligt för dig
        som kund. Vi sköter allt inkl. installation. Inga mellanhänder som drar
        ut på tiden eller trissar upp priser. Det enda du behöver göra är att
        lägga en beställning. Vi garanterar återkoppling inom 24 timmar
      </p>
    </section>
    <button>Produkter</button>
    <button>Beställ här</button>
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
    padding: 0.5rem 0;
  }
  .description {
    width: 50%;
  }
}
</style>
