<template>

  <div
    class="d-inline-block item-detail py-4">
    <div
      class="item-detail__icon d-inline-flex justify-content-center align-items-center p-1 mb-2">
      <div class="item-detail__icon__number d-inline-block">
        {{ getOrderNumber }}
      </div>
    </div>
    <div>
      <p class="item-detail__title mb-1">
        <b>{{ title }}</b>
      </p>
      <p class="item-detail__description mb-0">
        {{ description }}
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
  computed: {
    getOrderNumber: function() {
      return this.id + 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/override';

.item-detail {
  color: $garlic-dark;

  &__icon {
    border: 2px dashed $garlic;
    border-radius: 10rem;
    width: 3rem;
    height: 3rem;

    &__number {
      font-size: 2rem;
      line-height: 1;
      font-weight: bold;
    }
  }

  &__title {
    font-size: 1rem;
  }

  &__description {
    font-size: 0.8rem;
  }
}
</style>
