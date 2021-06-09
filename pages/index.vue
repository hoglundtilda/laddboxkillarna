<template>
  <div class="wrapper">
    <HomepageHeader />
    <HomepageSteps />
    <HomepageWhyUs />
    <HomepageZaptec />
    <SharedPhoneIcon />
  </div>
</template>
<script>
export default {
    head: {
    title: 'Laddbox och installation',
    slug: 'https://www.laddboxkillarna.se',
    meta: [
      {
        hid: 'Hem',
        name: 'Hem',
        content: 'Vi har lång erfarenhet av laddbox installationer och erbjuder allt i ett till fast pris',
      },
    ],
  },
}
</script>

<style lang="scss">
.wrapper {
  background-color: $black;
}
</style>
