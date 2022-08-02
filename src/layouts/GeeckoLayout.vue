<script setup>
import Header from '../components/geecko/Header.vue'
import FirstSection from '../components/geecko/FirstSection.vue'
import SecondSection from '../components/geecko/SecondSection.vue'
</script>

<template>
  <div class="geecko-layout">
    <Header/>
    <FirstSection/>
    <SecondSection/>
  </div>
</template>

<style scoped lang="scss">
.geecko-layout {
  @apply flex flex-col items-center w-full;
  background: #F5F5F5;
}


@font-face {
  font-family: "Retro Computer";
  src: url("/fonts/retro_computer_personal_use.ttf") format("truetype"),     
}
</style>
 