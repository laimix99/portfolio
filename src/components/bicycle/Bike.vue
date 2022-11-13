<script setup lang="ts">
import MyButton from './MyButton.vue'
import MySvg from '../MySvg.vue'
import { ref, reactive, onMounted, computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

const showMobileWrapper = computed(() => {
  if (width.value > 991) {
    return false
  } else {
    return true
  }
})

const props = defineProps({
  bike: {
    type: Object,
    default: () => {}
  },
  innerTab: {
    type: Boolean
  }
})

const state = reactive({
  showConfirmation: false,
  recruit: '',
})

const changeShowConfirmation = () => {
  state.showConfirmation = true
}
const closeModal = () => {
  state.showConfirmation = false
  state.recruit = ''
}

const addCharacteristics = () => {
  if (!state.recruit) return
  props.bike.chars.push(state.recruit)
  state.showConfirmation = false
  state.recruit = ''
}
const showBike = ref(false)

const switchBikes = () => {
  showBike.value = !showBike.value
}

// const removeItem = (index) => {
//   localStorage.value.chars = localStorage.value.chars.filter((i, iIndex) => iIndex > 3 ?  iIndex !== index : true) 
// }
// @click="removeItem(index)"
</script>

<template>
  <div 
    v-if="props.innerTab"
    class=" tab"
    :class="[showBike ? 'active' : 'tab']"
    @click="switchBikes"
  >
   <h1> {{ props.bike.name }} </h1>
   <MySvg class="my-svg" v-if="!showBike" name='down' />
   <MySvg class="my-svg-up" v-else name="up" />
  </div>
  <div class="mans-bike " v-if="props.innerTab ? showBike : true">
    <div class="bike">
      <div class="left-col">
        <img :src="props.bike.img" alt="">
      </div>
      <div class="right-col">
        <h1>{{ props.bike.title }}</h1>
        <span class="description_1">{{ props.bike.description_1 }}</span>
        <span class="description_2">{{ props.bike.description_2 }}</span>
      </div>
    </div>
    <div class="characteristics">
      <h3>Характеристики</h3>
      <div class="characteristics-wrapper" :style="{ maxHeight: showMobileWrapper ? 'auto' : Math.ceil(props.bike.chars?.length / 2) * 30 + 'px' }">
        <div
          v-for="(c, index) in props.bike.chars"
          class="characteristics-description"
          
         >
          <p v-if="bike.id === 'bike_1'">{{ index + 1 + '.' }}</p>
          <img v-else src="/images/bicycle/img-3.png" alt="">
          <span>{{ c }}</span>
        </div>
      </div>
    </div>
    <div class="added-characteristics">
      <h3>Добавить характеристику</h3>
      <div class="added-characteristics-wrapper">
        <input 
          v-model="state.recruit"
          @keyup.enter="changeShowConfirmation"
          type="text" 
          placeholder="Алюминиевый сплав"
        >
        <MyButton
          show="blue"
          @click="changeShowConfirmation"
        >
          Добавить 
        </MyButton>
      </div>
    </div>
    <div
      v-if="state.showConfirmation" 
      class="confirmation"
    >
      <div class="confirmation-btn">
        <MyButton show="blue" @click="addCharacteristics">Окей</MyButton>
        <MyButton show="white" @click="closeModal">Отмена</MyButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
.tab {
  @apply cursor-pointer rounded-20px font-500 w-full py-22px pl-20px text-20px text-hex-0C0C0C relative;
  font-family: 'Montserrat', sans-serif;
  background: #FFFFFF;
  h1 {
    @apply text-left;
  }
  .my-svg {
    @apply top-27px -right-140px absolute;
  }
  .my-svg-up {
    @apply top-20px -right-140px absolute;
  }
}
.active {
  @apply text-hex-3922C5;
  border-radius: 20px 20px 0px 0px;
}
.mans-bike {
  @apply bg-hex-ffff flex flex-col w-full max-w-846px py-40px px-60px  items-center;
  border-radius: 0px 20px 20px 20px;
  @media screen and (max-width: 991px) {
    @apply  px-20px;
    border-radius: 0px 0px 20px 20px;
  }
  .bike {
    @apply flex flex-row w-full pb-40px justify-end items-center relative ;
    border-bottom: 1px solid #D9D9D9;
    @media screen and (max-width: 991px) {
      @apply flex-col pb-30px;
    }
    .left-col {
      @apply top-0 -left-125px absolute; 
      @media screen and (max-width: 991px) {
        @apply left-0 relative;
      }
      img {
        @apply w-385px;
        @media screen and (max-width: 991px) {
          
        }
      }
    }
    .right-col {
      @apply flex flex-col w-full max-w-425px items-start;
      @media screen and (max-width: 991px) {
        @apply max-w-full;
      }
      h1 {
        @apply font-700 text-left text-26px text-hex-0C0C0C leading-39px;
        font-family: 'Montserrat', sans-serif;
        @media screen and (max-width: 991px) {
          @apply mt-9px text-24px leading-36px;
        }
      }
      .description_1  {
        @apply font-400 mt-20px text-left text-20px leading-24px;
        font-family: 'Montserrat', sans-serif;
        @media screen and (max-width: 991px) {
          @apply mt-31px text-14px;
          line-height: 150%;
        }
      }
      .description_2 {
        @apply font-400 mt-20px text-left text-20px leading-24px;
        font-family: 'Montserrat', sans-serif;
        @media screen and (max-width: 991px) {
          @apply mt-15px text-14px;
          line-height: 150%;
        }
      }
    }
  }
  .characteristics {
    @apply flex flex-col mt-40px w-full items-start ;
    // height: auto !important;
    h3 {
      @apply font-500 text-18px ;
      font-family: 'Montserrat', sans-serif;
      @media screen and (max-width: 991px) {
        @apply font-500 text-16px;
      }
    }
    &-wrapper {
      @apply flex flex-col flex-wrap mt-20px w-full;
      @media screen and (max-width: 645px) {
        @apply flex-nowrap gap-15px;
        // height: auto !important;
        // max-height: auto !important;
      }
    }
    &-description {
      @apply flex flex-row font-400 h-30px text-16px leading-16px  w-1/2 items-center;
      @media screen and (max-width: 991px) {
        @apply h-auto font-400 text-14px;
        // height: auto !important;
      }
      @media screen and (max-width: 645px) {
        @apply w-full;
        
      }
      p {
        @apply mr-7px ;
        font-family: 'Montserrat', sans-serif;
      }
      img {
        @apply mr-7px; 
      }
      span {
        @apply;
        font-family: 'Montserrat', sans-serif;
      }
    }
  }
  .added-characteristics {
    @apply flex flex-col mt-40px w-full items-start;
    @media screen and (max-width: 991px) {
      @apply mt-30px;
    }
    h3 {
      @apply font-500 text-18px ;
      font-family: 'Montserrat', sans-serif;
      @media screen and (max-width: 991px) {
        @apply font-500 text-16px;
      }
    }
    &-wrapper {
      @apply flex flex-row mt-20px;
      @media screen and (max-width: 767px) {
        @apply flex-col mt-15px w-full items-center;
      }
      input {
        @apply rounded-16px font-400 mr-24px py-14px pl-16px text-16px text-hex-0C0C0C w-351px;
        @media screen and (max-width: 991px) {
          @apply  py-15.5px pl-16px text-14px;
        }
        @media screen and (max-width: 767px) {
          @apply mr-0 mb-15px w-full;
        }
        // border: 1px solid red;
        outline: 1px solid #D9D9D9;
        font-family: 'Montserrat', sans-serif;
        &:focus {
          // border: 1px solid black
          outline: 1px solid #3922C5;
        }
      }
    }
  }
  .confirmation {
    @apply flex flex-col mt-40px w-full items-start;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(12, 12, 12, 0.1);
    border-radius: 20px;
    @media screen and (max-width: 991px) {
      @apply mt-30px;
    }
    &-btn {
      @apply flex flex-row py-30px pl-36px gap-2.5;
      @media screen and (max-width: 991px) {
        @apply ;
      }
    }
  }
}
</style>
