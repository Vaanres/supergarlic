<template>
  <div>
    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark">

      <b-navbar-brand
        href="#"
        class="d-flex">
        <img
          class="mr-1"
          src="~assets/images/logo.svg"
          alt="Siêu tỏi logo"><b>SiêuTỏi</b>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>
      <b-collapse
        id="nav_collapse"
        is-nav>
        <b-navbar-nav class="ml-auto mr-auto">
          <b-nav-item href="#">Trang chủ</b-nav-item>
          <b-nav-item href="#">Bảng giá</b-nav-item>
          <b-nav-item href="#">Về chúng tôi</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="navbar-actions">
          <button
            type="button"
            class="btn btn-outline-light ">
            <font-awesome-icon
              icon="phone"
              flip="horizontal"/> 0898120400
          </button>
          <button
            type="button"
            class="btn btn-outline-light">
            Đặt mua ngay
          </button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

</template>

<script>
//import Hamburger from "../components/Hamburger";

export default {
  name: 'Navigator',
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

<style lang="scss" scoped>
@import '~assets/styles/override';

$navbar-font-size: 1.2rem;

.navbar-dark {
  .navbar-toggler {
    border-color: transparentize($color: white, $amount: 1);
  }
}

.navbar-nav {
  @include media-breakpoint-down(xs) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .nav-link {
    font-size: $navbar-font-size;
    text-align: center;
  }

  //   &.navbar-actions {
  //     @include media-breakpoint-down(xs) {
  //       border-top: 1px solid white;
  //     }
  //   }

  button {
    font-size: $navbar-font-size;

    & ~ button {
      @include media-breakpoint-down(xs) {
        margin-top: 0.5rem;
      }
      @include media-breakpoint-up(md) {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
