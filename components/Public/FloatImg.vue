<template>
  <img
    v-lazy="imgObj"
    :src="imgLoadingSrc"
    :alt="imgObj.alt"
    :style="{ transform: imgTranslate3D }"
    class="img-fluid"
  />
</template>

<script>
export default {
  name: 'FloatImg',
  props: {
    alt: {
      type: String,
      default: ''
    },
    imgObj: {
      type: Object,
      default: function() {
        return {
          src: '/images/lazyload/loading.svg',
          alt: ''
        }
      }
    }
  },
  data() {
    return {
      translateY: 0,
      imgLoadingSrc: this.imgObj.src
    }
  },
  computed: {
    imgTranslate3D() {
      return `translateY(${this.translateY}px)`
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      var y = window.pageYOffset
      // var h = Math.max(
      //   document.documentElement.clientHeight,
      //   window.innerHeight || 0
      // )

      this.translateY = 0 - Math.round(y / 15)
    }
  }
}
</script>

<style lang="scss" scoped></style>
