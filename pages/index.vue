<template>
  <div>
    <Hero/>
  </div>

</template>

<script>
import Hero from '../components/Homepage/Hero'

export default {
  name: 'Index',
  components: {
    Hero
  },
  data() {
    return {
      imgObj: {
        src: '/images/garlics/garlic.png'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/override';
</style>
