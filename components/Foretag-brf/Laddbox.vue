<template>
  <div class="wrapper__black">
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
              VÄLJ VEM SOM FÅR KADDA GENOM ATT LÄGGA UPP ANVÄNDATÅTKOMST
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
        <img src="@/assets/images/pro/Zaptec_Pro.png" alt="" />
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
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__black {
  padding: 10% 0;
  background-color: $black;
  color: $white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: $headline;

  h2 {
    padding: 0 0 5rem;
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
    padding: 3rem;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 33%;
  }

  .checkmark {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
