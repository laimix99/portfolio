<script setup>
import { onMounted, computed, ref } from "vue";
import KeyBenefits from '../components/commissioner/KeyBenefits.vue'
import Regulations from '../components/commissioner/Regulations.vue'
import FirstSection from '../components/commissioner/FirstSection.vue'
import Contacts from '../components/commissioner/Contacts.vue'
import Price from '../components/commissioner/Price.vue'
import Reviews from '../components/commissioner/Reviews.vue'
import Company from '../components/commissioner/Сompany.vue'
import Footer from '../components/commissioner/Footer.vue'
import BurgerIcon from '../components/commissioner/BurgerIcon.vue'
import CrossIcon from '../components/commissioner/CrossIcon.vue'
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()
const price = ref()
const contacts = ref()
const company = ref()
const reviews = ref()
const showButton = computed(() => {
  if (width.value < 991) {
    return true;
  } else {
    return false;
  }
})
const showMobileMenu = ref(false)
const links = ref([
  {title: 'цены', pos: null },
  {title: 'о компании', pos: null},
  {title: 'контакты', pos: null},
  {title: 'отзывы', pos: null},
])
const menuLink = (pos) => {
  console.log("menuLink pos:", pos, window)
  window.scrollTo(0, pos)
  showMobileMenu.value = false
}
onMounted(() => {
  links.value[0].pos = price.value?.$el.offsetTop
  links.value[3].pos = reviews.value?.$el.offsetTop
  links.value[1].pos = company.value?.$el.offsetTop
  links.value[2].pos = contacts.value?.$el.offsetTop
  console.log("onMounted", price.value)
})

const handleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}
</script>

<template>
  <div class="commissioner-layout">
    <router-link to="/" class=" bg-no-repeat cursor-pointer h-40px top-90 left-10px w-50px all-projects "/>
    <div class="header">
      <div class="menu">
        
        <div class="logo">ЦЕНТР УРЕГУЛИРОВАНИЯ УБЫТКОВ</div>
        <div v-if="showButton ? showMobileMenu : true" class="links" :class="{'mobile-links': showButton }">
          <div v-for="link in links" @click="menuLink(link.pos)" class="link">
            {{ link.title }}
          </div>
        </div>
        <div class="phones">
          <a href="tel:89655325003">8-965-532-50-03</a>
          <a href="tel:89097024962">8-909-702-49-62</a>
        </div>
        <!-- :style="{backgroundImage: showMobileMenu ? `url('/images/burger.svg')` : `url('/images/cross.svg')`}" -->
        <button v-if="showButton" class="burger" @click="handleMobileMenu" >
          <BurgerIcon v-if="!showMobileMenu" />
          <CrossIcon v-else />
        </button>
      </div>
      
    </div>
    <FirstSection @action="menuLink(links[2].pos)" />
    <div class="container" >
      <KeyBenefits/>
    </div>
    <Price ref="price" @action="menuLink(links[2].pos)" />
    <div class="container" >
      <Regulations/>
    </div>
    <Company ref="company" />
    <div class="container">
      <Reviews ref="reviews" />
    </div>
    <Contacts ref="contacts" />
    <Footer :menu="links" @menu-link="menuLink" />
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;700&display=swap');
.mobile-links {
  position: absolute;
  top: 100%;
  left: 0;
  padding: 20px 0px;
  
  z-index: 999;
  width: 100%;
  background: #eee;
  box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
  @apply flex-col space-y-4 items-center;
  .link {
    color: black !important;
  }
}
  .commissioner-layout {
    @apply flex flex-col h-full w-full items-center ;
    background: #FAFAFA;
    font-family: 'Montserrat', sans-serif;
    .header {
      @apply flex flex-col w-full items-center relative;
      background-color: #140E36;
      z-index: 9999;
      @media screen and (max-width: 991px) {
        position: sticky;
        box-shadow: 1px 1px 30px rgb(0, 0, 0, 0.3);
        top: 0;
      }
      .menu {
        @apply flex flex-row w-full max-w-1100px py-5px px-10px items-center justify-between ;
        .logo {
          @apply font-700 text-left w-full max-w-100px;
          color: #F2F2F4;
          @media screen and (max-width: 767px) {
            @apply text-12px;
          }
        }
        .links {
          @apply flex;
          .link {
            @apply cursor-pointer mr-40px text-16px uppercase; 
            color: #F2F2F4;
            &:hover {
              color: rgba(242, 242, 244, 0.5);
            }
          }
        }
        .phones {
          @apply flex flex-col;
          a {
            @apply font-700 mt-5px text-18px;
            color: #F2F2F4;
          @media screen and (max-width: 767px) {
            @apply text-12px;
          }
            &:hover {
                color: rgba(242, 242, 244, 0.5);
            }
          }
        }
      }
    }
    .container {
      @apply flex flex-col w-full max-w-1100px items-center;
      @media screen and (max-width: 767px) {
        @apply px-10px;
      }
    } 
  }
  .burger {
    @apply flex flex-col h-full w-full max-w-30px items-center;
  }
  .band {
    @apply h-4px mt-5px w-40px;
    background-color: red;
    // display: block;
  }
  .all-projects {
    background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
    background-size: 100%;
    z-index: 555;
    position: fixed;
  }
</style>
