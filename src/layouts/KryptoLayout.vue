<script setup>
import FirstSection from '../components/krypto/FirstSection.vue'
import Trade from '../components/krypto/Trade.vue'
import Cryptocurrency from '../components/krypto/Cryptocurrency.vue'
import Features from '../components/krypto/Features.vue'
import Platfrom from '../components/krypto/Platfrom.vue'
import Users from '../components/krypto/Users.vue'
import Analysis from '../components/krypto/Analysis.vue'
import Footer from '../components/krypto/Footer.vue'
  const descriptions = [
    {title: 'How it works'},
    {title: 'Cryptos'},
    {title: 'Features'},
    {title: 'Testimonial'},
    {title: 'University'},
  ]
</script>

<template>
  <div class="krypto flex flex-col items-center w-full h-100% m-auto">
    <router-link to="/" class="all-projects bg-no-repeat w-40px h-40px cursor-pointer top-10px left-10px absolute"/>
    <div class="header flex flex-row justify-between items-center w-full max-w-1100px py-35px">
      <img class="logo w-full max-w-83px h-full max-h-28px" src="/images/krypto/header/logo.png" alt="">
      <div class="description flex flex-row justify-center">
        <h1 class="mr-30px text-white text-16px leading-19px font400 cursor-pointer" v-for="d in descriptions">{{ d.title }}</h1>
      </div>
      <div class="lang flex justify-between w-full max-w-72px h-full max-h-34px rounded-20px box-border py-8px px-12px">
        <img src="/images/krypto/header/lang.svg" alt="">
        <img class="w-18px h18px" src="/images/krypto/header/down.png" alt="">
      </div>
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
    background: #160E33;
    .all-projects {
      background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
      background-size: 100%;
      }
    .header {
      @media screen and (max-width: 991px) {
        @apply py-20px px-20px;
      }
      @media screen and (max-width: 767px) {
        h1 {
          @apply text-10px mr-15px;
        }
        img {
          @apply w-50px;
        }
      }
      @media screen and (max-width: 479px) {
        h1 {
          @apply mr-10px;
        .lang {
          @apply hidden;
        }
      }
      .lang {
        border: 2px solid #EF443B;
        
      }
    }
  }
}
</style>
