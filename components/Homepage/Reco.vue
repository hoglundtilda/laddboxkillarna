<template>
  <div class="wrapper__reco">
    <iframe
      src="https://widget.reco.se/v2/widget/4038326?mode=HORIZONTAL_QUOTE&bg=0c0d0e&border=false"
      width="100%"
      height="275"
      scrolling="no"
      style="border: transparent"
      data-reactroot=""
      class="reco"
    ></iframe>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__reco {
  width: 1300px;
  margin: auto;
  padding: 10% 0;
}



@media only screen and (max-width: 1400px) {
  .wrapper__reco {
    width: 1100px;
  }
}
@media only screen and (max-width: 1150px) {
  .wrapper__reco {
    width: 100%;
    padding: 10%;
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__reco {
    width: 100%;
    padding: 0 10% 20%;
  }
}
</style>
