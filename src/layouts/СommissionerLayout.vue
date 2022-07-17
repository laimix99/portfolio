<script setup>
import { onMounted, ref } from "vue";
import KeyBenefits from '../components/commissioner/KeyBenefits.vue'
import Regulations from '../components/commissioner/Regulations.vue'
import FirstSection from '../components/commissioner/FirstSection.vue'
const links = [
  {title: 'цены', path: ''},
  {title: 'услуги', path: ''},
  {title: 'о компании', path: ''},
  {title: 'контакты', path: ''},
  {title: 'статьи', path: ''},
]

</script>

<template>
  <div class="commissioner-layout">
    <div class="header">
      <div class="menu">
        <div class="logo">ЦЕНТР УРЕГУЛИРОВАНИЯ УБЫТКОВ</div>
        <div class="links">
          <div class="link" v-for="link in links">{{ link.title }}</div>
        </div>
        <a href="tel:89655325020">8-965-532-50-20</a>
      </div>
    </div>
    <FirstSection/>
    <div class="container">
      <KeyBenefits/>
      <Regulations/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .commissioner-layout {
    @apply h-full flex flex-col items-center w-full ;
    background: #FAFAFA;
    .header {
      @apply w-full flex flex-col items-center;
      background-color: #CE253D;
  // position: absolute;
  // background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
      .menu {
        @apply flex items-center justify-between w-full max-w-1100px py-5px;
        .logo {
          @apply w-full max-w-100px text-left font-700;
          color: #F2F2F4;
        }
        .links {
          @apply flex;
          .link {
            @apply mr-40px text-16px uppercase; 
            color: #F2F2F4;
          }
        }
        a {
          @apply text-20px font-700;
          color: #F2F2F4;
        }
      }
    }
    .container {
      @apply flex flex-col items-center w-full max-w-1100px;
    } 
  }
  .sticky {
    position: fixed;
    z-index: 99;
    /* background-color: red; */
    box-shadow: rgb(9 30 66 / 15%) 0px 0.5rem 1rem 0px;
    -webkit-box-shadow: rgb(9 30 66 / 15%) 0px 0.5rem 1rem 0px;
    -moz-box-shadow: rgb(9 30 66 / 15%) 0px 0.5rem 1rem 0px;
    /* box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.05); */
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
  }
</style>
