<script setup>
import Header from '../components/sber/Header.vue'
import FirstSection from '../components/sber/FirstSection.vue';
import SecondSection from '../components/sber/SecondSection.vue'
import ThirdSection from '../components/sber/ThirdSection.vue'
import FourthSection from '../components/sber/FourthSection.vue'
import FifthSection from '../components/sber/FifthSection.vue'
import SixthSection from '../components/sber/SixthSection.vue'
import Footer from '../components/sber/Footer.vue'
</script>

<template>
  <div class="sber-layout">
    <router-link to="/" class=" bg-no-repeat cursor-pointer h-40px top-90 left-10px w-50px all-projects "/>
    <Header/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <SixthSection/>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.sber-layout {
  @apply  flex flex-col w-full items-center;
  background: #020804;
}


@font-face {
  font-family: 'SB Sans Display';
  src: url("/fonts/SB Sans Display Semibold.ttf") format("truetype"),     
}
@font-face {
  font-family: 'SB Sans Interface';
  src: url("/fonts/SB Sans Interface.ttf") format("truetype"),     
}
.all-projects {
    background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
    background-size: 100%;
    z-index: 555;
    position: fixed;
  }
// SB Sans Display Semibold
</style>
