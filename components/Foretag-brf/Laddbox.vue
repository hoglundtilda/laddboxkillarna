<template>
  <div class="wrapper__black">
    <div class="desktop">
      <h2>Säkerhet och funktionalitet</h2>
      <section class="laddbox">
        <section class="left">
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
              <p class="text__secondary">
                DRIFTSÄKER MED PROGRAMVARUUPPDATERINGAR
              </p>
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
        <section class="laddboxImg">
          <img
            src="@/assets/images/pro/Zaptec_Pro.png"
            alt="Image of a Zaptec Pro charger"
          />
        </section>
        <section class="right">
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
              <p class="text__secondary">
                LADDA UPP TILL 22KW PÅ 1- & 3-FASSYSTEM
              </p>
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
      </section>
      <LaddboxButtons produktblad="Zaptec_Pro.pdf" class="pdf_btn" />
    </div>
    <Foretag-brfLaddboxMobile class="mobile" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.wrapper__black {
  .desktop {
    padding: 10% 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $white;
    background-color: $black;
    font-family: $headline;
  }

  h2 {
    padding-bottom: 5rem;
  }

  .laddbox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 1300px;
    margin: auto;

    h4 {
      font-size: 1.5rem;
    }

    .text__secondary {
      font-size: 1rem;
    }

    span {
      padding: 0 1rem;
    }
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 33%;
  }

  .laddboxImg {
    img {
      padding: 2rem;
      height: auto;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 33%;
  }

  .checkmark {
    display: flex;
  }
  .pdf_btn {
    margin-top: 5rem;
  }
  .mobile {
    display: none;
  }
}

@media only screen and (max-width: 1250px) {
  .wrapper__black {
    .desktop {
      min-height: 100vh;
      padding: 10% 5%;
    }

    .laddbox {
      width: 100%;
    }

    .laddboxImg {
      img {
        padding: 2rem;
      }
    }
  }
}
@media only screen and (max-width: 1150px) {
  .wrapper__black {
    .laddbox {
      height: 70vh;
    }
    .laddboxImg {
      display: flex;
      align-self: center;
      justify-content: center;
      img {
        padding: 2rem;
        width: 90%;
      }
    }
  }
}
@media only screen and (max-width: 900px) {
  .wrapper__black {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }
}
</style>
