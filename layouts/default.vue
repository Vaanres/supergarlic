<template>
  <div class="wrapper">
    <div class="grid">
      <header class="grid__header">
        <Navigator/>
      </header>
      <section class="grid__main">
      

        <nuxt/>
      </section>
      <footer class="grid__footer">
        <Footer/>
      </footer>
    </div>
  </div>
</template>

<script>
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";

export default {
   components: {
    Navigator,
    Footer
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
