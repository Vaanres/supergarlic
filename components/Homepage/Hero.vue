<template>
  <section class="container p-3">
    <div class="row hero align-items-center">
      <div class="col-12 col-md-6 order-2 order-md-1">
        <p class="sub-headline mb-3">ĐẶC SẢN NINH THUẬN</p>
        <h1 class="headline mb-3">Tỏi Phan Rang</h1>
        <p class="description ">Chứa hàm lượng allicin, glucogen, aliin, fitonxit, vitamin và các nguyên tố vi lượng cao gấp nhiều lần tỏi thường. Chúng có tác dụng tăng cường đề kháng, chống lại virus gây bệnh, diệt khuẩn, sát trùng, chống viêm nhiễm và làm đẹp.</p>

        <button
          type="button"
          class="btn btn-primary btn-lg btn-hero mt-3">
          Đặt mua ngay
        </button>
      </div>
      <div class="col-12 col-md-6 order-1 order-md-2">
        <img 
          v-lazy="imgObj"
          class="img-fluid"
          alt="Siêu Tỏi Phan Rang"
        >
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

.container {
  .hero {
    padding-top: 5rem;
    padding-bottom: 5rem;
    min-height: 70vh;
    .sub-headline {
      font-weight: bold;
      color: $secondary;
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
  }
}
</style>
