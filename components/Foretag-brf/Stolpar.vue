<template>
  <div class="wrapper__stolpe">
    <h2>Laddstolpe för Zaptec Pro</h2>
    <div class="divider">
      <section class="info">
        <p class="text__standard">
          Zaptec erbjuder enkla och högkvalitativa laddkolumner för
          laddstationer.
        </p>
        <p class="text__standard">
          Alla Zaptec Go laddkolumner erbjuds som både single och double. Med
          double column kan Ni fästa två Zaptec Pro per laddstolpe.
        </p>

        <a href="https://zaptec.com/sv/laddstolpar/" target="_blank"
          ><ButtonGhost btn_text="Läs mer här" class="ghost"
        /></a>
      </section>
      <section class="stolpar">
        <div class="stolpe">
          <p class="text__standard">Flex</p>
          <img src="@/assets/images/pro/flex_pole.png" alt="" />
        </div>
        <div class="stolpe">
          <p class="text__standard">Standard</p>
          <img src="@/assets/images/pro/standard_pole.png" alt="" />
        </div>
        <div class="stolpe">
          <p class="text__standard">Premium</p>
          <img src="@/assets/images/pro/premium_pole.png" alt="" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__stolpe {
  padding: 8% 0;
  width: 1300px;
  margin: auto;

  h2 {
    margin-bottom: 4rem;
  }

  .ghost {
    border: 1px solid $black;
    color: $black;
  }

  .divider {
    display: flex;
    justify-content: space-between;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45%;
  }

  .stolpar {
    display: flex;
  }
  .stolpe {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 3rem;
  }
}
</style>
