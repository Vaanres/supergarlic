<template>
  <section class="section section__light">
    <div class="container">
      <h2 class="section__light__title text-center">Tại sao Tỏi Phan Rang đặc biệt?</h2>
      <p class="section__light__subtitle text-center">Chứa hàm lượng allicin, glucogen, aliin, fitonxit, vitamin và các nguyên tố vi lượng cao gấp
      lần tỏi thường.</p>

      <div class="col-12 why-garlic">
        <div class="grid_g">
          <div class="grid_g__item grid_g__m">
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
          <div
            v-for="(item, index) in items"
            :key="index"
            :class="getItemIndex(index)"
            class="grid_g__item">
            <why-item
              :id="getItemIndex(index)"
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
      imgObj: {
        src: '/images/garlics/garlic.png'
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
            'Giúp cơ thể chống lại cơn cảm lạnh thông thường, giảm ho và phục hồi sức khỏe nhanh hơn.',
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
          title: 'Cải thiện hệ xương',
          description:
            'Tỏi chứa nhiều chất dinh dưỡng giúp phát triển hệ xương khỏe mạnh, đặc biệt làm chậm quá trình loãng xương ở phụ nữ.',
          image: 'https://via.placeholder.com/64x64',
          position: 'left'
        },
        {
          title: 'Ngăn ngừa nguy cơ sinh non',
          description:
            'Các hợp chất kháng sinh trong tỏi có khả năng giảm nguy cơ sinh non tự phát.',
          image: 'https://via.placeholder.com/64x64',
          position: 'left'
        }
      ]
    }
  },
  // computed: {
  //   getItemIndex(number) {
  //     console.log(number)
  //     return ''
  //   }
  // },
  methods: {
    getItemIndex(id) {
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

@supports (display: grid) {
  .grid_g {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'g1 m g4'
      'g2 m g5'
      'g3 m g6';

    // &__item {
    //   justify-self: center;
    // }

    &__m {
      align-self: center;
    }

    &__m {
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
