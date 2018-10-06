<template>
  <section class="section section__light">
    <div class="container">
      <h2 class="section__light__title text-center">Tại sao Tỏi Phan Rang đặc biệt?</h2>
      <p class="section__light__subtitle text-center">Chứa hàm lượng allicin, glucogen, aliin, fitonxit, vitamin và các nguyên tố vi lượng cao gấp
      lần tỏi thường.</p>

      <div class="col-12 why-garlic">
        <div class="grid_g">
          <div class="grid_g__0">
            <div class="img-container">
              <div class="d-flex img-wrapper align-items-center justify-content-center">
                <div class="d-flex align-items-stretch img-wrapper__inner"/>
                <img
                  v-lazy="imgObj"
                  class="img-fluid"
                  alt="Siêu Tỏi Phan Rang">
              </div>
            </div>

          </div>
          <div class="grid_g__1">
            <why-item/>
          </div>
          <div class="grid_g__2">
            <why-item/>
          </div>
          <div class="grid_g__3">
            <why-item/>
          </div>
          <div class="grid_g__4">
            <why-item/>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import WhyItem from './WhyItem'

export default {
  name: 'WhyGarlic',
  components: { WhyItem },
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

:root {
  --image-wrapper-inner-size: 256px;
}

@supports (display: grid) {
  .grid_g {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'g1 m g3'
      'g2 m g4';

    &__0,
    &__1,
    &__2,
    &__3,
    &__4 {
      align-self: center;
      justify-self: center;
    }

    // &__1,
    // &__2 {
    //   justify-self: end;
    // }

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
  }
}

.why-garlic {
  margin: 10rem 0 5rem 0;

  @include media-breakpoint-up(md) {
    --image-wrapper-inner-size: 320px;
  }

  @include media-breakpoint-up(lg) {
    --image-wrapper-inner-size: 400px;
  }

  .img-container {
    .img-wrapper {
      position: relative;

      &__inner {
        border-radius: 1000px;
        position: absolute;
        width: 320px;
        height: 320px;
        background: radial-gradient(
          $garlic,
          transparentize($color: $garlic, $amount: 1)
        );

        transition: all 0.3s ease-in-out;
      }

      img {
        z-index: 1;
      }
    }

    @include media-breakpoint-down(xs) {
      margin-bottom: 5rem;
    }
  }
}
</style>
