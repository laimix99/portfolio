<script setup>
import { useWindowSize } from '@vueuse/core'
import { ref, computed, reactive, onBeforeMount } from 'vue';

import BurgerIcon from '../commissioner/BurgerIcon.vue'
import CrossIcon from '../commissioner/CrossIcon.vue'

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
  {title: 'Home', path: ''},
  {title: 'About', path: ''},
  {title: 'Service', path: ''},
  {title: 'Contact', path: ''},
]
</script>

<template>
  <div class="header">
    <div class="menu">
      <div class="logo">Uamesha Ramanay</div>
      <div v-if="showButton ? showMobileMenu : true" class="links" :class="{ 'mobile-links' : showButton }">
        <div class="link" v-for="link in links">{{ link.title }}</div>
      </div>
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
</template>

<style scoped lang="scss">
.header {
  @apply flex flex-col items-center w-full relative;
  background: rgba(183, 76, 76, 0.42);
  @media screen and (max-width: 991px) {
      position: sticky;
      box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
      top: 0;
      z-index: 100;
      background: #e1b4b4;
      
  }
  .menu {
    @apply flex flex-row justify-between items-center w-full max-w-1110px px-10px py-20px;
    .logo {
      @apply text-48px text-black font-400 cursor-pointer;
      font-family: 'Pattaya', sans-serif;
      @media screen and (max-width: 767px) {
        @apply text-30px;
      }
    }
    .links {
      @apply flex flex-row;
      @media screen and (max-width: 991px) {
      @apply flex-col items-center;
      } 
      .link {
        @apply text-24px font-400 mr-30px text-white not-italic cursor-pointer;
        font-family: 'Poppins', sans-serif;
        &:hover {
          color: rgb(233, 231, 231);
        }
      }
    }
  }
}
.mobile-links {
  position: absolute;
  top: 100%;
  left: 0;
  padding: 20px 0px;
  z-index: 999;
  width: 100%;
  background: #e1b4b4;
  // box-shadow: 0px 1px 30px rgb(0, 0, 0, 0.3);
  border-top: 1px solid black;
  @apply flex flex-col items-center ;
  
  .link {
    @apply flex flex-col;
    // margin-left: 60px;
    margin-top: 30px;
    color: black !important;
  }
}
.burger {
  @apply absolute top-30px right-10px;
  @media screen and (max-width: 767px) {
    @apply top-20px;
  }
}
</style>
