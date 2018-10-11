<template>
  <div class="container">
    <div class="block-buy">
      <div class="block-buy__wrapper">
        <div>
          <img 
            class="block-buy__logo" 
            src="https://sketchapp.com/images/pages/home/52/logo@2x.png" 
            width="150"
            alt="Sketch Logo">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'RequestForm',
  data() {
    return {
      email: '',
      phone: '',
      name: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.block-buy {
  &__wrapper {
    padding: 6.25rem 4.375rem !important;
    border-radius: 2rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 30px rgba(117, 113, 128, 0.15);
    background-image: linear-gradient(
      45deg,
      #6d1386 0%,
      #3a2099 100%
    ) !important;
  }

  &__logo {
    position: absolute;
    left: -90px;
    top: calc(50% + 12px);
    transform: translate(0, -50%);
  }
}
</style>
