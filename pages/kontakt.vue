<template>
  <div class="wrapper__kontakt">
    <div class="container">
      <h1>Kontakta oss</h1>
      <div class="contact__information">
        <section class="information">
          <p class="text__standard">
            Har du frågor eller vill bli samarbetspartner? Vi snackar gärna med
            Er! Skicka ett meddelande till oss så hör vi av oss inom 24h
          </p>

          <section class="bosses">
            <article>
              <!--0<img src="@/assets/images/boss1.png" alt="" />-->
              <h2>Kontaktuppgifter</h2>
              <a
                href="https://www.google.com/maps/place/L%C3%A5ng%C3%A4ngen+9,+417+22+G%C3%B6teborg/@57.7219141,11.9438371,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff54d1e128f07:0x725ddeba20a932ee!8m2!3d57.7219113!4d11.9460259"
                ><p class="text__secondary">Långängen 9</p>
                </a>
                <p class="text__secondary">417 22 Göteborg</p>
              <div>
                <img src="@/assets/logo/phone.svg" alt="phone" />
                <a href="tel:+4631250100">
                  <p class="text__secondary">031 - 25 01 00</p></a
                >
              </div>
            </article>
            <article>
              <!--0<img src="@/assets/images/boss1.png" alt="" />-->
              <h3>Alexander Pettersson</h3>
              <a href="mailto:alexander@laddboxkillarna.se"
                ><p class="text__secondary mail">
                  alexander@laddboxkillarna.se
                </p></a
              >
              <div>
                <img src="@/assets/logo/phone.svg" alt="phone" />
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
                <img src="@/assets/logo/phone.svg" alt="phone" />
                <a href="tel:+46704716221">
                  <p class="text__secondary">070 471 62 21</p></a
                >
              </div>
            </article>
          </section>
        </section>
        <form @submit.prevent="sendEmail" autocomplete="on" class="contact">
          <div class="names">
            <input
              v-model="email.firstName"
              type="text"
              placeholder="Förnamn"
              autocomplete="given-name"
              title="Vänligen fyll i namn"
              required
              :class="validation.firstName ? '' : 'inputNotValid'"
            />

            <input
              v-model="email.lastName"
              type="text"
              placeholder="Efternamn"
              autocomplete="family-name"
              title="Vänligen fyll i efternamn"
              required
              :class="validation.lastName ? '' : 'inputNotValid'"
            />
          </div>
          <input
            v-model="email.email"
            type="email"
            placeholder="Epost"
            autocomplete="email"
            title="Fyll i en giltig epost"
            required
            :class="validation.email ? '' : 'inputNotValid'"
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
            :class="validation.subject ? '' : 'inputNotValid'"
          />
          <textarea
            v-model="email.message"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Meddelande"
            autocomplete="off"
            required
            :class="validation.message ? '' : 'inputNotValid'"
          ></textarea>

          <SharedStatusMessage
            v-if="formatErrorMsg"
            :statusMessage="formatMessage"
          />
          <SharedStatusMessage :statusMessage="statusMessage" />
          <button type="submit" class="primary submit__black">
            Skicka meddelande
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { validateContactEmail } from '@/modules/validation'

export default {
  head: {
    title: 'Kontakt | Laddboxkillarna AB',
    slug: 'https://www.laddboxkillarna.se/kontakt',
    meta: [
      {
        hid: 'kontakt',
        name: 'kontakt',
        content:
          'Frågor om laddbox och installationer? Kontakta oss - vi garanterar återkoppling inom 24h',
      },
    ],
  },
  middleware: 'status_message',
  data() {
    return {
      email: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      },
      validation: {
        firstName: true,
        lastName: true,
        email: true,
        subject: true,
        message: true,
      },
      formatErrorMsg: false,
      formatMessage: {
        success: false,
        message: 'Röda fält ej giltiga',
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
    trimObject(obj) {
      return (obj = {
        firstName: obj.firstName.trim(),
        lastName: obj.lastName.trim(),
        email: obj.email.trim(),
        subject: obj.subject,
        message: obj.message,
      })
    },

    async sendEmail() {
      this.formatErrorMsg = false
      const email = await this.trimObject(this.email)
      this.validation = await validateContactEmail(email)

      const isValid = Object.values(this.validation).every(
        (item) => item === true
      )

      this.formatErrorMsg = !isValid

      if (isValid === true) {
        this.contactEmail(email)
      }
    },
  },
}
</script>

<style lang="scss">
.submit__black {
  @include btn;
  background-color: $black;
  color: $white;
  width: 100%;
  display: flex;
  justify-content: center;
  border: none;
  box-shadow: $shadow_btn_black;
  transition: all 0.3s ease-in-out;

  &:active {
    box-shadow: $shadow_btn_black-hover;
    transform: scale(1.03);
  }

  &:hover {
    color: $black;
    background: none;
  }
}
.wrapper__kontakt {
  padding: 10% 0;
  min-height: 100vh;

  .container {
    width: 1300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contact__information {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    gap: 3rem;
  }

  .information {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }

  .bosses {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-top: 3rem;

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
    width: 100%;
    margin-left: 5rem;

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
      max-width: 3;
    }
  }
}

.inputNotValid {
  border: 1px solid $red !important;
}

@media only screen and (max-width: 1350px) {
  .wrapper__kontakt {
    .container {
      width: 1100px;
    }
  }
}
@media only screen and (max-width: 1150px) {
  .wrapper__kontakt {
    padding: 20% 10%;
    .container {
      width: 100%;
    }
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__kontakt {
    input,
    textarea {
      font-size: 1.5rem;
    }

    .contact {
      margin-left: unset;
    }
    .contact__information {
      flex-direction: column;
    }
  }
}
</style>
