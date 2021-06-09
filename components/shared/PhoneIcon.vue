<template>
  <div class="wrapper__phoneicon">
    <a href="tel:+4631250100">
    <div>
      <img src="@/assets/logo/phone_white.svg" alt="white phone icon" />
    </div>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper__phoneicon {
  display: none;
  position: fixed;
  bottom: 3rem;
  right: 2rem;

  div {
    height: 6rem;
    width: 6rem;
    background: linear-gradient(
      152.97deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    backdrop-filter: blur(42px);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 3rem;
      height: 3rem;
    }
  }
}
@media only screen and (max-width: 700px) {
  .wrapper__phoneicon {
    display: block;
  }
}
</style>
