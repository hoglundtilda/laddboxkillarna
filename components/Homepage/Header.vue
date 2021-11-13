<template>
  <div id="header__section">
    <div class="container">
      <section class="text">
        <h1>Din helhetslösning</h1>
        <div>
          <h4 class="check"> <span></span> Laddbox</h4>
          <h4 class="check"> <span></span> Installation</h4>
          <h4 class="check"> <span></span> Grön Teknik avdrag</h4>
          <h4 class="check"> <span></span> Fast pris</h4>
        </div>
        <p class="description text__standard">
          Vår helhetslösning går ut på att göra det så enkelt som möjligt för
          dig som kund.
          Vi sköter allt från beställning till installation för ett fast pris.
        </p>
      </section>
      <div class="buttons">
        <nuxt-link to="/laddboxar">
          <ButtonPrimary btn_text="Laddboxar" class="primary"
        /></nuxt-link>
        <nuxt-link to="/bestall"
          ><ButtonGhost btn_text="Beställ" class="ghost"
        /></nuxt-link>
      </div>
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
      rgba(12, 12, 12, 0) 0%,
      rgba(12, 12, 12, 0.789338) 59.9%,
      rgba(12, 12, 12, 0.98) 88.54%,
      $black 94.27%
    ),
    url(@/assets/images/background_laddboxkillarna_1.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10% 0;

  .container {
    width: 1300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .check {
    padding: 0.2rem ;
    color: $white;

    span {
      &:before {
      color: $white;
      content: '✔\fe0e';
      padding-right: 0.5rem;
    }
  }
  }
  .description {
    width: 60%;
    margin: 1rem 0;
  }

  .buttons {
    display: flex;
    margin-top: 2rem;
  }

  .primary {
    margin-right: 2rem;
  }
}
@media only screen and (max-width: 1350px) {
  #header__section {
    padding: 10% 5%;
    .container {
      width: 1100px;
    }
  }
}
@media only screen and (max-width: 1150px) {
  #header__section {
    padding: 20% 10%;
    background: linear-gradient(
        180deg,
        rgba(18, 18, 18, 0) 0%,
        $black 90%,
        $black 100%
      ),
      url('@/assets/images/background_laddboxkillarna_1_pad.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .container {
      width: 100%;
    }

    .text {
      margin-top: 5rem;
    }

    .description {
      width: 100%;
      margin: 2rem 0;
    }
  }
}
@media only screen and (max-width: 600px) {
  #header__section {
    height: 100vh;
    background: linear-gradient(
        180deg,
        rgba(18, 18, 18, 0) 0%,
        rgba(18, 18, 18, 0.87) 78.65%,
        $black 100%
      ),
      url('@/assets/images/background_laddboxkillarna_1_mob.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 10%;

    .text {
      margin-top: 10rem;
    }
  }
}
</style>
