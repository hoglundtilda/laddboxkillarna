<template>
  <div class="wrapper__kontakt">
    <h1>Kontakta oss</h1>
    <div class="contact__information">
      <section class="information">
        <p class="text__standard">
          Har du frågor eller vill bli samarbetspartner? <br />

          Vi snackar gärna med Er! <br />
          Skicka ett meddelande till oss så hör vi av oss inom 24h
        </p>

        <section class="bosses">
          <article>
            <!--0<img src="@/assets/images/boss1.png" alt="" />-->
            <h3>Alexander Pettersson</h3>
            <a href="mailto:alexander@laddboxkillarna.se"
              ><p class="text__secondary mail">
                alexander@laddboxkillarna.se
              </p></a
            >
            <div>
              <img src="@/assets/logo/phone.svg" alt="" />
              <a href="tel:+46700490657">
                <p class="text__secondary">070 049 06 57</p></a
              >
            </div>
          </article>
          <article>
            <!--<img src="@/assets/images/boss2.png" alt="" />-->

            <h3>Kevin Olsson</h3>
            <a href="mailto:kevin@laddboxkillarna.se"
              ><p class="text__secondary mail">kevin@laddboxkillarna.se</p></a
            >
            <div>
              <img src="@/assets/logo/phone.svg" alt="" />
              <a href="tel:+46704716221">
                <p class="text__secondary">070 471 62 21</p></a
              >
            </div>
          </article>
        </section>
      </section>
      <form autocomplete="on" class="contact">
        <div class="names">
          <input
            v-model="email.firstName"
            type="text"
            placeholder="Förnamn"
            autocomplete="given-name"
            pattern="^[a-zA-ZåäöÅÄÖ]+$"
            title="Vänligen fyll i ett giltigt namn"
            required
          />

          <input
            v-model="email.lastName"
            type="text"
            placeholder="Efternamn"
            autocomplete="family-name"
            pattern="^[a-zA-ZåäöÅÄÖ]+$"
            title="Vänligen fyll i ett giltigt namn"
            required
          />
        </div>
        <input
          v-model="email.email"
          type="email"
          placeholder="Epost"
          autocomplete="email"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          title="Fyll i en giltig epost"
          required
        />
        <input
          v-model="email.subject"
          type="text"
          placeholder="Ämne"
          autocomplete="off"
          max="50"
          min="2"
          title="Fyll i ämne"
          required
        />
        <textarea
          v-model="email.message"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Meddelande"
          autocomplete="off"
          min="1"
          title="Fyll i meddelande"
          required
        ></textarea>
        <SharedStatusMessage :statusMessage="statusMessage" />
        <ButtonSubmit btn_text="Skicka" @btn_click="validateInputs" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { validateContactEmail } from '@/modules/validation'

export default {
  data() {
    return {
      email: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      },
    }
  },
  computed: {
    ...mapState({
      statusMessage: (state) => state.statusMessage,
    }),
  },
  methods: {
    ...mapActions(['contactEmail']),
    ...mapMutations(['responseHandler']),
    async validateInputs() {
      const isValid = await validateContactEmail(this.email)
      if (isValid === true) {
        this.contactEmail(this.email)
      }
      this.contactEmail(this.email)
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper__kontakt {
  padding: 10% 20%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .contact__information {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .information {
    display: flex;
    flex-direction: column;
  }

  .bosses {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    article {
      margin: 1rem 0;
      div {
        display: flex;
        img {
          width: 1.125rem;
          margin-right: 0.4rem;
        }
      }

      a {
        text-decoration: underline;
        color: $black;
        cursor: pointer;

        p {
          padding: 0.2rem 0;
          margin: 0.2rem 0;
        }
      }
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .text__standard {
      margin-bottom: 1rem;
    }

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
}
@media only screen and (max-width: 1100px) {
  .wrapper__kontakt {
    padding: 20% 10%;
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__kontakt {
    .contact__information {
      flex-direction: column;
    }
    .contact {
      padding-top: 5rem;
    }
    .information {
      article {
        .mail {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
