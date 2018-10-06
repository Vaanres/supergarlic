<template>
  <div class="d-inline-block item-detail text-right">
    <img
      class="img-fluid"
      src="holder.js/64x64"
      alt="holder">
    <p class="item-detail__title">Something like that</p>
    <span class="item-detail__description">Main description</span>
  </div>
</template>

<script>
export default {
  name: 'WhyItem'
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/override';

.item-detail {
  color: $garlic-dark;

  &__title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0px;
  }
}
</style>
