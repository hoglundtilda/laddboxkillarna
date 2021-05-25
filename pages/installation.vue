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
      <input type="text" placeholder="Förnamn Efternamn" />
      <input
        type="text"
        placeholder="Gatuadress (där laddbox ska installeras)"
      />
      <input type="text" placeholder="Postnummer" />
      <input type="text" placeholder="Ort" />
      <input type="text" placeholder="Epost" />
      <input type="text" placeholder="Telefonnummer" />
      <textarea
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
          <input type="checkbox" id="consulation" />
          <label for="consulation"
            >Jag behöver konsultation kring extra tillägg vid beställning</label
          >
        </div>
        <div class="checkbox">
          <input type="checkbox" id="cable" />
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
          <input type="checkbox" id="agreement" />
          <label for="agreement">Jag har tagit del av </label>
          <nuxt-link to="/villkor"
            ><span @click="showTerms" class="span_underline"
              >avtalsvillkoren</span
            ></nuxt-link
          >
        </div>
      </div>
      <ButtonPrimaryBlack btn_text="Skicka beställning" class="primary" />
    </section>
  </div>
</template>

<script>
import products from '@/assets/productJSON/products.json'
import { fas } from '@fortawesome/free-solid-svg-icons'
export default {
  data() {
    return {
      products: products,
      color: '',
      terms: false,
      cable: false,
      extra: false,
    }
  },
  methods: {
    selectColor(input) {
      const index = this.products.colors.findIndex(function (element) {
        return element.id === input
      })
      this.color = this.products.colors[index].name
    },
    showTerms() {
      this.terms = true
    },
    showExtra() {
      this.extra = !this.extra
    },
  },
  computed: {
    fas() {
      return fas
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

    input {
      @include input;
    }
    textarea {
      @include input;
      border-radius: 2rem;
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
