<template>
  <div class="wrapper__foretag">
    <div class="text">
      <h1>Företag & BRF</h1>
      <section class="foretagslosningar">
        <h3>Företagslösningar</h3>
        <p class="text__secondary">
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
        <p class="text__secondary">
          Med en laddhastighet på 22 kilowatt kan elbilen laddas till en
          körsträcka på upp till 110 kilometer på bara en timme.
        </p>
        <p class="text__secondary">
          En smart och effektiv laddstation för större parkeringsplatser i
          bostadsrättsföreningar, företag och nybyggnad.
        </p>
      </section>
      <h3>Se specifikationer nedan för ZAPTEC PRO</h3>
      <h4>Zaptec Pro</h4>
      <p class="text__secondary">
        66% bättre utnyttjande av den el du har tillgänglig
      </p>
      <p class="text__secondary">
        Lätt att komplettera med fler laddstationer i takt med att fler behöver
        laddmöjlighet.
      </p>
      <p class="text__secondary">
        Kastnadsfria administrationssystem och betaltjänster.
      </p>
      <h3>Laddstationens säkerhet och funktionalitet:</h3>
      <p class="text__standard">SÄKRARE LADDNING</p>
      <p class="text__secondary">&#x2714; INBYGGD JORDFELSSKYDD TYP B</p>
      <p class="text__standard">LJUSSTYRKA</p>
      <p class="text__secondary">&#x2714; STÄLL SJÄLV IN LJUSSTYRKA</p>
      <p class="text__standard">SNABBARE LADDNING</p>
      <p class="text__secondary">&#x2714; LADDA UPP TILL 22 KW</p>
      <p class="text__secondary">&#x2714; PÅ 1- OCH 3-FASSYSTEM</p>
      <p class="text__standard">LÅS LADDKABELN</p>
      <p class="text__secondary">
        &#x2714; LADDKABELN KAN LÅSAS FAST I LADDSTATIONEN
      </p>
      <p class="text__standard">LÄS AV LADDFÖRBRUKNING</p>
      <p class="text__secondary">&#x2714; SE LADDFÖRBRUKNING I ZAPTEC PORTAL</p>
      <p class="text__standard">VÄLJ VEM SOM FÅR LADDA</p>
      <p class="text__secondary">&#x2714; LÄGG UPP ANVÄNDARÅTKOMST</p>
      <p class="text__standard">ANSLUTET TILL INTERNET</p>
      <p class="text__secondary">
        &#x2714; DRIFTSSÄKER MED PROGRAMVARUUPPDATERINGAR
      </p>
      <p class="text__standard">TYP 2-KONTAKT</p>
      <p class="text__secondary">&#x2714; INTERNATIONELL STANDARD</p>
    </div>
    <div class="video">
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/7dSkQ2fAetA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p class="text__secondary">
        Är du en juridisk person hänvisar vi till förfrågningar vid mejl eller
        telefon
      </p>
      <nuxt-link to="/kontakt"
        ><ButtonPrimary btn_text="Kontakta oss" class="primary"
      /></nuxt-link>
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
  grid-template-areas: 'text video';
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  .text__standard {
    font-weight: 400;
    padding: 0.5rem;
  }

  .text {
    grid-area: text;
  }

  .video {
    grid-area: video;
    justify-self: center;
    padding-top: 20%;

    iframe {
      height: 20rem;
    }

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
@media only screen and (max-width: 1200px) {
  .wrapper__foretag {
    padding: 15% 10%;
    grid-template-areas:
      'text'
      'video';
    grid-template-columns: 100%;
    grid-gap: 0rem;
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__foretag {
    padding: 20% 10%;
  }
}
</style>
