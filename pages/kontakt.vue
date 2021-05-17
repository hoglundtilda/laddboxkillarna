<template>
  <div class="wrapper__kontakt">
    <section class="information">
      <h1>Kontakta oss</h1>
      <p>Har du frågor eller vill bli samarbetspartner?</p>
      <p>Vi snackar gärna med Er, vi hörs!</p>
      <section class="bosses">
        <article>
          <img src="@/assets/images/boss1.png" alt="" />
          <h3>Alexander Pettersson</h3>
          <p>alexander@laddboxkillarna.se</p>
          <p>tlf: 070 049 06 57</p>
        </article>
        <article>
          <img src="@/assets/images/boss2.png" alt="" />
          <h3>Kevin Olsson</h3>
          <p>kevin@laddboxkillarna.se</p>
          <p>tlf: 070 471 62 21</p>
        </article>
      </section>
    </section>
    <section class="contact">
      <input v-model="name" type="text" placeholder="Förnamn Efternamn" />
      <input v-model="toEmail" type="text" placeholder="Epost" />
      <input v-model="subject" type="text" placeholder="Ämne" />
      <textarea
        v-model="message"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Meddelande"
      ></textarea>
      <ButtonPrimary btn_text="Skicka" class="primary" @btn_click="sendEmail" />
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: {
        name: 'Matilda Höglund',
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
  padding: 10%;
  height: 100vh;
  display: grid;
  grid-template-areas: 'information contact';
  grid-template-columns: 50% 50%;

  .bosses {
    display: flex;

    article {
      margin: 2rem 1rem 1rem 0;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    input {
      @include input;
    }
    textarea {
      @include input;
      border-radius: 2rem;
    }
  }

  .primary {
    background-color: #121212;
    color: #fbf9ff;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
}
</style>
