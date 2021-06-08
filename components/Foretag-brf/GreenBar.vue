<template>
  <div class="wrapper__green">
    <div>
      <article>
        <img src="@/assets/logo/circle_check.png" alt="" />
        <p class="text__secondary">
          Laddhastighet på 22 kilowatt gör att elbilen kan laddas till en
          körsträcka på upp till 110 kilometer på en timme.
        </p>
      </article>
      <article>
        <img src="@/assets/logo/circle_check.png" alt="" />
        <p class="text__secondary">
          Upp till 66 procent bättre utnyttjande av den ström du har tillgång
          till
        </p>
      </article>
    </div>
    <div>
      <article>
        <img src="@/assets/logo/circle_check.png" alt="" />
        <p class="text__secondary">
          Lätt att komplettera med fler laddstationer i takt med att fler
          behöver laddmöjlighet
        </p>
      </article>
      <article>
        <img src="@/assets/logo/circle_check.png" alt="" />
        <p class="text__secondary">
          Kostnadsfria administrationssystem och betaltjänster
        </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__green {
  background-color: $green;
  margin: 10% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 10%;

  div {
    display: flex;
    flex-direction: column;
  }

  article {
    display: flex;
    color: $white;
    align-items: center;
    padding: 0 2rem;
    width: 80%;

    img {
      margin: 2rem;
    }
  }
}

@media only screen and (max-width: 1400px) {
  .wrapper__green {
    article {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 800px) {
  .wrapper__green {
    flex-direction: column;
  }
}
</style>
