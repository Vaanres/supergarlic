<template>
  <div class="container">
    <div class="row no-gutters">
      <div class="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start"> 
        <div class="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
         
          <img
            class="logo mr-1"
            src="~assets/images/logo_dark.svg"
            alt="Siêu tỏi logo"><b>SiêuTỏi</b>
        </div>
      </div>
      <div class="col-12 col-md-4 d-flex align-items-center justify-content-center"> 
        <div class="mb-4 mb-md-0">
          <b-button 
            v-for="(item, index) in links"
            :key="index"
            :to="item.path" 
            variant="link"
            class="footer-link"> {{ item.name }}
          </b-button>
        </div>
      </div>
      <div class="col-12  col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
        <div>
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
  .logo {
    width: 2rem;
  }

  .footer-link {
    color: var(--gray);
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
      color: var(--gray-dark);
    }
    &:focus {
      text-decoration: none;
    }
  }

  .container {
    padding: 2rem 1rem;
  }

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
</style>
