 <script setup>
 import BgServicesDeli from '../../components/ServicesDeli/BgServicesDeli.vue'
 import TermsServicesDeli from '../../components/ServicesDeli/TermsServicesDeli.vue'
 import CarParkServicesDeli from '../../components/ServicesDeli/CarParkServicesDeli.vue'
 </script>
 
 <template>
 <div class="page">
  <BgServicesDeli class="BgServicesDeli"/>
  <TermsServicesDeli class="TermsServicesDeli"/>
  <CarParkServicesDeli/>
 </div>
  
</template>
<style lang="scss" scoped>
  .page {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    padding-bottom: 60px;
    margin-bottom: 74px;
    border-radius: 16px;

    .BgServicesDeli {
      z-index: 4;
    }
    .TermsServicesDeli {
      z-index: 1;
    }
  }
</style>