<template>
  <div class="container p-3">
    <div class="d-flex flex-row justify-content-between">
      <div class="d-flex align-self-center">
        <span>© 2018 SiêuTỏi</span>
      </div>
      <div class="d-flex align-self-center">
        <a 
          class="social-link fb"
          href="#">
          <font-awesome-icon :icon="iconFacebook" />
        </a>
      </div>
    </div>
    
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'Footer',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      iconFacebook: faFacebookSquare
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/override';
footer {
  border-top: 1px solid $gray-200;

  .container {
    .social-link {
      color: $gray-600;
      font-size: 1.4rem;

      &.fb {
        &:hover,
        &:focus {
          color: #3b5998;
        }
      }
    }
  }
}
</style>
