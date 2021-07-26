<template>
  <div class="wrapper__samarbetspartners">
    <div class="container">
      <div class="img__container">
        <a href="https://www.elektroskandia.se/">
          <img
            src="@/assets/images/partners/elektroskandia_logo.png"
            alt="Elektroskandia logga"
        /></a>
      </div>
      <div class="img__container">
        <a href="https://zaptec.com/">
          <img
            src="@/assets/images/partners/zaptec_logo.png"
            alt="Zaptec logga"
        /></a>
      </div>
      <div class="img__container">
        <a href="https://www.swish.nu/">
          <img src="@/assets/images/partners/swish_logo.png" alt="Swish logga"
        /></a>
      </div>
      <div class="img__container">
        <a href="https://www.elsakerhetsverket.se/">
          <img
            src="@/assets/images/partners/elsakerhetsverket_logo.png"
            alt="Elsäkerhetsverket logga"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__samarbetspartners {
  height: 30vh;
  max-width: 1300px;
  margin: auto;
  display: flex;

  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .img__container {
      width: 200px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .wrapper__samarbetspartners {
  min-height: 100vh;
    .container {
      .img__container {
        width: 150px;
      }
    }
  }
}
</style>
