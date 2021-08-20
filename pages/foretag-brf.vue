<template>
  <div class="wrapper__foretag">
    <Foretag-brfHeader />
    <Foretag-brfZaptecPro />
    <Foretag-brfGreenBar />
    <Foretag-brfVideo />
    <Foretag-brfLaddbox />
    <Foretag-brfStolpar />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Laddlösning för företag och brf | Laddboxkillarna Göteborg',
    slug: 'https://www.laddboxkillarna.se/foretag-brf',
    meta: [
      {
        hid: 'foretag-brf',
        name: 'foretag-brf',
        content:
          'Vi utför installationer för företag och BRF med laddsystemet Zaptec Pro. Kontakta oss för att veta hur vi kan hjälpa just ert företag.',
      },
    ],
    script: [
      {
        src: `https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`,
      },
    ],
  },
}
</script>

<style lang="scss">
.wrapper__foretag {
  min-height: 100vh;
}
</style>
