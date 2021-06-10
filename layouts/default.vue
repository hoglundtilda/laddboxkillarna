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
  /*   methods: {
    ...mapMutations(['responseHandler']),
    async refresh() {
      await this.responseHandler('refresh')
    },
  },
  beforeCreated() {
    this.refresh()
  }, */
}
</script>
<style lang="scss"></style>
