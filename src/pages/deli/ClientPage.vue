<script setup>
  import FirstSection from '../../components/deli/FirstSection.vue';
  import OurQualities from '../../components/deli/OurQualities.vue';
  import Services from '../../components/deli/Services.vue';

  import OfferPackage from '../../components/deli/OfferPackage.vue'
  import PricesService  from '../../components/deli/PricesService .vue'
  import Cooperate from '../../components/deli/Cooperate.vue'
  import ServicesSlider from '../../components/deli/ServicesSlider.vue'
  import Team from '../../components/deli/Team.vue'
  
 
</script>
  
<template>
<div class="flex flex-col w-full max-w-1280px client-page justify-start items-center">
  <FirstSection class="z-1 deli-img"/>
  <OurQualities class="-mt-16px z-3 our-qualiti"/>
  <div class="flex flex-row max-w-1008px pt-90px z-2 services-ser box-border">
    <Services class="deli-services"/>
  </div>
  <OfferPackage class="-mt-65px z-1 offer"/>
  <PricesService />
  <Cooperate/>
  <ServicesSlider/>
  <!-- <Team/> -->
  
</div>

  
</template>
<style lang="scss" scoped>

   @media ( max-width: 991px ) {
     .offer {
       margin-top: 20px;
     }
   }
  
  @media ( max-width: 768px ) {
    .offer {
      margin: 15px;
    }
  }
  
</style>
