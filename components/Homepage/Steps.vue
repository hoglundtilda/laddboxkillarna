<template>
  <div id="steps__section">
    <h2>Så här går det till</h2>
    <section class="steps">
      <article class="step1">
        <img src="@/assets/images/steps/step1.png" alt="Form icon " />
        <p class="text__secondary">Fyll i kontaktformuläret</p>
      </article>
      <article class="step2">
        <img src="@/assets/images/steps/step2.png" alt="Phone icon" />
        <p class="text__secondary">Vi kontaktar dig för att boka in tid</p>
      </article>
      <article class="step3">
        <img src="@/assets/images/steps/step3.png" alt="Tool icon" />
        <p class="text__secondary">Vi utför installationen</p>
      </article>
      <article class="step4">
        <img src="@/assets/images/steps/step4.png" alt="Document icon" />
        <p class="text__secondary">
          Vi skickar faktura efter avdraget Grön Teknik
        </p>
      </article>
      <article class="step5">
        <img src="@/assets/images/steps/step5.png" alt="Charging icon" />
        <p class="text__secondary">Du kan nu ladda din bil säkert & snabbt!</p>
      </article>
    </section>
    <span class="">Snabbt, smidigt och enkelt!</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#steps__section {
  color: $white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10% 15%;

  .steps {
    display: flex;
    justify-content: space-evenly;
    padding: 8rem 0;

    width: 100%;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 0 1rem;
      min-width: 12rem;

      img {
        width: 7rem;
        height: 7rem;
      }

      p {
        padding-top: 1rem;
        letter-spacing: 1px;
        max-width: 10rem;
      }
    }
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

  span {
    font-size: 2rem;
  }
}
@media only screen and (max-width: 1000px) {
  #steps__section {
    .steps {
      flex-direction: column;
      width: 60%;
      padding: 4rem 0;
      text-align: left;

      article {
        flex-direction: row;
        justify-content: space-between;

        padding: 1rem 0;
        text-align: left;

        p {
          padding: 0 2.5rem;
          min-width: 18rem;
        }
      }
    }
  }
}
@media only screen and (max-width: 850px) {
  #steps__section {
    .steps {
      article {
        width: 100%;

        p {
          width: 100%;
        }
      }
    }
  }
}
@media only screen and (max-width: 550px) {
  #steps__section {
    .steps {
      article {
        width: 100%;
        justify-content: center;

        p {
        }
      }
    }
  }
}
</style>
