<template>
  <section>
    <button class="hamburger hamburger--spin"
    :class="{'is-active': isActive}" @click="toggleMenu()" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
    </button>
  </section>
</template>

<script>

export default {
  name:"HamburgerButton",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

