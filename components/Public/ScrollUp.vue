<template>
  <transition 
    name="custom-classes-transition"
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutDown">
    <div 
      v-if="show"
      class="btn-scroll-up"
      @mouseover="buttonScrollUpMouseOver"
      @mouseleave="buttonScrollUpMouseOut"
      @click="buttonScrollUpClicked">

      <div 
        :class="{animate:hover}"
        class="btn-scroll-up__icon">
        <font-awesome-icon
          icon="arrow-up"
          fixed-width/> 
      </div>
    </div>
  </transition>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'ScrollUp',

  data() {
    return {
      show: false,
      hover: false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    buttonScrollUpClicked() {
      $('html, body').animate({ scrollTop: 0 }, 500)
      this.hover = false
    },
    buttonScrollUpMouseOver(el) {
      this.hover = true
    },
    buttonScrollUpMouseOut(el) {
      this.hover = false
    },
    handleScroll() {
      this.show = window.pageYOffset >= 300 ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/override';

:root {
  --scroll-up-color: var(--gray);
}

.btn-scroll-up {
  position: fixed;
  display: inline-flex;
  width: 3rem;
  height: 3rem;
  bottom: 2rem;
  right: 2rem;
  border-radius: 2rem;
  transition: all 0.5s ease;

  text-align: center;
  justify-content: center;
  vertical-align: middle;
  flex-direction: column;
  cursor: pointer;
  color: $secondary;
  border: 1px solid $gray-200;
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: $gray-300;
    color: $gray-700;
  }

  @include media-breakpoint-up(lg) {
    &__icon {
      &.animate {
        animation-duration: 0.8s;
        animation-name: arrowAnimation;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
      }
    }
  }
}

@keyframes arrowAnimation {
  0% {
    opacity: 1;
    transform: translateY(8px);
  }

  100% {
    opacity: 0;
    transform: translateY(-8px);
  }
}
</style>
