<template>
  <div>
    <AppNav />
    <Nuxt />
    <!-- <AppCookie /> -->
    <AppFooter />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
¨ html {
  scroll-behavior: smooth;
  font-size: 16px;
}

@media (max-width: 900px) {
}

@media (max-width: 600px) {
}

// input[type='text'] {
//   padding: 0.7rem 1.2rem;
// }

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

input:-webkit-autofill {
  -webkit-text-fill-color: none !important;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid inherit;
  -webkit-text-fill-color: inherit;
  box-shadow: inherit;
  -webkit-box-shadow: inherit;
  transition: background-color 5000s ease-in-out 0s;
}

input::placeholder,
textarea::placeholder {
  @include placeholder;
}

input::placeholder,
textarea::placeholder {
  font-size: 1rem;
}

@media only screen and (max-width: 1200px) {
  html {
    font-size: 14px;
  }

  input::placeholder,
  textarea::placeholder {
    font-size: 1.3rem;
  }
}

@media only screen and (max-width: 900px) {
  html {
    font-size: 12px;
    .text__standard {
      font-size: 1.7rem;
    }
    .text__secondary {
      font-size: 1.5rem;
    }
  }
}

@media only screen and (max-width: 600px) {
  html {
    font-size: 10px;
  }

  input::placeholder,
  textarea::placeholder {
    font-size: 1.5rem;
  }
}

// font elements
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $headline;
}

h1 {
  font-size: 4.2rem;
  font-weight: 500;
}

h2 {
  font-size: 3rem;
  font-weight: 500;
}

h3 {
  font-size: 2rem;
  font-weight: 400;
}

h4 {
  font-size: 1.25rem;
  font-weight: 300;
}

.text__standard {
  font-size: 1.5rem;
  line-height: 150%;
  font-weight: 300;
  font-family: $text;
}

.text__secondary {
  font-size: 1.125rem;
  line-height: 150%;
  font-weight: 300;
  font-family: $text;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
