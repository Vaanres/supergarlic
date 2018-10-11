<template>
  <div class="scroll-down__wrapper">
    <transition 
      name="custom-classes-transition"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown">
      <div 
        v-show="show"
        :style="{opacity: opacity}"
        class="scroll-down"
        @click="buttonScrollDownClicked"
        @mouseover="buttonScrollDownMouseOver"
        @mouseleave="buttonScrollDownMouseOut">

        <div class="scroll-down__img-wrapper">
          <img 
            :class="{tada:hover, rubberBand:clicked}"
            class="mouse animated"
            src="/images/svg/icon_mouse.svg"
            alt="scrolldown">
          <img 
            class="arrow"
            src="/images/svg/icon_arrow_down.svg"
            alt="icon arrow down">
          <img 
            class="arrow"
            src="/images/svg/icon_arrow_down.svg"
            alt="icon arrow down">
        </div>
      </div>

    </transition>
  </div>
  

</template>

<script>
import $ from 'jquery'
export default {
  name: 'ScrollDown',
  props: {
    scrollTo: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      opacity: 1,
      display: false,
      show: false,
      hover: false,
      clicked: false
    }
  },
  mounted() {
    var _this = this
    setTimeout(() => {
      _this.show = true
    }, 1000)
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    displayScrollDown() {
      var scrollHeight = document.body.scrollHeight
      var height = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )

      if (scrollHeight > height) {
        this.display = true
      } else {
        this.display = false
      }
    },
    buttonScrollDownClicked() {
      this.hover = false
      this.clicked = true
      var _this = this

      $('html, body').animate(
        {
          scrollTop: $(`.${_this.scrollTo}`).offset().top
        },
        500
      )
    },
    buttonScrollDownMouseOver(el) {
      this.clicked = false
      this.hover = true
    },
    buttonScrollDownMouseOut(el) {
      this.clicked = false
      this.hover = false
    },
    handleScroll(e) {
      // var w = Math.max(
      //   document.documentElement.clientWidth,
      //   window.innerWidth || 0
      // );

      // this.opacity = 1 - (y / h + 0.4);

      var h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )

      var y = window.pageYOffset

      if (y / h >= 0.1) {
        this.show = false
      } else {
        this.show = true
      }
    }
  }
}
</script>

<style lang="scss" scoped >
@import '~assets/styles/override';

.scroll-down {
  display: inline-flex;
  align-content: center;
  cursor: pointer;
  --color: $color-text-light;

  &__wrapper {
    position: fixed;
    bottom: 2rem;
    left: 50%;
  }

  &__img-wrapper {
    display: inline-flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .mouse {
      width: 1rem;
      opacity: 0.8;
      margin-bottom: 0.3rem;
    }

    @keyframes mqn-down-arrow {
      0%,
      100% {
        opacity: 0.25;
        transform: translate3d(0, 0, 0);
      }

      50% {
        opacity: 1;
        transform: translate3d(0, 3px, 0);
      }
    }

    .arrow {
      width: 0.7rem;
      animation: mqn-down-arrow 1s ease-in-out infinite;
    }
  }

  &__content {
    display: flex;
    justify-items: center;
    align-items: center;
    color: var(--color);
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 500;
    transition: all 0.3s linear;
  }

  &:hover {
    --color: $color-text;
  }
}
</style>
