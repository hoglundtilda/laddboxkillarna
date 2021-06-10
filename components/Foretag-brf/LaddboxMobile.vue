<template>
  <div class="wrapper__laddbox_mobile">
    <h2>Säkerhet och funktionalitet</h2>
    <section class="top-section">
      <div class="checkmark">
        <span class="text__standard">&#x2714;</span>
        <div>
          <h4>LÄS AV LADDFÖRBRUKNING</h4>
          <p class="text__secondary">SE LADDFÖRBRUKNING I ZAPTEC PORTAL</p>
        </div>
      </div>
      <div class="checkmark">
        <span class="text__standard">&#x2714;</span>
        <div>
          <h4>ANSLUT TILL INTERNET</h4>
          <p class="text__secondary">DRIFTSÄKER MED PROGRAMVARUUPPDATERINGAR</p>
        </div>
      </div>
      <div class="checkmark">
        <span class="text__standard">&#x2714;</span>
        <div>
          <h4>ANVÄNDARÅTKOMST</h4>
          <p class="text__secondary">
            VÄLJ VEM SOM FÅR LADDA GENOM ATT LÄGGA UPP ANVÄNDATÅTKOMST
          </p>
        </div>
      </div>
      <div class="checkmark">
        <span class="text__standard">&#x2714;</span>
        <div>
          <h4>LÅS LADDKABELN</h4>
          <p class="text__secondary">
            LADDKABELN KAN LÅSAS FAST I LADDSTATIONEN
          </p>
        </div>
      </div>
    </section>
    <section class="mid-section">
      <img
        src="@/assets/images/pro/Zaptec_Pro.png"
        alt="Image of a Zaptec Pro charger"
      />
    </section>
    <section class="bottom-section">
      <div class="checkmark">
        <span class="text__standard">&#x2714;</span>
        <div>
          <h4>SÄKRARE LADDNING</h4>
          <p class="text__secondary">INBYGGD JORDFELSBRYTARE</p>
        </div>
      </div>
      <div class="checkmark">
        <span class="text__standard">&#x2714;</span>
        <div>
          <h4>LJUSSTYRKA</h4>
          <p class="text__secondary">STÄLL SJÄLV IN LJUSSTYRKA</p>
        </div>
      </div>
      <div class="checkmark">
        <span class="text__standard">&#x2714;</span>
        <div>
          <h4>SNABBARE LADDNING</h4>
          <p class="text__secondary">LADDA UPP TILL 22KW PÅ 1- & 3-FASSYSTEM</p>
        </div>
      </div>
      <div class="checkmark">
        <span class="text__standard">&#x2714;</span>
        <div>
          <h4>TYP 2-KONTAKT</h4>
          <p class="text__secondary">INTERNATIONELL STANDARD</p>
        </div>
      </div>
    </section>
    <LaddboxButtons produktblad="Zaptec_Pro.pdf" class="pdf_btn" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__laddbox_mobile {
  display: none;
  padding: 10%;
  min-height: 100vh;
  background-color: $black;
  color: $white;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    padding-bottom: 2rem;
    text-align: center;
  }

  .top-section,
  .bottom-section {
    display: flex;
    flex-wrap: wrap;
  }
  .mid-section {
    display: flex;
    justify-content: center;
    padding: 3rem;
    img {
      width: 50%;
      height: auto;
    }
  }
  .checkmark {
    display: flex;
    width: 50%;
    padding: 2rem;
  }
  span {
    padding: 0 1rem;
  }
}
@media only screen and (max-width: 900px) {
  .wrapper__laddbox_mobile {
    display: flex;
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__laddbox_mobile {
    .checkmark {
      width: 100%;
      justify-content: center;
      div {
        width: 60%;
      }
    }
  }
}
@media only screen and (max-width: 500px) {
  .wrapper__laddbox_mobile {
    .checkmark {
      width: 100%;
      justify-content: center;
      div {
        width: 75%;
      }
    }
  }
}
</style>
