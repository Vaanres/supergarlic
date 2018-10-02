<template>
  <section>
    <h1>About</h1>
  </section>
</template>

<script>
export default {
  name: 'About',
  props: {
    index: {
      default: 3,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background: #3f51b5;
}
</style>
