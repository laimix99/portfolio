<script setup>
import {ref, computed} from 'vue'
import BurgerIcon from '../commissioner/BurgerIcon.vue'
import CrossIcon from '../commissioner/CrossIcon.vue'
import { useWindowSize } from '@vueuse/core'
const emit = defineEmits(['link'])
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
const links = [
  {title: 'Home', id: 'home'},
  {title: 'About', id: 'about'},
  {title: 'Token', id: 'token'},
  {title: 'Pages', id: 'pages'},
]
const linkClick = (id) => {
  handleMobileMenu()
  emit('link', id)

}

</script>

<template>
  <div class="header-cover">
    <div class="container ">
      <div class="header ">
        <img src="/images/breew/header/logo.png" alt="">
        <div v-if="showButton ? showMobileMenu : true" class="menu" :class="{ 'mobile-links' : showButton }">
          <div class="link" v-for="link in links" :key="link.id" @click="linkClick(link.id)" >{{ link.title }}</div>
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
  </div>
</template>

<style lang="scss" scoped>
  .header-cover {
    @apply flex flex-row w-full items-center;
    @media screen and (max-width: 991px) {
      position: sticky;
      box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
      top: 0;
      z-index: 100;
      background-color: #FAFAFA;
    }
    .container {
    @apply w-full max-w-1500px py-10px; 
    // @media screen and (max-width: 991px) {
    //   position: sticky;
    //   box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
    //   top: 0;
    //   z-index: 100;
    //   background-color: #FAFAFA;
    // }
    
    .header {
      @apply flex w-full justify-between items-center relative;
      @media screen and (max-width: 1500px) {
        @apply px-10px;
      }
      img {
        @apply ;
        @media screen and (max-width: 767px) {
          @apply w-150px;
        }
      }
      .menu {
        @apply flex ;
        .link {
          @apply cursor-pointer font-600 mr-68px text-black text-20px leading-30px;
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
        @apply flex-col space-y-4 items-center;
        
        .link {
          margin-left: 60px;
          color: black !important;
        }
      }
      button {
        @apply rounded-27px font-700 text-white py-29px px-44px text-24px leading-31px;
        background-color: #0582CA;
        white-space: nowrap;
        @media screen and (max-width: 1500px) {
          @apply py-25px px-35px;
        }
        @media screen and (max-width: 991px) {
          @apply mr-50px text-20px;
        }
        @media screen and (max-width: 767px) {
          @apply py-15px px-18px text-15px;
        }
      }
    }
    .burger {
      @apply top-30px right-10px absolute;
      @media screen and (max-width: 767px) {
        @apply top-20px;
      }
    }
  }
  }
</style>
