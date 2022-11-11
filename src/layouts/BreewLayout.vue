<script lang="ts" setup>
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
import Header from '../components/breew/Header.vue'

const scrollTo = (linkId: string) => {
  const element = document.getElementById(linkId)
  element.scrollIntoView({ block: 'start', behavior: 'smooth' })
}
</script>

<template>
  <div class="breew-layout">
    <router-link to="/" class=" bg-no-repeat cursor-pointer h-40px top-90 left-10px w-50px all-projects "/>
    <Header @link="scrollTo" />
    <FirstSection id="home" />
    <SecondSection/>
    <ThirdSection id="token" />
    <FourthSection/>
    <SixthSection  />
    <SeventhSection id="about" />
    <EighthSection id="pages" />
    <NinthSection/>
    <TenthSection/>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.breew-layout {
  @apply flex flex-col w-full items-center ;
  background-color: #FAFAFA;
  .all-projects {
    background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
    background-size: 100%;
    z-index: 555;
    position: fixed;
  }
}
</style>
