<script setup>
import { onMounted, computed, ref } from "vue";
import { useWindowSize } from '@vueuse/core'

import BurgerIcon from '../commissioner/BurgerIcon.vue'

const { width, height } = useWindowSize()
const emit = defineEmits(['link'])
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
  {name: 'Geecko benefits', id: 'benefits'},
  {name: 'How it Works?', id: 'works'},
  {name: 'Fast track to hire', id: 'track'},
  // {name: 'Trusted by', id: 'trusted'},
  {name: 'Hire dev', id: 'hire'},
]
const linkClick = (id) => {
  handleMobileMenu()
  emit('link', id)

}
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="menu">
        <div class="logo">
          <img src="/images/geecko/header/logo.png" alt="">
        </div>
        <div v-if="showButton ? showMobileMenu : true" class="links" :class="{'mobile-links': showButton}">
          <button class="link" v-for="link in links" :key="link.id" @click="linkClick(link.id)">
            {{ link.name }}
          </button>
        </div>
        <button class="burger" v-if="showButton" @click="handleMobileMenu">
          <BurgerIcon
            
            fill="black"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile-links {
  @apply flex flex-col space-y-4 items-center;
  // border: 1px solid red;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 0px;
  z-index: 50;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background: #ffffff;
  // box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);

  .link {
    // padding-left: 24px;
    // padding-right: 24px;
    @apply;
    padding: 0 !important;
    font-size: 38px !important;
    // line-height: 38px;
    color: #4d4e57 !important;
    text-decoration: none !important;
    text-align: center !important;
    background:#ffffff !important;
    border-radius: 0px !important;
    margin-top: 30px;
    &:nth-child(5) {
      @apply flex flex-row font-700 items-center uppercase not-italic ;
      font-size: 14px !important;
      color: #fff !important;
      font-family: "Retro Computer";
      position: relative;
      background: #4D4E57 !important;
      color: #FCFCFC;
      padding: 16px 24px !important;
      border-radius: 50px !important;
    }
  }
}
.header {
  @apply flex flex-col w-full items-center relative;
     @media screen and (max-width: 991px) {
        position: sticky;
        // box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
        top: 0;
        @apply z-999;
        background: #fff;
      }
 
  .container {
    @apply flex flex-col w-full max-w-1110px px-10px items-center ;
       
    .menu {
      @apply flex flex-row w-full py-10px items-center justify-between ;
      @media screen and (max-width: 991px) {
        @apply ;
      }
      .logo {
        @apply w-121px z-900; 
      }
      .links {
        @apply flex flex-row w-full max-w-810px justify-between;
        @media screen and (max-width: 991px) {
          @apply flex-col max-w-full justify-center;
        }
        .link {
          @apply rounded-50px font-500 py-16px px-24px text-14px;
          background: #FCFCFC;
          color: #4D4E57;
          &:nth-child(4) {
            @apply flex flex-row font-700 text-10px items-center  uppercase not-italic ;
            font-family: "Retro Computer";
            position: relative;
            background: #4D4E57;
            color: #FCFCFC;
            &::after {
              content: url('/images/geecko/header/coin.png');
              @apply ml-10px;
            }
          }
          // &:hover {
          //   background: #4D4E57;
          //   color: #FCFCFC;
          // }
        }
      }
      .burger {
        @apply p-4px z-999;
        background: #FFFFFF;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
        border-radius: 8px;
      }
    }
  }
}


</style>
