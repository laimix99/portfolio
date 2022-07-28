<script setup>
import { ref, computed, reactive, onBeforeMount } from 'vue';
import FirstSection from '../components/breew/FirstSection.vue'
import SecondSection from '../components/breew/SecondSection.vue'
import ThirdSection from '../components/breew/ThirdSection.vue'
import FourthSection from '../components/breew/FourthSection.vue'
import SixthSection from '../components/breew/SixthSection.vue'
import SeventhSection from '../components/breew/SeventhSection.vue'
import EighthSection from '../components/breew/EighthSection.vue'
import NinthSection from '../components/breew/NinthSection.vue'
import TenthSection from  '../components/breew/TenthSection.vue'
import Footer from '../components/breew/Footer.vue'
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
const links = ['Home', 'About', 'Token', 'Pages']
</script>

<template>
  <div class="breew-layout">
    <router-link to="/" class="all-projects bg-no-repeat w-40px h-40px cursor-pointer top-10px left-10px absolute z-10"/>
    <div class="container ">
      <div class="header ">
        <img src="/images/breew/header/logo.png" alt="">
        <div v-if="showButton ? showMobileMenu : true" class="menu" :class="{ 'mobile-links' : showButton }">
          <div class="link" v-for="link in links">{{ link }}</div>
        </div>
        <button>Download app</button>
      </div>
      <button v-if="showButton" class="burger" @click="handleMobileMenu" >
        <BurgerIcon 
          v-if="!showMobileMenu"
          fill="black"
        />
        <CrossIcon 
          v-else
          fill="black" 
        />
      </button>
    </div>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <SixthSection/>
    <SeventhSection/>
    <EighthSection/>
    <NinthSection/>
    <TenthSection/>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.breew-layout {
  @apply flex flex-col items-center w-full ;
  background-color: #FAFAFA;
  .all-projects {
    background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
    background-size: 100%;
  }
  
  .container {
    @apply w-full max-w-1500px py-10px; 
          @media screen and (max-width: 991px) {
      position: sticky;
      box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
      top: 0;
      z-index: 100;
      background-color: #FAFAFA;
    }
    
    .header {
      @apply flex justify-between items-center w-full relative;
      @media screen and (max-width: 1500px) {
        @apply px-10px;
      }

      // @media screen and (max-width: 991px) {
      //   position: sticky;
      // }
      img {
        @apply ;
        @media screen and (max-width: 767px) {
          @apply w-150px;
        }
      }
      .menu {
        @apply flex ;
        .link {
          @apply mr-68px text-20px font-600 leading-30px text-black cursor-pointer;
        }
      }
      .mobile-links {
        position: absolute;
        top: 100%;
        left: 0;
        padding: 20px 0px;
        z-index: 999;
        width: 100%;
        background: #e7e6e6;
        // box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
        animation-duration: 1s;
        animation-name: slidein;
        @apply flex-col items-center space-y-4;
        
        .link {
          margin-left: 60px;
          color: black !important;
        }
      }
      // @keyframes slidein {
      //   from {
      //     margin-bottom: 100%;
      //     width: 300%;
      //   }

      //   to {
      //     margin-top: 0%;
      //     width: 100%;
      //   }
      // }
      button {
        @apply text-24px font-700 leading-31px text-white rounded-27px py-29px px-44px;
        background-color: #0582CA;
        white-space: nowrap;
        @media screen and (max-width: 1500px) {
          @apply py-25px px-35px;
        }
        @media screen and (max-width: 991px) {
          @apply text-20px mr-50px;
        }
        @media screen and (max-width: 767px) {
          @apply text-15px py-15px px-18px;
        }
      }
    }
    .burger {
      @apply absolute top-30px right-10px;
      @media screen and (max-width: 767px) {
        @apply top-20px;
      }
    }
  }
}
</style>
