<script setup>
import Header from '../components/sber/Header.vue'
import FirstSection from '../components/sber/FirstSection.vue';
</script>

<template>
  <div class="sber-layout">
    <Header/>
    <FirstSection/>
  </div>
</template>

<style scoped lang="scss">
.sber-layout {
  @apply  flex flex-col items-center w-full;
  background: #020804;
}


@font-face {
  font-family: 'SB Sans Display';
  src: url("/fonts/SB Sans Display Semibold.ttf") format("truetype"),     
}

// SB Sans Display Semibold
</style>
