<template>
  <div class="wrapper__policys">
    <h1>Integritetspolicy</h1>
    <h3>Hur och varför behandlar vi dina uppgifter?</h3>
    <div class="text__div">
      <p class="text__standard">Vem ansvarar för dina personuppgifter?</p>
      <p class="text__secondary">
        Laddboxkillarna AB arbetar ständigt med att vidta alla lämpliga tekniska
        och organisatoriska åtgärder som i varje enskilt fall krävs för att
        skydda dina personuppgifter och i övrigt säkerställa att behandlingen
        sker enligt gällande lagstiftning. Vår personal utbildas kontinuerligt
        för att uppfylla de krav som ställs enligt lagen.
      </p>
    </div>
    <div class="text__div">
      <p class="text__standard">Var kommer uppgifterna ifrån?</p>
      <p class="text__secondary">
        Uppgifterna kommer från dig när du fyller i dina kontaktuppgifter på vår
        hemsida eller ingår i avtal med oss i samband med installation av
        laddbox.
      </p>
    </div>
    <div class="text__div">
      <p class="text__standard">Vilka uppgifter samlar vi in och varför?</p>
      <p class="text__secondary">
        Namn, adress, telefonnummer och epostadress lagras för att kunna skapa
        kontakt med dig för att möjliggöra en installation.
      </p>
      <p>
        Vi lagrar dina uppgifter under sju år med hänvisning till
        bokföringslagen
      </p>
    </div>
    <div class="text__div">
      <p class="text__standard">Vem har tillgång till dina uppgifter?</p>
      <p class="text__secondary">
        Endast Laddboxkillarna AB har tillgång till dina uppgifter, vi kommer
        aldrig att lämna ut dina uppgifter till tredje part.
      </p>
    </div>
    <div class="text__div">
      <p class="text__standard">
        Dina rättigheter gällande dina personuppgifter
      </p>
      <p class="text__secondary">
        Att begära utdrag av all information som vi har lagrad om dig. Rätt att
        raderas ur vårt system, med undantag det som gäller enligt
        bokföringslagen. Rätt att klaga till tillsynsmyndighet.
      </p>
    </div>
    <p class="big">
      Tveka inte att kontakta oss om du har några frågor om vår behandling av
      dina personuppgifter.
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__policys {
  min-height: 100vh;
  padding: 10%;
  font-family: $headline;
  h3 {
    font-size: 2rem;
    font-weight: 300;
  }

  .text__div {
    margin: 1.5rem 0;

    .text__standard {
      font-weight: 500;
    }
  }
  .big {
    font-weight: 700;
    font-size: 1.2rem;
  }
}
@media only screen and (max-width: 950px) {
  .wrapper__policys {
    padding: 20% 10%;
  }
}
</style>
