<template>
  <div class="wrapper__kontakt">
    <section class="information">
      <h1>Kontakta oss</h1>
      <p class="text__standard">
        Har du frågor eller vill bli samarbetspartner?
      </p>
      <p class="text__standard">Vi snackar gärna med Er, vi hörs!</p>
      <section class="bosses">
        <article>
          <img src="@/assets/images/boss1.png" alt="" />
          <h3>Alexander Pettersson</h3>
          <a href="mailto:alexander@laddboxkillarna.se"
            ><p class="text__secondary mail">alexander@laddboxkillarna.se</p></a
          >
          <p class="text__secondary">tlf: 070 049 06 57</p>
        </article>
        <article>
          <img src="@/assets/images/boss2.png" alt="" />

          <h3>Kevin Olsson</h3>
          <a href="mailto:kevin@laddboxkillarna.se"
            ><p class="text__secondary mail">kevin@laddboxkillarna.se</p></a
          >
          <p class="text__secondary">tlf: 070 471 62 21</p>
        </article>
      </section>
    </section>
    <section class="contact">
      <div class="names">
        <input v-model="email.firstName" type="text" placeholder="Förnamn" />

        <input v-model="email.lastName" type="text" placeholder="Efternamn" />
      </div>

      <input v-model="email.email" type="text" placeholder="Epost" />
      <input v-model="email.subject" type="text" placeholder="Ämne" />
      <textarea
        v-model="email.message"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Meddelande"
      ></textarea>
      <ButtonPrimaryBlack
        btn_text="Skicka"
        class="primary"
        @btn_click="sendEmail"
      />
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: {
        firstName: 'Matilda ',
        lastName: 'Höglund',
        email: 'hoglund.matilda@gmail.com',
        subject: 'test contact-page',
        message: 'Testar om det fungerar att skicka email från contact-page :)',
      },
    }
  },
  methods: {
    ...mapActions(['contactEmail']),
    sendEmail() {
      this.contactEmail(this.email)
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper__kontakt {
  font-family: $headline;
  padding: 10%;
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'information contact';
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  .information {
    grid-area: information;
  }

  .bosses {
    display: flex;
    justify-content: space-around;

    article {
      margin: 2rem 2rem 2rem 0;

      a {
        text-decoration: underline;
        color: $black;
        cursor: pointer;
      }
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    grid-area: contact;

    .names {
      width: 100%;
      display: flex;
      justify-content: space-between;

      input {
        width: 49%;
      }
    }

    input {
      @include input;
    }
    textarea {
      @include input;
      border-radius: 2rem;
    }
  }
  .primary {
    margin-top: 2rem;
  }
}
@media only screen and (max-width: 1100px) {
  .wrapper__kontakt {
    padding: 20% 10%;
    grid-template-areas:
      'information'
      'contact';
    grid-gap: 0;
    grid-template-columns: 1fr;

    .information {
      article {
        img {
          width: 70%;
        }
      }
    }
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__kontakt {
    padding: 20% 5%;
    grid-template-areas:
      'information'
      'contact';
    grid-gap: 0;
    grid-template-columns: 1fr;
    .bosses {
      article {
        margin: 2rem 0.5rem 2rem 0;
      }
    }

    .information {
      article {
        margin: 2 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        img {
          min-height: 20rem;
          min-width: 13rem;
        }
        .mail {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
