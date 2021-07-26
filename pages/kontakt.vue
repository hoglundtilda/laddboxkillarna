<template>
  <div class="wrapper__kontakt">
    <div class="container">
      <h1>Kontakta oss</h1>
      <p class="text__standard top__text">
        Har du frågor eller vill bli samarbetspartner? Vi snackar gärna med Er!
        Ring eller skicka ett meddelande till oss så hör vi av oss inom 24h
      </p>
      <section class="bosses">
        <article>
          <img src="@/assets/images/alex.png" alt="picture of employee" />
          <div class="employee__contact">
            <span class="text__standard">Alexander Pettersson</span>
            <a href="mailto:alexander@laddboxkillarna.se"
              ><p class="text__standard mail">
                alexander@laddboxkillarna.se
              </p></a
            >

            <a href="tel:+46700490657">
              <p class="text__standard">tlf: 070 049 06 57</p></a
            >
          </div>
        </article>
        <article>
          <img src="@/assets/images/kevin.png" alt="picture of employee" />
          <div class="employee__contact">
            <span class="text__standard">Kevin Olsson</span>
            <a href="mailto:kevin@laddboxkillarna.se"
              ><p class="text__standard mail">kevin@laddboxkillarna.se</p></a
            >

            <a href="tel:+46704716221">
              <p class="text__standard">tlf: 070 471 62 21</p></a
            >
          </div>
        </article>
      </section>

      <!--kontaktformulär-->
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
          v-model="email.telephonenumber"
          type="number"
          placeholder="Telefonnummer"
          autocomplete="tel"
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
    <section class="contact_info">
      <a href="tel:+4631250100">
        <p class="text__secondary">tlf: 031 250 100</p></a
      >
      <a
        href="https://www.google.com/maps/place/L%C3%A5ng%C3%A4ngen+9,+417+22+G%C3%B6teborg/@57.7219141,11.9438371,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff54d1e128f07:0x725ddeba20a932ee!8m2!3d57.7219113!4d11.9460259"
        target="_blank"
        ><p class="text__secondary">Långängen 9</p>
      </a>
      <p class="text__secondary">417 22 Göteborg</p>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { validateContactEmail } from '@/modules/validation'

export default {
  head: {
    title: 'Kontakt | Laddboxkillarna Göteborg',
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
        telephonenumber: '',
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
        telephonenumber: obj.telephonenumber.trim(),
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
    align-items: center;

    .top__text {
      margin-top: 2rem;
      width: 45%;
      text-align: center;
    }
  }

  .information {
    display: flex;
    flex-direction: column;
  }

  .bosses {
    display: flex;
    justify-content: space-evenly;
    margin-top: 5rem;
    width: 100%;

    article {
      a {
        text-decoration: underline;
        color: $black;
        cursor: pointer;

        p {
          padding: 0.2rem 0;
          margin: 0.2rem 0;
        }
      }
      img {
        margin: 1.5rem 0;
      }
    }
  }

  .contact_info {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;
    margin: auto;
    margin-top: 10rem;

    .text__secondary {
      font-weight: 900;
    }

    a {
      color: $black;
      text-decoration: underline;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    margin-top: 5rem;

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
@media only screen and (max-width: 750px) {
  .wrapper__kontakt {
    .container {
      .text__standard {
        width: 100%;
      }
    }
    article {
      img {
        width: 80%;
      }
    }
    .contact {
      width: 100%;
    }
    input,
    textarea {
      font-size: 1.5rem;
    }

    .contact_info {
      width: 100%;
      justify-content: space-between;
    }
  }
}

@media only screen and (max-width: 680px) {
  .wrapper__kontakt {
    .bosses {
      flex-direction: column;
      align-items: center;

      article {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;

        img {
          width: 100%;
        }

        .employee__contact {
          align-self: flex-start;
        }
      }
    }
  }
}

@media only screen and (max-width: 450px) {
  .wrapper__kontakt {
    .contact_info {
      flex-direction: column;
      justify-content: space-between;

      p {
        margin: 1rem 0;
      }
    }
  }
}
</style>
