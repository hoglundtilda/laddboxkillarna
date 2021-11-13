<template>
  <div class="wrapper__laddboxar">
  <div class="container">
  <div class="title">
  <h1>Våra laddboxar</h1>
  </div>
  <section class="laddboxar">
  <div class="easee">
   <NuxtLink to="/easee">
  <img src="~/assets/images/easee/front_easee.png" alt="easee charger">
  <p class="text__standard">Easee</p>
  <p class="text__standard price">6 990:- </p>
</NuxtLink>
  </div>
  <div class="zaptec">
  <NuxtLink to="/zaptec">
  <img src="~/assets/images/zaptec_products/zaptec_white_1.png" alt="">
    <p class="text__standard">Zaptec Go</p>
  <p class="text__standard price">6 495:- </p>
  </NuxtLink>
  </div>
  </section>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper__laddboxar{
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  

    .container{
    width: 1300px;
    padding: 10% 0;
     margin: auto;
    }

    h1{
        margin-bottom: 2rem;
    }
}
.laddboxar {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    flex-wrap: wrap;
    text-decoration: none;
      
    a{
       color: $black;  
    } 
  

.price{
    text-align: right;
    font-weight: 700;
  
}

}
img{
    max-width: 20rem;
}

@media only screen and (max-width: 1350px) {
  .wrapper__laddboxar {
    .container {
      width: 1100px;
    }
  }
}
@media only screen and (max-width: 1150px) {
  .wrapper__laddboxar {
    padding: 20% 10%;
    .container {
      width: 100%;

    }
  }
}

@media only screen and (max-width: 700px) {
  .wrapper__laddboxar {
    .zaptec {
      margin-top: 4rem;
    }
  }
}
</style>