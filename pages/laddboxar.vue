<template>
  <div class="wrapper__laddboxar">
  <div class="title">
  <h1>Våra laddboxar</h1>
  </div>
  <section class="laddboxar">
  <div class="easee">
   
  <img src="~/assets/images/easee/front_easee.png" alt="easee charger">
  <p class="text__standard">Text om varför man skall välja Easee</p>
  <p class="text__standard price">6 990:- </p>

  </div>
  <div class="zaptec">
  <NuxtLink to="/zaptec">
  <img src="~/assets/images/zaptec_products/zaptec_white_1.png" alt="">
    <p class="text__standard">Text om varför man skall välja Easee</p>
  <p class="text__standard price">6 495:- </p>
  </NuxtLink>
  </div>
  </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper__laddboxar{
    width: 1300px;
        padding: 10% 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    h1{
        margin-bottom: 2rem;
    }
}
.laddboxar {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    flex-wrap: wrap;

.price{
    text-align: right;
    font-weight: 700;
    padding-right: 3.5rem;
}

}
img{
    max-width: 20rem;
}
</style>