 <script setup>
 import BgServicesDeli from '../../components/ServicesDeli/BgServicesDeli.vue'
 import TermsServicesDeli from '../../components/ServicesDeli/TermsServicesDeli.vue'
 import CarParkServicesDeli from '../../components/ServicesDeli/CarParkServicesDeli.vue'
 </script>
 
 <template>
 <div class="page flex flex-col justify-start items-center box-border w-full pb-60px mb-74px rounded-16px max-w-1238px">
  <BgServicesDeli class="BgServicesDeli"/>
  <TermsServicesDeli class="TermsServicesDeli"/>
  <CarParkServicesDeli/>
 </div>
  
</template>
<style lang="scss" scoped>
  .page {
    background: #fff;

    .BgServicesDeli {
      z-index: 4;
    }
    .TermsServicesDeli {
      z-index: 1;
    }
  }
</style>