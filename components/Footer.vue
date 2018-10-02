<template>
  <div class="container pt-3 pb-3">
    <div class="row no-gutters justify-content-between">
      <div>
        © 2018 Tỏi Phan Rang
      </div>
      <div class="justify-content-end">
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
  //background-color: $gray-100;
  .container {
    .social-link {
      color: $gray-600;
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
