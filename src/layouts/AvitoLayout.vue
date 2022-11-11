<script setup>
import FirstSection from '../components/avito/FirstSection.vue'
import SecondSection from '../components/avito/SecondSection.vue'
import ThirdSection from '../components/avito/ThirdSection.vue'
import FourthSection from '../components/avito/FourthSection.vue'
import FifthSection from '../components/avito/FifthSection.vue'
import SixthSection from '../components/avito/SixthSection.vue'
import Footer from '../components/avito/Footer.vue'
</script>

<template>
  <div class="avito-layout">
    <router-link to="/" class=" bg-no-repeat cursor-pointer h-40px top-90 left-10px w-50px all-projects "/>
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
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&display=swap');
.avito-layout {
  @apply flex flex-col w-full items-center;
  background: #e1daca;
}
.all-projects {
    background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
    background-size: 100%;
    z-index: 555;
    position: fixed;
    // @media screen and (max-width: 991px) {
    //   display: none;
    // }
  }
</style>
