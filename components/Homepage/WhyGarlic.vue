<template>
  <section class="section section__light">
    <div class="container">
      <h2 class="section__light__title text-center">Tại sao Tỏi Phan Rang đặc biệt?</h2>
      <p class="section__light__subtitle text-center">Chứa hàm lượng allicin, glucogen, aliin, fitonxit, vitamin và các nguyên tố vi lượng cao gấp 
      lần tỏi thường.</p>

      <div class="col-12">
        <div class="grid_g">
          <div class="grid_g__0">
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
          </div>
          <div class="grid_g__1"><div>L1</div></div>
          <div class="grid_g__2"><div>L2</div></div>
          <div class="grid_g__3"><div>L3</div></div>
          <div class="grid_g__4"><div>L4</div></div>
          <div class="grid_g__5"><div>L5</div></div>
          <div class="grid_g__6"><div>L6</div></div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: 'WhyGarlic',
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

@supports (display: grid) {
  .grid_g {
    display: grid;
    grid-template-columns: 10rem 1fr 10rem;
    grid-template-rows: auto;
    grid-template-areas:
      'g1 m g4'
      'g2 m g5'
      'g3 m g6';

    &__0,
    &__1,
    &__2,
    &__3,
    &__4,
    &__5,
    &__6 {
      align-self: center;
      justify-content: center;
    }

    &__0 {
      grid-area: m;
    }
    &__1 {
      grid-area: g1;
    }
    &__2 {
      grid-area: g2;
    }
    &__3 {
      grid-area: g3;
    }
    &__4 {
      grid-area: g4;
    }
    &__5 {
      grid-area: g5;
    }
    &__6 {
      grid-area: g6;
    }
  }
}
</style>
