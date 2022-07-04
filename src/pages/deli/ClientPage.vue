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
<div class="client-page w-full max-w-1280px flex flex-col justify-start items-center">
  <FirstSection class="deli-img z-1"/>
  <OurQualities class="our-qualiti -mt-16px z-3"/>
  <div class="services-ser pt-90px max-w-1008px flex flex-row z-2 box-border">
    <Services class="deli-services"/>
  </div>
  <OfferPackage class="offer -mt-65px z-1"/>
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
