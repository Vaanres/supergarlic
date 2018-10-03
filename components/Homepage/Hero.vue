<template>
  <section class="container p-3">
    <div class="row hero align-items-center">
      <div class="col-12 col-md-6 order-2 order-md-1 hero-content-container">
        <p class="sub-headline mb-3 d-inline-flex"> ĐẶC SẢN NINH THUẬN</p>
        <h1 class="headline mb-3">Tỏi Phan Rang</h1>
        <p class="description ">Chứa hàm lượng allicin, glucogen, aliin, fitonxit, vitamin và các nguyên tố vi lượng cao gấp nhiều lần tỏi thường. Chúng có tác dụng tăng cường đề kháng, chống lại virus gây bệnh, diệt khuẩn, sát trùng, chống viêm nhiễm và làm đẹp.</p>

        <button
          type="button"
          class="btn btn-primary btn-lg btn-hero mt-3">
          Đặt mua ngay
        </button>
      </div>
      <div class="col-12 col-md-6 order-1 order-md-2 hero-img-container">
        <div class="d-flex img-wrapper  align-items-center justify-content-center">
          <div class="d-flex align-items-stretch img-wrapper__inner"/>
          <img 
            v-lazy="imgObj"
            class="img-fluid hero-img"
            alt="Siêu Tỏi Phan Rang"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
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

@keyframes image-wrapper-inner {
  0% {
    background: transparentize($color: #dacfcc, $amount: 1);
    width: 100px;
    height: 100px;
  }

  100% {
    background: transparentize($color: #dacfcc, $amount: 0.5);
    width: var(--image-wrapper-inner-size);
    height: var(--image-wrapper-inner-size);
  }
}

.container {
  .hero {
    @include media-breakpoint-up(xs) {
      padding: 3rem 0;
      --image-wrapper-inner-size: calc(100vw - 64px);
    }

    @include media-breakpoint-up(md) {
      padding: 5rem 0;
      --image-wrapper-inner-size: 320px;
    }

    @include media-breakpoint-up(lg) {
      --image-wrapper-inner-size: 400px;
    }

    .sub-headline {
      font-weight: 500;
      color: $secondary;
      background: transparentize($color: $secondary, $amount: 0.9);
      border-radius: 0.5rem;
      padding: 0.3rem 0.5rem;
      font-size: 0.8rem;
    }

    .headline {
      font-size: 3rem;
      font-weight: bold;
      letter-spacing: -1px;
    }

    .description {
      color: $secondary;
    }

    .btn-hero {
      border-radius: 1rem;
    }

    &-img-container {
      .img-wrapper {
        position: relative;

        &__inner {
          border-radius: 1000px;
          position: absolute;
          animation: image-wrapper-inner 0.5s cubic-bezier(0.5, -0.5, 0.5, 1.5)
            0.15s 1 alternate forwards;
          z-index: -1;
          transition: all 0.3s ease-in-out;
        }

        .hero-img {
          transition: all 0.3s ease-in-out;
        }
      }

      @include media-breakpoint-down(xs) {
        margin-bottom: 5rem;
      }
    }
  }
}
</style>
