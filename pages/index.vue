<template>
  <section>
    <h1>Index</h1>
  </section>
</template>

<script>
export default {
  name: 'Index',
  props: {
    index: {
      default: 1,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background: #673ab7;
}
</style>
