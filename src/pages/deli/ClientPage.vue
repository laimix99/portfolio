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
<div class="client-page">
  <FirstSection class="deli-img"/>
  <OurQualities class="our-qualiti"/>
  <div class="services-ser">
    <Services class="deli-services"/>
  </div>
  <OfferPackage class="offer "/>
  <PricesService />
  <Cooperate/>
  <ServicesSlider/>
  <Team/>
  
</div>

  
</template>
<style lang="scss">
  .client-page {
    width:  100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .our-qualiti {
    margin-top: -16px;
    z-index: 3 ;
  }
  .deli-img {
    z-index: 1;
  }
  .services-ser {
    padding-top:90px ;
    max-width: 1008px;
    display: flex;
    flex-direction: row;
    z-index: 2;
    box-sizing: border-box;

  }
  .offer {
    margin-top: -65px;
    z-index: 1;
  }
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
