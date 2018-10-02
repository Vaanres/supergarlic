<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="primary">
    <div class="container">

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
        <b-navbar-nav class=" mr-auto">
          <b-nav-item 
            v-for="(item, index) in links"
            :key="index"
            :to="item.path" 
            class="nav-link"
            active-class="active"
            exact>  
            {{ item.name }}
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="navbar-actions">
          <a 
            class="btn btn-navbar btn-call" 
            href="tel:0898120400" >
            <font-awesome-icon
              icon="phone"
              fixed-width/> 0898 120 400
          </a>
          <button
            type="button"
            class="btn btn-outline-light outline-primary btn-navbar">
            Đặt mua ngay
          </button>
        </b-navbar-nav>
      </b-collapse>
    </div>
      
  </b-navbar>
</template>

<script>
//import Hamburger from "../components/Hamburger";

export default {
  name: 'Navigator',
  props: {
    links: {
      type: Array,
      default() {
        return []
      }
    }
  },
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

@keyframes vibration {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-6deg);
  }
  75% {
    transform: rotate(6deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

:root {
  --navbar-font-size: 1rem;
}

.navbar-dark {
  .navbar-toggler {
    border-color: transparentize($color: white, $amount: 1);
  }
}

.navbar-nav {
  @include media-breakpoint-down(xs) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    --navbar-font-size: 1.2rem;
  }

  .nav-item {
    .nav-link {
      @include media-breakpoint-up(md) {
        padding: 0rem 0.5rem;
        border-top: 3px solid transparentize($color: white, $amount: 1);

        &.active,
        &:hover {
          &:after {
            width: 100%;
            background: white;
          }
        }

        &:after {
          position: relative;
          top: 1rem;
          content: '';
          display: block;
          width: 0.5rem;
          height: 3px;
          border-radius: 3px 3px 0 0;
          background: transparentize($color: white, $amount: 1);
          transition: all 0.2s ease-in-out;
          margin: 0 auto;
        }
      }

      font-size: var(--navbar-font-size);
      text-align: center;
    }
  }

  &.navbar-actions {
    @include media-breakpoint-down(xs) {
      border-top: 1px solid transparentize($color: white, $amount: 0.8);
    }
  }

  .btn-navbar {
    font-size: var(--navbar-font-size);

    & ~ .btn-navbar {
      @include media-breakpoint-down(xs) {
        margin-top: 0.5rem;
      }

      @include media-breakpoint-up(md) {
        margin-left: 0.5rem;
      }
    }

    &.btn-call {
      color: white;
      &:hover {
        background: transparentize($color: white, $amount: 0.9);
      }
    }

    svg {
      width: 1rem;
    }

    &:hover {
      svg {
        animation: vibration 0.5s ease-in-out infinite;
      }
    }
  }
}
</style>
