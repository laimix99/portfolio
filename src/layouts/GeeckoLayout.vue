<script setup>
import Header from '../components/geecko/Header.vue'
import FirstSection from '../components/geecko/FirstSection.vue'
import SecondSection from '../components/geecko/SecondSection.vue'
import ThirdSection from '../components/geecko/ThirdSection.vue'
import FourthSection from '../components/geecko/FourthSection.vue'
import FifthSection from '../components/geecko/FifthSection.vue'
import SixthSection from '../components/geecko/SixthSection.vue'
import SeventhSection from '../components/geecko/SeventhSection.vue'
import EighthSection from '../components/geecko/EighthSection.vue'
import NinthSection from '../components/geecko/NinthSection.vue'
import TenthSection from '../components/geecko/TenthSection.vue'
</script>

<template>
  <div class="geecko-layout">
    <Header/>
    <FirstSection/>
    <div class="gray-gradient">
      <SecondSection/>
      <ThirdSection/>
    </div>
    <FourthSection/>
    <FifthSection/>
    <SixthSection/>
    <SeventhSection/>
    <EighthSection/>
    <NinthSection/>
    <TenthSection/>
  </div>
</template>

<style scoped lang="scss">
.geecko-layout {
  @apply flex flex-col items-center w-full;
    background: #fff;
  // background: linear-gradient(180deg, #E2E1DD 11.42%, rgba(226, 225, 221, 0) 102.46%);
  // transform: matrix(1, 0, 0, -1, 0, 0);
  .gray-gradient {
    // background: linear-gradient(180deg, #E2E1DD 11.42%, rgba(226, 225, 221, 0) 102.46%);
    @apply flex flex-col w-full;
    background: linear-gradient(0deg, #E2E1DD 11.42%, rgb(226, 225, 221, 0) 102.46%);
    // transform: matrix(1, 0, 0, -1, 0, 0);
  }
}


@font-face {
  font-family: "Retro Computer";
  src: url("/fonts/retro_computer_personal_use.ttf") format("truetype"),     
}
@font-face {
  font-family: "Proxima Nova";
  src: url("/fonts/proximanova_light.otf") format("truetype"),     
}
</style>
 