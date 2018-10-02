<template>
  <section>
    <h1>Pricing</h1>
  </section>
</template>

<script>
export default {
  name: 'Pricing',
  props: {
    index: {
      default: 2,
      type: Number
    }
  },
  data() {
    return {
      vIndex: 1
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
