<template>
  <div class="container ">
    <div class="d-flex flex-row justify-content-between">
      <div class="d-flex align-self-center">
        <span>© 2018 SiêuTỏi</span>
      </div>
      <div class="d-flex align-self-center">
        <a 
          v-b-tooltip="tooltip"
          class="social-link"
          title="Theo dõi Siêu Tỏi trên Facebook"
          href="#">
          <font-awesome-icon :icon="iconFacebook" />
        </a>
        <a 
          v-b-tooltip="tooltip"
          class="social-link"
          title="Chat với Siêu Tỏi trên Facebook Messenger"
          href="#">
          <font-awesome-icon :icon="iconMessenger" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebookF,
  faFacebookMessenger
} from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'Footer',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      tooltip: { delay: { show: 300, hide: 100 } },
      iconMessenger: faFacebookMessenger,
      iconFacebook: faFacebookF
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/override';

:root {
  --footer-social-link-color: var(--secondary);
}

footer {
  .container {
    padding: 2rem 1rem;

    .social-link {
      color: var(--footer-social-link-color);
      width: 3rem;
      height: 3rem;
      border: 1px solid var(--footer-social-link-color);
      border-radius: 10rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      opacity: 0.5;
      font-size: 1.2rem;
      transition: all 0.3s ease-in-out;

      &:hover,
      &:focus {
        --footer-social-link-color: var(--gray-dark);
        opacity: 1;
      }

      & ~ .social-link {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
