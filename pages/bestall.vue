<template>
  <div class="wrapper__installation">
    <InstallationVillkor v-if="terms" />
    <section class="text">
      <h1>Installation</h1>
      <p class="text__secondary">
        Då alla installationer har olika förutsättningar för att kunna
        möjliggöra en säker installation har vi utformat ett s.k standard avtal
        som de flesta installationer täcker. Är du osäker på om
        standard-installation täcker dina behov? Alla eventuella frågor kan
        oftast besvaras via telefon och om du som kund känner dig osäker utför
        vi såklart ett kostnadsfritt kundbesök.
      </p>
      <br />
      <p class="text__secondary">
        Från att du fyllt i kontaktformuläret garanterar vi att återkoppla inom
        24 timmar för att boka tid för installation eller kundbesök för att
        utvärdera dina behov.
      </p>
      <br />
      <div class="standard">
        <h3>Standard installation</h3>
        <p>10 Meter installationskabel</p>
        <p>Jordfelsbrytare & säkring</p>
        <p>Fästmaterial</p>
        <p>Håltagningar</p>
        <span class="span_underline"
          >OBS! Laddkabel ingår ej men går att lägga till vid beställning</span
        >
      </div>
      <br />
      <div class="need">
        <div class="need_title">
          <h3>Vid behov</h3>
          <span>(extra tillägg)</span>
        </div>
        <p>Lastbalansering</p>
        <p>Grävning</p>
        <p>Installationskabel utöver 10 meter</p>
        <p>Uppsäkring</p>
        <p>Kapsling för jordfelsbrytare/säkring</p>
        <p>Kabelskydd</p>
        <p>Kabellistning</p>
        <span class="span_underline" @click="showExtra"
          >Läs mer om extra tillägg och se prislista
        </span>
        <fa :icon="fas.faLink" />
        <InstallationTillägg v-if="extra" @showExtra="showExtra" />
      </div>
    </section>
    <section class="inputs">
      <h3>Dina beställningsuppgifter</h3>
      <form class="form__container" autocomplete="on">
        <div class="names">
          <input
            v-model="order.firstName"
            type="text"
            autocomplete="given-name"
            placeholder="Förnamn"
            class="user_input"
            pattern="^[a-zA-ZåäöÅÄÖ]+$"
            title="Vänligen fyll i ett giltigt namn"
            required
          />

          <input
            v-model="order.lastName"
            type="text"
            autocomplete="family-name"
            placeholder="Efternamn"
            class="user_input"
            pattern="^[a-zA-ZåäöÅÄÖ]+$"
            title="Vänligen fyll i ett giltigt namn"
            required
          />
        </div>
        <input
          v-model="order.street"
          type="text"
          name="address-line1"
          placeholder="Gatuadress (där laddbox ska installeras)"
          class="user_input"
          min="5"
          max="50"
          title="Vänligen fyll i en giltig gatuadress"
          required
        />
        <input
          v-model="order.postNr"
          type="number"
          autocomplete="postal-code"
          placeholder="Postnummer"
          class="user_input"
          pattern="^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$"
          title="Fyll i ett giltigt postnummer '123 45'"
          required
        />
        <input
          v-model="order.state"
          type="text"
          name="address-level2"
          placeholder="Ort"
          class="user_input"
          max="50"
          min="2"
          title="Fyll i en giltig postort"
          required
        />
        <input
          v-model="order.email"
          type="email"
          autocomplete="email"
          placeholder="Epost"
          class="user_input"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          title="Fyll i en giltig epost"
          required
        />
        <input
          v-model="order.phoneNr"
          type="number"
          autocomplete="tel-national"
          placeholder="Telefonnummer"
          class="user_input"
          pattern="(\+\d{2})?((\(0\)\d{2,3})|\d{2,3})?\d+"
          title="Fyll i ett giltigt telefonnummer"
          required
        />
        <textarea
          v-model="order.information"
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Övriga upplysningar"
          class="user_input"
        ></textarea>
        <div>
          <span :class="colorErrorMsg ? 'error' : ''"
            >Välj färg: {{ color }}</span
          >
          <SharedColorPicker @selectColor="selectColor" />
        </div>
        <div class="checkboxes">
          <div class="checkbox">
            <input
              v-model="order.consultation"
              type="checkbox"
              id="consulation"
            />
            <label for="consulation"
              >Jag behöver konsultation kring extra tillägg vid
              beställning</label
            >
          </div>
          <div class="checkbox">
            <input v-model="order.charging_cable" type="checkbox" id="cable" />
            <label for="cable">Jag vill beställa till en laddkabel </label>
            <fa
              :icon="fas.faQuestionCircle"
              class="question"
              @mouseover="cable = true"
              @mouseleave="cable = false"
            />
            <InstallationLaddkabel v-if="cable" />
          </div>
          <div class="checkbox">
            <input
              v-model="order.agreement"
              type="checkbox"
              id="agreement"
              required
            />
            <label for="agreement">Jag har tagit del av </label>
            <nuxt-link to="/villkor"
              ><span @click="showTerms" class="span_underline"
                >avtalsvillkoren</span
              ></nuxt-link
            >
          </div>
        </div>
        <span class="validation_agreement" v-if="agreementErrorMsg"
          >Du behöver läsa och acceptera avtalsvillkor för att lägga en
          beställning</span
        >
        <SharedStatusMessage :statusMessage="statusMessage" />

        <ButtonSubmit
          btn_text="Skicka beställning"
          @btn_click="validateInputs"
        />
      </form>
    </section>
  </div>
