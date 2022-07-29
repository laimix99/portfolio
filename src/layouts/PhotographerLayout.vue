<script setup>
import Header from '../components/photographer/Header.vue'
import FirstSection from '../components/photographer/FirstSection.vue'
import SecondSection from '../components/photographer/SecondSection.vue'
import ThirdSection from '../components/photographer/ThirdSection.vue'
import FourthSection from '../components/photographer/FourthSection.vue'
import FifthSection from '../components/photographer/FifthSection.vue'
import SixthSection from '../components/photographer/SixthSection.vue'
import Footer from '../components/photographer/Footer.vue'
</script>

<template>
  <div class="photographer-layout">
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
@import url('https://fonts.googleapis.com/css2?family=Pattaya&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.photographer-layout {
  @apply w-full flex flex-col items-center;
  background: #FFFFFF;
  .container {
    @apply flex flex-col items-center w-full max-w-1110px px-10px;
  }
}
</style>
