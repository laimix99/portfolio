<script setup>
import { ref, computed, reactive } from 'vue';
import { useWindowSize } from '@vueuse/core'
import MyButton from './MyBotton.vue'
import MySvg from './MySvg.vue'

const { width, height } = useWindowSize()
const showBg = computed(() => {
  if ( width.value <= 991 ) {
    return 'bg-2.png';
  } else {
    return 'bg.png';
  }
})
const itemImageKEY = computed(() => {
  if (width.value <= 991) {
    return 'img';
  }
  else {
    return 'bg'; 
  }
})
const items = [
  {bg: 'item-1.png', title: 'Пройди квиз', img: 'item-3.png'},
  {bg: 'item-2.png', title: 'Войди в ТОП-3', img: 'item-4.png'},
  {bg: 'item-2.png', title: 'Получи приз', img: 'item-4.png'},
]
</script>

<template>
  <div class="first-section">
    <div class="top-container">
      <div class="menu">
        <div class="items">
          <div 
            class="item"
            :style="{ background: `url('/images/sber/header/${item[itemImageKEY]}')center center/contain no-repeat`, }"
            v-for="item in items"
          >
            <h2>{{ item.title }}</h2>
          </div>
          <MySvg
            color="#2B9A4A"
            name="next"
            class="next-1"
          />
          <MySvg
            color="#2B9A4A"
            name="next"
            class="next-2"
          />
          <MySvg
            color="#75DFB8"
            name="down"
            width="100"
            height="100"
            class="down-1"
          />
          <MySvg
            color="#75DFB8"
            name="down"
            width="100"
            height="100"
            class="down-2"
          />
        </div>
      </div>
    </div>
    <div class="bottom-container" :style="{ background: `url('/images/sber/first-section/${showBg}')center bottom/cover no-repeat`, }">
      <div class="content">
        <h1>Узнай, насколько ты крутой эксперт!</h1>
        <h2>Ответь на вопросы и проверь, чего ты стоишь!</h2>
        <MyButton
          name="1"
          class="button"
        >
          GO
        </MyButton>
      </div>
      <img src="/images/sber/first-section/persi.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.first-section {
  @apply flex flex-col items-center   w-full;
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }
  .top-container {
    @apply flex flex-col items-start w-full max-w-1143px px-10px;
    @media screen and (max-width: 991px) {
      // @apply ;
      background: url('/images/sber/first-section/filter.svg')center center;
      background-size: 400%;
    }
    .menu {
      @apply flex flex-col items-start w-full mt-40px;
      @media screen and (max-width: 991px) {
        @apply items-center pl-50px;
      }
      .items {
        @apply flex flex-row py-19px items-start relative;
        @media screen and (max-width: 991px) {
          @apply flex-col items-center w-full pt-100px ;
          
        }
        .item {
          @apply w-183px h-47px mr-80px relative ;
          &:nth-child(1) {
            width: 216px;
            height: 50px;
            @media screen and (max-width: 991px) {
              @apply z-12;
              width: 250px;
              height: 100px;
            }
          }
          @media screen and (max-width: 991px) {
            @apply mt-35px;
            width: 220px;
            height: 100px;
            filter: drop-shadow(0px 0px 10.007px rgba(117, 223, 184, 0.6));
          }
          h2 {
            @apply text-20px leading-28px ;
            color: #E7E7F0;
            opacity: 0.8;
            font-family: 'SB Sans Interface';
            position: absolute;
            right: 32px;
            top: 10px;
            @media screen and (max-width: 991px) {
              @apply top-40px z-40 ;
            }
          }
        }
        .next-1 {
          @apply absolute;
          left: -150px;
          @media screen and (max-width: 991px) {
            display: none;
          }
        }
        .next-2 {
          @apply absolute;
          left: 110px;
          @media screen and (max-width: 991px) {
            display: none;
          }
        }
        .down-1 {
          display: none;
          @media screen and (max-width: 991px) {
            @apply absolute;
            display: inherit;
            left: -30px;
            top: 210px;
          }
        }
        .down-2 {
          display: none;
          @media screen and (max-width: 991px) {
            display: inherit;
            position: absolute;
            left: -30px;
            top: 340px;
          }
        }
      } 
    }
  }
  .bottom-container {
    @apply flex flex-col items-center w-full h-361px mt-20px relative;
    // background: url('/images/sber/first-section/bg-2.png')center center/cover no-repeat;
    
    .content {
      @apply flex flex-col items-start w-full max-w-1143px px-10px relative pb-30px; 
      @media screen and (max-width: 991px) {
        @apply items-center;
      }
      h1 {
        @apply text-42px font-600 w-full max-w-550px text-left uppercase pt-40px;
        // font-family: 'SB Sans Interface';
        color: #FFFFFF;
        text-shadow: 0px 0px 5px rgba(117, 223, 184, 0.6);
        line-height: 140%;
        @media screen and (max-width: 991px) {
          @apply text-center;
        }
        @media screen and (max-width: 767px) {
          @apply text-32px w-full max-w-233px;
        }
      }
      h2 {
        @apply text-20px font-400 leading-28px mt-8px mb-32px;
        color: #FFFFFF;
        text-shadow: 0px 0px 5px rgba(117, 223, 184, 0.6);
        @media screen and (max-width: 991px) {
          @apply absolute w-full max-w-254px text-16px leading-28px;
          bottom: -350px;
          left: 50%;
          transform: translate(-50%);
          color: #FFFFFF;
          opacity: 0.5;
        }
      }
      .button {
        @media screen and (max-width: 991px) {
          @apply absolute;
          bottom: -250px;
          left: 50%;
          transform: translate(-50%);
        }
      }
    }
    img {
      @apply absolute ;
      left: 55%;
      bottom: 0;
      @media screen and (max-width: 991px) {
        @apply w-140px;
        left: 10%;
      }
    }
  }
}

</style>
