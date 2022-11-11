<script lang="ts" setup>
import { onMounted, computed, ref } from "vue";
import FirstSection from '../components/krypto/FirstSection.vue'
import Trade from '../components/krypto/Trade.vue'
import Cryptocurrency from '../components/krypto/Cryptocurrency.vue'
import Features from '../components/krypto/Features.vue'
import Platfrom from '../components/krypto/Platfrom.vue'
import Users from '../components/krypto/Users.vue'
import Analysis from '../components/krypto/Analysis.vue'
import Footer from '../components/krypto/Footer.vue'
import Header from '../components/krypto/Header.vue'
const scrollTo = (linkId: string) => {
  const element = document.getElementById(linkId)
  element.scrollIntoView({ block: 'start', behavior: 'smooth' })
}

</script>

<template>
  <div class="krypto">
    <Header @link="scrollTo"/>
    <FirstSection/>
    <Trade id="works"/>
    <Cryptocurrency id="cryptos"/>
    <Features id="features"/>
    <Platfrom/>
    <Users id="testimonial"/>
    <Analysis id="university" />
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.krypto {
  @apply flex flex-col h-full m-auto w-full items-center;
  background: #160E33;
  .all-projects {
  background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
  background-size: 100%;
  z-index: 555;
  }
}

</style>
