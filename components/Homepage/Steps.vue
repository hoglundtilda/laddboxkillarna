<template>
  <div id="steps__section">
    <h2>Så här går det till</h2>
    <section class="steps">
      <article class="step1">
        <img src="@/assets/images/steps/step1.png" alt="" />
        <p class="text__secondary">Fyll i kontaktformuläret</p>
      </article>
      <article class="step2">
        <img src="@/assets/images/steps/step2.png" alt="" />
        <p class="text__secondary">
          Vi kontaktar dig inom 24h för att boka in tid för
          installation/kundbesök
        </p>
      </article>
      <article class="step3">
        <img src="@/assets/images/steps/step3.png" alt="" />
        <p class="text__secondary">Vi utför installationen</p>
      </article>
      <article class="step4">
        <img src="@/assets/images/steps/step4.png" alt="" />
        <p class="text__secondary">
          Vi skickar faktura och ansöker om avdraget grön teknik för din/er
          räkning
        </p>
      </article>
      <article class="step5">
        <img src="@/assets/images/steps/step5.png" alt="" />
        <p class="text__secondary">Du kan nu ladda din bil säkert & snabbt!</p>
      </article>
    </section>
    <h3>Snabbt, smidigt och enkelt!</h3>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#steps__section {
  font-family: $headline;
  color: $white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10%;

  article > p {
    padding-top: 1rem;
  }

  .steps {
    display: grid;
    grid-template-areas: 'step1 step2 step3 step4 step5';
    grid-template-columns: repeat(5, 1fr);

    justify-items: center;
    text-align: center;
    padding: 6rem 4rem;
    grid-gap: 1rem;
  }
  .step1 {
    grid-area: step1;
  }
  .step2 {
    grid-area: step2;
  }
  .step3 {
    grid-area: step3;
  }
  .step4 {
    grid-area: step4;
  }
  .step5 {
    grid-area: step5;
  }
}
@media only screen and (max-width: 1100px) {
  #steps__section {
    .steps {
      padding: 6rem 1rem;
    }
  }
}
@media only screen and (max-width: 850px) {
  #steps__section {
    .steps {
      grid-template-areas:
        'step1'
        'step2'
        'step3'
        'step4'
        'step5';

      grid-template-columns: 1fr;
      justify-items: flex-start;
      text-align: left;
      grid-gap: 3rem;
      padding: 4rem 0rem;
    }
    article > p {
      padding-top: 0rem;
    }
  }
  .step1,
  .step2,
  .step3,
  .step4,
  .step5 {
    img {
      padding-right: 3rem;
      width: 10rem;
    }
    display: flex;
    align-items: center;
  }
  .text__secondary {
    font-size: 1.5rem;
    width: 60%;
  }
}
</style>
