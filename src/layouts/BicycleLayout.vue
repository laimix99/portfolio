<script setup>
import { ref, computed } from 'vue';
import { useWindowSize } from '@vueuse/core'
import Bike from '../components/bicycle/Bike.vue'

const { width, height } = useWindowSize()

const showMobileWrapper = computed(() => {
  if (width.value > 991) {
    return false
  } else {
    return true
  }
})

const bikes =[ 
  {
    id: 'bike_1',
    name: 'Горный велосипед',
    img: '/images/bicycle/img-4.png',
    chars: [
      'Двойной обод',
      'Алюминиевый сплав',
      'Колеса диаметром 26 дюймов',
      'Покрышки 26х1,95"',
    ],
    title: 'Велосипед STELS Navigator 510 HD 26 2022',
    description_1: 'Данный велосипед с колесами 26 дюймов хорошо подходит высоким подросткам. Прогиб рамы и небольшой размер рамы расчитан на рост от 135 до 165 см.',
    description_2: 'Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была изготовлена с учетом использования велосипеда подростками.'
  },
  {
    id: 'bike_2',
    name: 'Женский велосипед',
    img: '/images/bicycle/img-2.png',
    chars: [
      'Стальная рама',
      'Жесткая вилка',
      'Колеса диаметром 24 дюймов',
      '7 скоростей',
    ],
    title: 'Велосипед SCHWINN Traveler women 2022',
    description_1: 'Женский велосипед со стальной рамой Classic step-true lightweight позволяет девушкам без проблем его перемещать.',
    description_2: 'На данном велосипеде имеется 7 скоростей с переключателями от Shimano, а жесткая вилка обеспечивает отличную управляемость. Подходит для катания по асфальтированным поверхностям.'
  }
]
const currentTab = ref('bike_1')
const currentBike = computed(() => {
  return bikes.find((item) => item.id === currentTab.value)
})
const handleTab = (id) => {
  currentTab.value = id
}
</script>

<template>
  <div class="bicycle-layout">
    <div class="content">
      <div class="tabs"
      >
        <div 
          v-for="bike in bikes" 
          :key="bike.id" 
          class="tabs-wrapper"
          
          @click="handleTab(bike.id)"
        >
          <div v-if="!showMobileWrapper" class="tab" :class="[bike.id === currentTab ? 'active' : 'tab']">{{ bike.name }}</div>
          <!-- <div v-if="showMobileWrapper && tab.id === currentTab"> -->
          <Bike v-else :innerTab="true" :bike="bike"/>
          <!-- </div> -->
        </div>
      </div>
      <Bike
        v-if="!showMobileWrapper"
        :bike="currentBike"
        
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
  .bicycle-layout {
    @apply flex flex-col min-h-screen bg-hex-aaa6a6 w-full py-50px items-center justify-center ;
    @media screen and (max-width: 991px) {
        @apply px-20px  justify-start;
    }
    .content {
      @apply flex flex-col w-full max-w-846px items-start overflow-x-hidden;
      .tabs {
        @apply flex flex-row w-full ;
        @media screen and (max-width: 991px) {
          @apply flex-col gap-20px;
        }
        &-wrapper {
          @apply flex flex-row justify-start;
          @media screen and (max-width: 991px) {
            @apply flex flex-col ;
          }
          .tab {
            @apply cursor-pointer font-500 py-20px px-24px text-22px text-hex-0C0C0C;
            font-family: 'Montserrat', sans-serif;
            background: #D9D9D9;
            border-radius: 20px 20px 0px 0px; 
            @media screen and (max-width: 991px) {
              @apply rounded-20px mt-20px text-20px;
              background: #FFFFFF;
            }
          }
          .active {
            @apply ;
            color: #3922C5;
            background: #FFFFFF;
            @media screen and (max-width: 991px) {
              border-radius: 20px 20px 0px 0px;
            }
          }
        }
      }
      .cub {
        @apply bg-hex-ffff flex flex-col w-full max-w-846px py-40px  px-60px items-center;
        border-radius: 0px 20px 20px 20px;
        @media screen and (max-width: 991px) {
          @apply  px-20px;
          border-radius: 0px 0px 20px 20px;
        }
      }
    }
  }
</style>