</template>

<script>
import products from '@/assets/productJSON/products.json'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { mapState, mapActions, mapMutations } from 'vuex'
import { validateOrder } from '@/modules/validation'

export default {
  data() {
    return {
      products: products,
      color: '',
      terms: false,
      cable: false,
      extra: false,
      order: {
        firstName: '',
        lastName: '',
        street: '',
        postNr: '',
        state: '',
        email: '',
        phoneNr: '',
        information: '',
        color: '',
        consultation: false,
        charging_cable: false,
        agreement: false,
      },
      agreementErrorMsg: false,
      colorErrorMsg: false,
    }
  },
  computed: {
    ...mapState({
      statusMessage: (state) => state.statusMessage,
    }),
    fas() {
      return fas
    },
  },
  methods: {
    ...mapActions(['orderEmail']),
    ...mapMutations(['responseHandler']),

    selectColor(color) {
      const index = this.products.colors.findIndex(function (element) {
        return element.id === color.id
      })
      this.color = this.products.colors[index].name
      this.order.color = color.name
    },
    showTerms() {
      this.terms = true
    },
    showExtra() {
      this.extra = !this.extra
    },
    async validateInputs() {
      const validation = await validateOrder(this.order)
      const isValid = Object.values(validation).every((item) => item === true)

      this.colorErrorMsg = validation.color ? false : true
      this.agreementErrorMsg = this.order.agreement ? false : true

      if (isValid === true) {
        this.sendOrder(this.order)
      }
    },
    sendOrder(order) {
      this.orderEmail(order)
    },
    async refresh() {
      await this.responseHandler('refresh')
    },
  },
  beforeMount() {
    this.refresh()
  },
}
</script>

<style lang="scss">
.wrapper__installation {
  padding: 10%;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  font-family: $headline;
  grid-template-areas: 'text form';
  grid-template-columns: 55% 50%;

  .text {
    grid-area: text;
    padding: 0 5rem;

    .fa-link {
      color: black;
      font-size: 1rem;
    }
    .standard {
      font-weight: 700;
    }
    .need {
      font-weight: 700;

      .need_title {
        display: flex;
        align-items: center;

        h3 {
          margin-right: 0.5rem;
        }
        span {
          font-weight: 700;
        }
      }
    }
  }

  .span_underline {
    text-decoration: underline;
    font-weight: 400;
    color: $black;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    grid-area: form;
    padding: 3rem 5rem;

    .form__container {
      display: flex;
      flex-direction: column;

      .names {
        width: 100%;
        display: flex;
        justify-content: space-between;

        input {
          width: 49%;
        }
      }

      .user_input {
        @include input;
      }
      .user_input {
        @include input;
        border-radius: 2rem;
      }

      .validation_agreement {
        color: $red;
      }
    }
    .checkboxes {
      display: flex;
      flex-direction: column;
      position: relative;

      span {
        text-decoration: underline;
        cursor: pointer;
      }

      .checkbox {
        margin: 0.5rem 0;

        .question {
          cursor: pointer;
        }
      }
    }
  }
}

.error {
  color: $red;
}
@media only screen and (max-width: 1200px) {
  .wrapper__installation {
    padding: 20% 10%;

    .inputs {
      padding: 3rem 1rem;
    }
  }
}
@media only screen and (max-width: 950px) {
  .wrapper__installation {
    grid-template-areas:
      'text'
      'form';
    grid-template-columns: 1fr;
    .text {
      padding: 0rem 1rem;
    }
  }
}
</style>
