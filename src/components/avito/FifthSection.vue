<script setup>
  import { ref, computed, reactive, onBeforeMount } from 'vue';

  import ThisWeeksTop from './ThisWeeksTop.vue'
  import LastWeek from './LastWeek.vue';

  const currentTabl = ref('t1')
  const setTabl = (t) => {
    currentTabl.value = t
  }
</script>

<template>
  <div class="fifth-section">
    <div class="container">
      <h1>таблица лидеров</h1>
      <h2>Покажи лучшие результаты, попав в ТОП-3 и получи крутые призы!</h2>
      <div class="switch">
        <button 
          @click="setTabl('t1')"
          class="item-1"
        >
          топ этой недели
        </button>
        <button 
          @click="setTabl('t2')"
          class="item-2"
        >
          прошлой
        </button>
      </div>
      <div class="items">
        <div class="table" id="element">
          <ThisWeeksTop v-if="currentTabl === 't1'" />
          <LastWeek v-if="currentTabl === 't2'" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fifth-section {
  @apply flex flex-col items-center w-full pt-70px pb-80px;
  .container {
    @apply flex flex-col items-center w-full max-w-1150px;
    h1 {
      @apply text-40px font-800 leading-46px uppercase italic;
      color: #01002A;
      font-family: 'Jost', sans-serif;
    }
    h2 {
      @apply text-20px font-400 w-full max-w-450px mt-20px;
      color: #232339;
      line-height: 120%;
      font-family: 'Jost', sans-serif;
    }
    .switch {
      @apply flex flex-row mt-54px;
      .item-1 {
        @apply text-16px font-800 italic uppercase mr-20px py-16px px-48px;
        font-family: 'Jost', sans-serif;
        color: #01002A;
        background: #F1EFE5;
        border-top: 2.39437px solid #01002A;
        border-left: 2.39437px solid #01002A;
        border-right: 2.39437px solid #01002A;
        box-shadow: 4.78873px 4.78873px 0px #01002A;
        border-radius: 20px 20px 0px 0px;
        &:focus {
          z-index: 2;
          // overflow: hidden;
          box-shadow: 4.78873px 0px 0px #01002A;
        }
      }
      .item-2 {
        @apply text-16px font-800 italic uppercase  py-16px px-48px;
        font-family: 'Jost', sans-serif;
        color: #01002A;
        background: #F1EFE5;
        border-top: 2.39437px solid #01002A;
        border-left: 2.39437px solid #01002A;
        border-right: 2.39437px solid #01002A;
        box-shadow: 4.78873px 4.78873px 0px #01002A;
        border-radius: 20px 20px 0px 0px;
        &:focus{
          z-index: 2;
          box-shadow: 4.78873px 0px 0px #01002A;
        }
      }
    }
    .items {
      @apply flex flex-col items-start justify-center w-full max-w-765px h-394px -mt-1.5px;
        background: #F1EFE5;
        border: 2px solid #01002A;
        /* тень у карточки */
        box-shadow: 4px 4px 0px rgba(134, 126, 118, 0.62);
        border-radius: 16px;
        // overflow-y: scroll;
        // scrollbar-color: red;

      .table {
        @apply flex flex-col items-center w-full max-w-750px h-380px;

      }
      #element {
        overflow-y: scroll; 
      }
      #element::-webkit-scrollbar {
        width: 6px;
      }

      #element::-webkit-scrollbar-track {
        background-color: #F1EFE5;
        border-radius: 10px;
        height: 500px;
        
        
      }

      #element::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: #CDCAB9;
        height: 10px;
      }
    }
  }
}
</style>
