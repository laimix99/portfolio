<script setup>
import { ref, computed } from 'vue'
import BurgerIcon from '../commissioner/BurgerIcon.vue'
import CrossIcon from '../commissioner/CrossIcon.vue'
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()
const emit = defineEmits(["link"])
const showMobileMenu = ref(false)
const showButton = computed(() => {
  if (width.value < 991) {
    return true;
  } else {
    return false;
  }
})
const handleMobileMenu = () => {
showMobileMenu.value = !showMobileMenu.value
}
const links = [
  {title: 'How it works', id: 'works'},
  {title: 'Cryptos' , id: 'cryptos'},
  {title: 'Features', id: 'features'},
  {title: 'Testimonial', id: 'testimonial'},
  {title: 'University', id: 'university'},
]
const linkClick = (id) => {
  handleMobileMenu()
  emit('link', id)
}
</script>

<template>
  <div class="header-cover">
    <!-- <router-link to="/" class="bg-no-repeat cursor-pointer h-40px top-10px left-10px w-40px all-projects absolute"/> -->
    <div class="header">
      <img class="logo" src="/images/krypto/header/logo.png" alt="">
      <div v-if="showButton ? showMobileMenu : true" class="description" :class="{'mobile-links': showButton }">
        <h1 v-for="link in links" :key="link.id" @click="linkClick(link.id)">{{ link.title }}</h1>
      </div>
      <div class="lang">
        <img src="/images/krypto/header/lang.svg" alt="">
        <img class="down" src="/images/krypto/header/down.png" alt="">
      </div>
    <button v-if="showButton" class="burger" @click="handleMobileMenu" >
        <BurgerIcon v-if="!showMobileMenu" />
        <CrossIcon v-else />
    </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-cover {
  @apply flex flex-col h-full w-full items-center;
  background: #160E33;
  @media screen and (max-width: 991px) {
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .all-projects {
  background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
  background-size: 100%;
  z-index: 555;

  }
  .header {
    @apply flex flex-row w-full max-w-1100px py-35px justify-between items-center relative;
    @media screen and (max-width: 991px) {
      top: 0;
      z-index: 100;
      padding: 20px 10px;
      box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
    }
    .logo {
      @apply h-full w-full max-w-83px max-h-28px;
    }
    .description {
      @apply flex flex-row justify-center;
      h1 {
        @apply cursor-pointer font-400 mr-30px text-white text-16px leading-19px;
      }
    }
    .mobile-links {
      position: absolute;
      top: 100%;
      left: 0;
      padding: 20px 0px;
      z-index: 999;
      width: 100%;
      background: #160E33;
      box-shadow: 0px 1px 30px rgb(0, 0, 0, 0.3);
      @apply flex-col space-y-4 items-center;
      h1 {
        margin-left: 30px;
        color: white !important;
      }
    }
    .lang {
      @apply flex h-full rounded-20px w-full max-w-72px max-h-34px py-8px px-12px justify-between box-border;
      border: 2px solid red;
      @media screen and (max-width: 991px) {
        @apply mr-50px ;
      }
      .down {
        @apply h-18px w-18px;
      }
    }
  }
  .burger {
    @apply top-24px right-10px absolute;
  }
}
</style>
