<script setup>
import FirstSection from '../components/breew/FirstSection.vue'
import SecondSection from '../components/breew/SecondSection.vue'
import ThirdSection from '../components/breew/ThirdSection.vue'
import FourthSection from '../components/breew/FourthSection.vue'
import FifthSection from '../components/breew/FifthSection.vue'
import SixthSection from '../components/breew/SixthSection.vue'
import SeventhSection from '../components/breew/SeventhSection.vue'
import EighthSection from '../components/breew/EighthSection.vue'
import NinthSection from '../components/breew/NinthSection.vue'
import TenthSection from  '../components/breew/TenthSection.vue'
import Footer from '../components/breew/Footer.vue'
  const links = ['Home', 'About', 'Token', 'Pages']
</script>

<template>
  <div class="breew-layout">
    <router-link to="/" class="all-projects bg-no-repeat w-40px h-40px cursor-pointer top-10px left-10px absolute"/>
    <div class="container ">
      <div class="header">
        <img src="/images/breew/header/logo.png" alt="">
        <div class="menu">
          <div class="link" v-for="link in links">{{ link }}</div>
        </div>
        <button>Download app</button>
      </div>
    </div>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
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
    @apply flex flex-col items-center w-full pt-68px;
    background-color: #FAFAFA;
    .all-projects {
      background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
      background-size: 100%;
    }
    
    .container {
      @apply w-full max-w-1500px; 
      .header {
        @apply flex justify-between items-center w-full;
        img {
          @apply ;
        }
        .menu {
          @apply flex ;
          .link {
            @apply mr-68px text-20px font-600 leading-30px text-black;
          }
        }
        button {
          @apply text-24px font-700 leading-31px text-white rounded-27px py-29px px-44px;
          background-color: #0582CA;;
        }
      }
    }
  }
</style>
