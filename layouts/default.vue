<template>
  <div>
    <AppNav />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['responseHandler']),
  },
  created() {
    this.responseHandler('refresh')
  },
}
</script>
<style lang="scss"></style>
