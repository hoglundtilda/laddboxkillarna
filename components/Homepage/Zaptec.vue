<template>
  <div id="zaptec__section">
    <div class="grid">
      <img src="@/assets/images/zaptec_1.jpg" alt="" />
      <div class="text">
        <h2>Zaptec Go</h2>
        <h3>Fungerar med alla bilar</h3>
        <p>
          Oavsett var du kör eller vart du ska, är Zaptec go det bästa sättet
          att ladda din resa. Med utgångspunkt i ledande Nordisk grön teknik har
          de skapat en av de minsta 22kW (Maximal laddeffekt) laddaren på
          marknaden och den är lika smart på insidan som enkel på utsidan.
        </p>
        <ButtonPrimary btn_text="Utforska Zaptec Go" class="primary" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#zaptec__section {
  padding: 10%;
  font-family: $headline;
  color: $white;

  .grid {
    display: grid;
    grid-template-areas: 'img text';
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }
  img {
    grid-area: img;
    width: 80%;
    justify-self: center;
  }

  .text {
    grid-area: text;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    p {
      font-family: $text;
      width: 70%;
    }
  }
}
</style>
