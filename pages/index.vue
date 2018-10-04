<template>
  <div>
    <Hero/>
    <WhyGarlic/>
  </div>

</template>

<script>
import Hero from '../components/Homepage/Hero'
import WhyGarlic from '../components/Homepage/WhyGarlic'

export default {
  name: 'Index',
  components: {
    Hero,
    WhyGarlic
  },
  data() {}
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/override';
</style>
