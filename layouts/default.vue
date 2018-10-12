<template>
  <div class="wrapper">
    <div class="grid">
      <header class="grid__header">
        <Navigator :links="links"/>
      </header>
      <section class="grid__main">
        <nuxt/>
      </section>
      <footer class="grid__footer">
        <Footer :links="links"/>
      </footer>
    </div>
    
   
  </div>
</template>


<script>
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'
import ScrollUp from '../components/Public/ScrollUp'
import ScrollDown from '../components/Public/ScrollDown'

export default {
  components: {
    Navigator,
    Footer,
    ScrollUp,
    ScrollDown
  },
  data() {
    return {
      isActive: false,
      links: [
        {
          id: 1,
          name: 'Trang chủ',
          path: '/'
        },
        {
          id: 2,
          name: 'Bảng giá',
          path: 'pricing'
        },
        {
          id: 3,
          name: 'Về chúng tôi',
          path: 'about'
        }
      ]
    }
  }
}
</script>


<style lang="scss">
@import '~assets/styles/main';

@supports (display: grid) {
  .grid {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      'header'
      'main'
      'footer';
    min-height: 100vh;
  }
}
</style>
