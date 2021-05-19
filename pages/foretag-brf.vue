<template>
  <div class="wrapper__foretag">
    <div class="left">
      <h1>Företag & BRF</h1>
      <section class="foretagslosningar">
        <h3>Företagslösningar</h3>
        <p>
          Laddboxkillarna AB har fått förmånen att få arbeta med flertal
          fabrikat av laddboxar och har jobbat med laddlösningar åt
          bostadsrättsföreningar och företag vilket har gett oss gedigen
          erfarenhet av vad vi rekommenderar att installera. När det är dags att
          investera i elbilsladdning rekommenderar vi därför Zaptec som har
          utvecklat ett helt unikt sätt att balansera mellan 1- och
          3-fasladdning. Detta gör det möjligt för laddsystemet att utnyttja den
          tillgängliga strömmen effektivare än andra laddstationer. Det ger upp
          till 66 procent bättre utnyttjande av den ström du har tillgång till.
        </p>
        <p>
          Med en laddhastighet på 22 kilowatt kan elbilen laddas till en
          körsträcka på upp till 110 kilometer på bara en timme.
        </p>
        <p>
          En smart och effektiv laddstation för större parkeringsplatser i
          bostadsrättsföreningar, företag och nybyggnad.
        </p>
      </section>
      <h3>Se specifikationer nedan för ZAPTEC PRO</h3>
      <h4>Zaptec Pro</h4>
      <p>66% bättre utnyttjande av den el du har tillgänglig</p>
      <p>
        Lätt att komplettera med fler laddstationer i takt med att fler behöver
        laddmöjlighet.
      </p>
      <p>Kastnadsfria administrationssystem och betaltjänster.</p>
      <h3>Laddstationens säkerhet och funktionalitet:</h3>
      <p class="text__standard">&#x2714; SÄKRARE LADDNING</p>
      <p>INBYGGD JORDFELSSKYDD TYP B</p>
      <p class="text__standard">&#x2714; LJUSSTYRKA</p>
      <p>STÄLL SJÄLV IN LJUSSTYRKA</p>
      <p class="text__standard">&#x2714; SNABBARE LADDNING</p>
      <p>LADDA UPP TILL 22 KW</p>
      <p>PÅ 1- OCH 3-FASSYSTEM</p>
      <p class="text__standard">&#x2714; LÅS LADDKABELN</p>
      <p>LADDKABELN KAN LÅSAS FAST I LADDSTATIONEN</p>
      <p class="text__standard">&#x2714; LÄS AV LADDFÖRBRUKNING</p>
      <p>SE LADDFÖRBRUKNING I ZAPTEC PORTAL</p>
      <p class="text__standard">&#x2714; VÄLJ VEM SOM FÅR LADDA</p>
      <p>LÄGG UPP ANVÄNDARÅTKOMST</p>
      <p class="text__standard">&#x2714; ANSLUTET TILL INTERNET</p>
      <p>DRIFTSSÄKER MED PROGRAMVARUUPPDATERINGAR</p>
      <p class="text__standard">&#x2714; TYP 2-KONTAKT</p>
      <p>INTERNATIONELL STANDARD</p>
    </div>
    <div class="right">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7dSkQ2fAetA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        Är du en juridisk person hänvisar vi till förfrågningar vid mejl eller
        telefon
      </p>
      <ButtonPrimary btn_text="Kontakta oss" class="primary" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__foretag {
  min-height: 100vh;
  padding: 10%;
  font-family: $headline;
  display: grid;
  grid-template-areas: 'left right';
  grid-template-columns: 50% 50%;

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
    justify-self: center;
    padding-top: 20%;

    p {
      margin-top: 2rem;
    }
  }
  .primary {
    background-color: $black;
    color: $white;
    margin-top: 2rem;
  }
}
</style>
