<script setup>
import TrelloHeader from '../components/trello/TrelloHeader.vue'
import FirstSection from '../components/trello/FirstSection.vue'
import SecondSection from '../components/trello/SecondSection.vue'
import ThirdSection from '../components/trello/ThirdSection.vue'
import FourthSection from '../components/trello/FourthSection.vue'
import FifthSection from '../components/trello/FifthSection.vue'
import SixthSection from '../components/trello/SixthSection.vue'
import SeventhSection from '../components/trello/SeventhSection.vue'
import EighthSection from '../components/trello/EighthSection.vue'
import NinthSection from '../components/trello/NinthSection.vue'
import Footer from '../components/trello/Footer.vue'
</script>
<template>
  <div class="trello-layout">
    <router-link to="/" class=" bg-no-repeat cursor-pointer h-40px top-90 left-10px w-50px all-projects "/>
    <TrelloHeader/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <SixthSection/>
    <SeventhSection/>
    <EighthSection/>
    <NinthSection/>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped >
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
