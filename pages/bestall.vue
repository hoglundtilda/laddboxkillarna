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
      <div class="names">
        <input v-model="order.firstName" type="text" placeholder="Förnamn" />

        <input v-model="order.lastName" type="text" placeholder="Efternamn" />
      </div>
      <input
        v-model="order.street"
        type="text"
        placeholder="Gatuadress (där laddbox ska installeras)"
      />
      <input v-model="order.postNr" type="text" placeholder="Postnummer" />
      <input v-model="order.state" type="text" placeholder="Ort" />
      <input v-model="order.email" type="text" placeholder="Epost" />
      <input v-model="order.phoneNr" type="text" placeholder="Telefonnummer" />
      <textarea
        v-model="order.information"
        name=""
        id=""
        cols="30"
        rows="5"
        placeholder="Övriga upplysningar"
      ></textarea>
      <div>
        <span>Välj färg: {{ color }}</span>
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
            >Jag behöver konsultation kring extra tillägg vid beställning</label
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
          <input v-model="order.agreement" type="checkbox" id="agreement" />
          <label for="agreement">Jag har tagit del av </label>
          <nuxt-link to="/villkor"
            ><span @click="showTerms" class="span_underline"
              >avtalsvillkoren</span
            ></nuxt-link
          >
        </div>
      </div>
      <span class="validation_agreement" v-if="showAgreement"
        >Du behöver läsa och acceptera avtalsvillkor för att lägga en
        beställning</span
      >
      <ButtonPrimaryBlack
        btn_text="Skicka beställning"
        class="primary"
        @btn_click="sendOrder"
      />
    </section>
  </div>
</template>

<script>
import products from '@/assets/productJSON/products.json'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { mapActions } from 'vuex'
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
      showAgreement: false,
    }
  },
  computed: {
    fas() {
      return fas
    },
  },
  methods: {
    ...mapActions(['orderEmail']),

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
    sendOrder() {
      //const isValid = await validate(this.order)
      if (this.order.agreement === true) {
        this.orderEmail(this.order)
        this.showAgreement = false
      }

      if (this.order.agreement === false) this.showAgreement = true
    },
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

    .validation_agreement {
      color: $red;
    }

    .primary {
      margin-top: 2rem;
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
