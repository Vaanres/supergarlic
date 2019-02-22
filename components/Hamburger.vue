<template>
  <section>
    <button
      :class="{ 'is-active': isActive }"
      class="hamburger hamburger--spin"
      type="button"
      @click="toggleMenu()"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner" />
      </span>
    </button>
  </section>
</template>

<script>
export default {
  name: 'HamburgerButton',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>
