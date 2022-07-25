<script setup>
import { onMounted, ref, computed } from "vue";
import { useWindowSize } from '@vueuse/core'
import BurgerIcon from '../commissioner/BurgerIcon.vue'
import CrossIcon from '../commissioner/CrossIcon.vue'
const { width, height } = useWindowSize()
const showMobileMenu = ref(false)
const showButton = computed(() => {
  if (width.value < 991) {
    return true;
  } else {
    return false;
  }
})
const props = defineProps({
  menuItems: {
    type: Array,
    default: () => [
      { label: 'Features', link: '' },
      { label: 'Solutions', link: '' },
      { label: 'Plans', link: '' },
      { label: 'Pricing', link: '' },
      { label: 'Resources', link: '' },
    ]
  }, 
  activeLink: {
    type: String,
    default: '',
  }
});
const handleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="menu">
        <h1>Trello</h1>
        <div v-if="showButton ? showMobileMenu : true" class="links" :class="{'mobile-links': showButton }" >
          <div class="link" v-for="item in menuItems">{{ item.label }}</div>
        </div>
      </div>
      <div class="registration">
        <a href="">
          <span>Log in</span>
        </a>
        <a href="">
          <button class="registration-login">Get Trello for free</button>
        </a>
      </div>
    </div>
    <button v-if="showButton" class="burger" @click="handleMobileMenu" >
      <BurgerIcon 
        v-if="!showMobileMenu" 
        fill="rgb(0, 82, 204)"
      />
      <CrossIcon 
        v-else
        fill="rgb(0, 82, 204)"
      />
    </button>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply relative;
  background-color: white;
  @media screen and (max-width: 991px) {
    position: sticky;
    box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
    top: 0;
  }
  .container {
    @apply flex justify-between w-full max-w-2000px pl-10px pr-0px relative;
    .menu {
      @apply flex flex-row items-center;
      h1 {
        color: rgb(0, 82, 204);
        cursor: pointer;
        font-size: 40px ;
        margin-right: 40px;
      }
      .links {
        @apply flex flex-row;
        .link {
          margin-right: 30px;
          color: black;
          &:hover {
            color: rgb(0, 82, 204);
            cursor: pointer;
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
        background: #eee;
        box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
        @apply flex-col items-center space-y-4;
        .link {
          color: black !important;
          margin-left: 30px;
        }
      }
    }
    .registration {
      @apply flex items-center;
      @media screen and (max-width: 991px) {
        @apply pr-50px;
      }
      a {
        @apply ;
        span {
          @apply text-20px mr-15px;
          color: rgb(23, 43, 77);
          @media screen and (max-width: 767px) {
            @apply text-15px;
          }
        }
      }
      a{
        @apply ;
        .registration-login {
          @apply text-white h-full py-20px px-20px text-1.25rem;
          background-color: #0065ff;
          &:hover{
            background-color: rgb(5, 71, 172);
          }
          @media screen and (max-width: 767px) {
            @apply text-15px py-25px;
          }
        }
      }
    }
  }
  .burger {
    @apply w-full h-full max-w-30px flex flex-col items-center absolute right-10px top-15px;
  }
}
</style>
