<template>
  <div id="steps__section">
    <h2>Så här går det till</h2>
    <section class="steps">
      <article class="step1">
        <img src="@/assets/images/steps/step1.png" alt="" />
        <p>Fyll i kontaktformuläret</p>
      </article>
      <article class="step2">
        <img src="@/assets/images/steps/step2.png" alt="" />
        <p>
          Vi kontaktar dig inom 24 h för att boka in tid för
          installation/kundbesök
        </p>
      </article>
      <article class="step3">
        <img src="@/assets/images/steps/step3.png" alt="" />
        <p>Vi utför installationen</p>
      </article>
      <article class="step4">
        <img src="@/assets/images/steps/step4.png" alt="" />
        <p>
          Vi skickar faktura och ansöker om avdraget grön teknik för din/er
          räkning
        </p>
      </article>
      <article class="step5">
        <img src="@/assets/images/steps/step5.png" alt="" />
        <p>Du kan nu ladda din bil säkert & snabbt!</p>
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
</style>
