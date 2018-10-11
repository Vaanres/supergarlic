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
  head() {
    return {
      title: `Trang chủ ${process.env.site_name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Trang chủ ${process.env.site_description}`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/override';
</style>
