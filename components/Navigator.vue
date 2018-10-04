<template>
  <b-navbar
    toggleable="md" 
    variant="faded"
    type="light"
  >
    <div class="container">
      <b-navbar-brand
        href="/"
        class="d-flex align-items-center">
        <img
          class="mr-1"
          src="~assets/images/logo_dark.svg"
          alt="Siêu tỏi logo"><b>SiêuTỏi</b>
      </b-navbar-brand>

      <b-navbar-toggle 
        class="pr-0" 
        target="nav_collapse"/>
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
            class="btn btn-navbar btn-light"
            href="tel:0898120400" >
            <!-- btn-navbar btn-call -->
            <font-awesome-icon
              icon="phone"
              fixed-width/> 0898 120 400
          </a>
          <button
            type="button"
            class="btn btn-primary btn-navbar">
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

.navbar {
  background: white;
  border-bottom: 1px solid $gray-200;

  &-brand {
    img {
      width: 30px;
      height: 30px;
    }
  }

  @include media-breakpoint-down(xs) {
    background: linear-gradient(to bottom, $gray-100, white);
  }
}

.navbar-light {
  .navbar-toggler {
    outline: none;
    border-color: transparentize($color: white, $amount: 1);
  }
}

.navbar-nav {
  @include media-breakpoint-down(xs) {
    --navbar-font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .nav-item {
    .nav-link {
      &.active {
        color: $primary;
      }

      @include media-breakpoint-up(md) {
        padding: 0rem 0.5rem;
        border-top: 3px solid transparentize($color: white, $amount: 1);

        &.active {
          &:after {
            width: 100%;
            background: $primary;
          }
        }

        &:hover:not(.active) {
          &:after {
            width: 2rem;
            background: $secondary;
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
          transition: all 0.15s ease-in-out;

          margin: 0 auto;
        }
      }

      font-size: var(--navbar-font-size);
      text-align: center;
    }
  }

  // &.navbar-actions {
  //   @include media-breakpoint-down(xs) {
  //     border-top: 1px solid $gray-100;
  //   }
  // }

  .btn-navbar {
    font-size: var(--navbar-font-size);

    & ~ .btn-navbar {
      @include media-breakpoint-down(md) {
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
