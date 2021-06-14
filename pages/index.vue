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
    title:
      'Laddbox & installation till fast pris | Laddboxkillarna AB Göteborg',
    slug: 'https://www.laddboxkillarna.se',
    meta: [
      {
        hid: 'hem',
        name: 'hem',
        content:
          'Helhetslösning för dig som behöver laddbox - Laddbox och installation till fast pris med avdraget Grön Teknik',
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
