<template>
  <section class="section section__light">
    <div class="container">
      <h2 class="section__light__title text-center">Tại sao <br class="d-block d-sm-none"> Tỏi Phan Rang <br class="d-block d-sm-none"> đặc biệt?</h2>
      <p class="section__light__subtitle text-center">Chứa hàm lượng allicin, glucogen, aliin, fitonxit, vitamin và các nguyên tố vi lượng cao gấp
      lần tỏi thường.</p>

      <div class="col-12 p-0 mt-5 why-garlic">
        <div class="grid_g">
          <div class="grid_g__item grid_g__m">
            <div class="img-container">
              <div class="d-flex img-wrapper align-items-center justify-content-center">
                <div class="d-inline-flex align-items-stretch img-wrapper__inner">
                  <div 
                    v-scroll-reveal="reveal">
                    <img
                      v-lazy="imgObj"
                      src="/images/lazyload/loading.svg"
                      class="img-fluid"
                      alt="Siêu Tỏi Phan Rang">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-for="(item, index) in items"
            :key="index"
            :class="getGridItemIndex(index)"
            class="grid_g__item">
            <why-item
              :id="index"
              :title="item.title"
              :description="item.description"
              :image="item.image"
              :position="item.position"/>
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
      reveal: {
        duration: 1000,

        distance: '4rem',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        scale: 0.7,
        opacity: 0.3,
        mobile: false,
        delay: 100
      },
      imgObj: {
        src: '/images/garlics/garlic-square.png'
      },
      items: [
        {
          title: 'Phòng chống ung thư',
          description:
            'Chống lại ung thư dạ dày và đại trực tràng, giảm tỷ lệ các khối u ung thư.',
          image: 'https://via.placeholder.com/64x64',
          position: 'right'
        },
        {
          title: 'Trị cảm cúm thông thường',
          description:
            'Giúp chống lại cơn cảm lạnh thông thường, giảm ho và phục hồi sức khỏe nhanh hơn.',
          image: 'https://via.placeholder.com/64x64',
          position: 'right'
        },
        {
          title: 'Trị mụn trứng cá',
          description:
            'Điều trị mụn tự nhiên có hiệu quả cao, ngừa sẹo mụn, các bệnh ngoài da và dị ứng.',
          image: 'https://via.placeholder.com/64x64',
          position: 'right'
        },
        {
          title: 'Ổn định huyết áp',
          description: 'Giúp cơ thể luôn duy trì mức huyết áp ổn định.',
          image: 'https://via.placeholder.com/64x64',
          position: 'left'
        },
        {
          title: 'Ngăn ngừa nguy cơ sinh non',
          description:
            'Các hợp chất kháng sinh trong tỏi có khả năng giảm nguy cơ sinh non tự phát.',
          image: 'https://via.placeholder.com/64x64',
          position: 'left'
        },
        {
          title: 'Cải thiện hệ xương',
          description:
            'Chứa nhiều chất dinh dưỡng giúp phát triển hệ xương khỏe mạnh, làm chậm quá trình loãng xương.',
          image: 'https://via.placeholder.com/64x64',
          position: 'left'
        }
      ]
    }
  },
  methods: {
    getGridItemIndex(id) {
      return `grid_g__${id + 1}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/override';

:root {
  --image-wrapper-inner-size: 256px;
}

@include media-breakpoint-between(sm, md) {
  .section {
    background: transparent url('/images/garlics/garlic-bg-2.jpg') center 80%
      no-repeat;
    background-size: cover;
    padding-top: 60px;
    padding-bottom: 40vh;
  }
}

@supports (display: grid) {
  .grid_g {
    display: grid;
    gap: 2rem;

    @for $i from 1 through 6 {
      &__#{$i} {
        grid-area: g#{$i};
      }
    }

    &__m {
      grid-area: m;
    }

    grid-template-columns: 1fr;
    grid-auto-columns: auto;
    grid-auto-rows: auto;
    grid-template-areas:
      'g1'
      'g2'
      'g3'
      'g4'
      'g5'
      'g6'
      'm';

    &__m {
      display: none;
    }

    @include media-breakpoint-up(sm) {
      gap: 1rem;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, auto);
      grid-template-areas:
        'g1 g2 g3 '
        'g4 g5 g6'
        'm m m';
    }

    @include media-breakpoint-up(lg) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        'g1 g1 g1 g1'
        'g2 m m g3'
        'g4 m m g5'
        'g6 g6 g6 g6';

      // Style
      &__m {
        display: block;
        padding: 0 3rem;
        align-self: center;
      }

      &__1,
      &__6 {
        justify-self: center;
        text-align: center;
      }

      &__2,
      &__4 {
        justify-self: right;
        text-align: right;
      }
    }
  }
}

.why-garlic {
  .img-container {
    .img-wrapper {
      &__inner {
        border: 1px dotted $garlic;
        border-radius: 100rem;
        padding: 2rem;
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>
