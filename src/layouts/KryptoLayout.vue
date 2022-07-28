<script setup>
import { onMounted, computed, ref } from "vue";
import FirstSection from '../components/krypto/FirstSection.vue'
import Trade from '../components/krypto/Trade.vue'
import Cryptocurrency from '../components/krypto/Cryptocurrency.vue'
import Features from '../components/krypto/Features.vue'
import Platfrom from '../components/krypto/Platfrom.vue'
import Users from '../components/krypto/Users.vue'
import Analysis from '../components/krypto/Analysis.vue'
import Footer from '../components/krypto/Footer.vue'
import BurgerIcon from '../components/commissioner/BurgerIcon.vue'
import CrossIcon from '../components/commissioner/CrossIcon.vue'
import { useWindowSize } from '@vueuse/core'
const showMobileMenu = ref(false)
const { width, height } = useWindowSize()
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
  const descriptions = [
    {title: 'How it works'},
    {title: 'Cryptos'},
    {title: 'Features'},
    {title: 'Testimonial'},
    {title: 'University'},
  ]
</script>

<template>
  <div class="krypto">
    <router-link to="/" class="all-projects bg-no-repeat w-40px h-40px cursor-pointer top-10px left-10px absolute"/>
    <div class="header">
      <img class="logo" src="/images/krypto/header/logo.png" alt="">
      <div v-if="showButton ? showMobileMenu : true" class="description" :class="{'mobile-links': showButton }">
        <h1 v-for="d in descriptions">{{ d.title }}</h1>
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
    <FirstSection/>
    <Trade/>
    <Cryptocurrency/>
    <Features/>
    <Platfrom/>
    <Users/>
    <Analysis/>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.krypto {
  @apply flex flex-col items-center w-full h-full m-auto;
  background: #160E33;
  .all-projects {
  background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
  background-size: 100%;
  z-index: 555;
  }
  .header {
    @apply flex flex-row justify-between items-center w-full max-w-1100px py-35px relative;
    @media screen and (max-width: 991px) {
      position: sticky;
      box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
      top: 0;
      z-index: 100;
      background-color: #160E33;
      padding: 20px 10px;
    }
    .logo {
      @apply w-full max-w-83px h-full max-h-28px;
    }
    .description {
      @apply flex flex-row justify-center;
      h1 {
        @apply mr-30px text-white text-16px leading-19px font-400 cursor-pointer;
      }
    }
    .mobile-links {
      position: absolute;
      top: 100%;
      left: 0;
      padding: 20px 0px;
      z-index: 999;
      width: 100%;
      background: #eee;
      box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
      @apply flex-col items-center space-y-4;
      h1 {
        margin-left: 30px;
        color: black !important;
      }
    }
    .lang {
      @apply flex justify-between w-full max-w-72px h-full max-h-34px rounded-20px box-border py-8px px-12px;
      border: 2px solid red;
      @media screen and (max-width: 991px) {
        @apply mr-50px ;
      }
      .down {
        @apply w-18px h-18px;
      }
    }
  }
  .burger {
    @apply absolute top-24px right-10px;
  }
}

</style>
