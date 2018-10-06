<template>
  <div
    :class="itemPosition"
    class="d-inline-block item-detail p-4">

    <div
      v-if="image"
      class="item-detail__img_wrapper d-inline-block p-1 mb-2">
      <img
        :src="image"
        class="img-fluid"
        alt="holder">
    </div>
    <div>
      <p class="item-detail__title mb-0">
        <b>{{ title }}</b>
      </p>
      <p class="item-detail__description mb-0">
        <small>{{ description }}</small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyItem',
  props: {
    id: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'left'
    }
  },
  data: function() {
    return {
      itemPosition: this.position == 'right' ? 'text-lg-right' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/override';

.item-detail {
  color: $garlic-dark;

  &__img_wrapper {
    border: 1px dashed $garlic;
    border-radius: 50%;
    img {
      border-radius: 50%;
    }
  }

  &__title {
    font-size: 1rem;
  }
}
</style>
