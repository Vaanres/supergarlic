<template>
  <div>
    <Hero/>
    <WhyGarlic/>
  </div>

</template>

<script>
import Hero from '../components/Homepage/Hero'
import WhyGarlic from '../components/Homepage/WhyGarlic'
import RequestForm from '../components/Homepage/RequestForm'

export default {
  name: 'Index',
  components: {
    Hero,
    WhyGarlic,
    RequestForm
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
