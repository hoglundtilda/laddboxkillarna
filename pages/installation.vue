<template>
  <div class="wrapper__installation">
    <section class="text">
      <h1>Installation</h1>
      <p>
        Då alla installationer har olika förutsättningar för att kunna
        möjliggöra en säker installation har vi utformat ett s.k standard avtal
        som de flesta installationer täcker. Är du osäker på om
        standard-installation täcker dina behov? Alla eventuella frågor kan
        oftast besvaras via telefon och om du som kund känner dig osäker utför
        vi såklart ett kostnadsfritt kundbesök.
      </p>
      <p>
        Från att du fyllt i kontaktformuläret garanterar vi att återkoppla inom
        24 timmar för att boka tid för installation eller kundbesök för att
        utvärdera dina behov.
      </p>
      <div class="standard">
        <h3>Standard installation</h3>
        <p>10 Meter installationskabel</p>
        <p>Jordfelsbrytare & säkring</p>
        <p>Fästmaterial</p>
        <p>Håltagningar</p>
        <span
          >OBS! Laddkabel ingår ej men går att lägga till vid beställning</span
        >
      </div>
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
        <span>Läs mer om extra tillägg och se prislista </span>
        <fa :icon="fas.faLink" />
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
        rows="10"
        placeholder="Övriga upplysningar"
      ></textarea>
      <div class="colors">
        <span>Välj färg:</span>
        <form>
          <input name="radio" value="" type="radio" id="whtie" class="white" />
          <input name="radio" value="" type="radio" id="rock" class="rock" />
          <input name="radio" value="" type="radio" id="moss" class="moss" />
          <input
            name="radio"
            value=""
            type="radio"
            id="midnight"
            class="midnight"
          />
          <input name="radio" value="" type="radio" id="wood" class="wood" />
          <input name="radio" value="" type="radio" id="black" class="black" />
        </form>
        <ButtonPrimary btn_txt="Skicka beställning" />
      </div>
    </section>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
export default {
  computed: {
    fas() {
      return fas
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper__installation {
  padding: 10%;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-areas: 'text form';
  grid-template-columns: 50% 50%;

  .text {
    grid-area: text;
    padding: 5rem;

    .fa-link {
      color: black;
      font-size: 1rem;
    }
  }

  .colors {
    .white,
    .rock,
    .moss,
    .midnight,
    .wood,
    .black {
      width: 2rem;
      height: 2rem;
      outline: none;
      padding: 0;
      appearance: none;
      border-radius: 100%;
      margin: 0.5rem;
    }
    .white:checked,
    .rock:checked,
    .moss:checked,
    .midnight:checked,
    .wood:checked,
    .black:checked {
      transform: scale(1.4);
    }

    .white {
      box-shadow: 0px 0px 1.5px 0.001px #000000;
      background-color: $cloud_white;
    }
    .rock {
      background-color: $rock_grey;
    }
    .moss {
      background-color: $moss_green;
    }
    .midnight {
      background-color: $midnight_blue;
    }
    .wood {
      background-color: $wood_brown;
    }
    .black {
      background-color: $asphalt_black;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
  }
}
</style>
