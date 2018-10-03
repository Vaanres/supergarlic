<template>
  <section class="container p-3">
    <div class="row hero align-items-center">
      <div class="col">
        <p class="sub-headline mb-3">ĐẶC SẢN NINH THUẬN</p>
        <h1 class="headline mb-3">Tỏi Phan Rang</h1>
        <p class="description ">Chứa hàm lượng allicin, glucogen, aliin, fitonxit, vitamin và các nguyên tố vi lượng cao gấp nhiều lần tỏi thường. Chúng có tác dụng tăng cường đề kháng, chống lại virus gây bệnh, diệt khuẩn, sát trùng, chống viêm nhiễm và làm đẹp.</p>

        <button
          type="button"
          class="btn btn-primary btn-lg btn-hero mt-3">
          Đặt mua ngay
        </button>
      </div>
      <div class="col">
        <img 
          class="img-fluid"
          src="~assets/images/garlics/garlic.png" 
          alt="Siêu Tỏi Phan Rang">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Index',
  props: {
    index: {
      default: 1,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/override';

.container {
  .hero {
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
