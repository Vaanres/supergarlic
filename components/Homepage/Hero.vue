<template>
  <section>
    <div class="container">
      <div class="row hero align-items-center">
        <div class="col-12 col-md-6 order-2 order-md-1 hero-content-container">
          <p class="sub-headline text-dark bg-light mb-3 d-inline-flex"> ĐẶC SẢN NINH THUẬN</p>
          <h1 class="headline mb-3">Tỏi Phan Rang</h1>
          <p class="text-secondary ">Chứa hàm lượng allicin, glucogen, aliin, fitonxit, vitamin và các nguyên tố vi lượng cao gấp nhiều lần tỏi thường. Chúng có tác dụng tăng cường đề kháng, chống lại virus gây bệnh, diệt khuẩn, sát trùng, chống viêm nhiễm và làm đẹp.</p>
          <div class="row">
            <div class="col-12 col-md-8 col-lg-6 mt-3">
              <p class="price mb-0"> <b>150.000 đ </b> 
                <small class="text-secondary">/ 1 kg</small>
              </p>
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block btn-hero border-0">
                Đặt mua ngay
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 order-1 order-md-2 hero-img-container">
          <div class="d-flex img-wrapper align-items-center justify-content-center">
            <FloatImg :img-obj="imgObj" />
        
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FloatImg from '../Public/FloatImg'

export default {
  name: 'Hero',
  components: { FloatImg },
  data() {
    return {
      imgObj: {
        src: '/images/garlics/garlic-square.png',
        alt: 'Siêu Tỏi Phan Rang'
      }
    }
  },
  computed: {
    imgTranslate3D() {
      return `translateY(${this.imgObj.translateY}px)`
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      if (process.browser) {
        var y = window.pageYOffset
        var h = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        )

        this.imgObj.translateY = 0 - Math.round(y / 15)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/override';

@keyframes image-wrapper-inner {
  0% {
    background: transparentize($color: $garlic, $amount: 1);
    width: 0%;
    height: 0%;
  }

  100% {
    background: radial-gradient(white, transparentize($garlic, 0.5));
    width: 85%;
    height: 85%;
  }
}

.hero {
  padding: 0 0 3rem 0;

  @include media-breakpoint-up(md) {
    padding: 5rem 0;
  }

  @include media-breakpoint-up(lg) {
    padding: 1rem;
  }

  .price {
    font-size: 2rem;
  }

  .sub-headline {
    font-weight: 500;
    border-radius: 0.5rem;
    padding: 0.3rem 0.5rem;
    font-size: 0.8rem;
  }

  .headline {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: -1px;
  }

  .btn-hero {
    border-radius: 1rem;
  }

  &-img-container {
    .img-wrapper {
      position: relative;

      &::before {
        content: '';
        padding: 1rem;
        border-radius: 1000px;
        margin: 0 auto;
        position: absolute;
        z-index: -1;
        animation: image-wrapper-inner 0.5s cubic-bezier(0.5, -0.5, 0.5, 1.5)
          0.5s 1 alternate forwards;
        transition: all 0.3s ease-in-out;
      }

      img {
        transition: all 0.3s ease;
      }
    }
  }
}
</style>
