<template>
  <div class="wrapper">
    <HomepageHeader />
    <HomepageSteps />
    <HomepageWhyUs />
    <HomepageZaptec />
    <HomepageReco />
    <HomepageSamarbetspartners />
    <SharedPhoneIcon />
  </div>
</template>
<script>
export default {
  head: {
    title: 'Laddbox & installation till fast pris | Laddboxkillarna Göteborg',
    slug: 'https://www.laddboxkillarna.se',
    meta: [
      {
        hid: 'hem',
        name: 'hem',
        content:
          'Helhetslösning för dig som behöver laddbox - Laddbox och installation till fast pris med avdraget Grön Teknik. Se vilket betyg våra kunder ger oss på Reco.se.',
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
.wrapper {
  background-color: $black;
  padding-bottom: 5rem;
}
</style>
