<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation,} from 'swiper';
import { onMounted, computed,  } from "vue";
import { useWindowSize } from '@vueuse/core'

import 'swiper/css';
import ButtonMy from './ButtonMy.vue'
import Options from './Options.vue'
import MySvg from './MySvg.vue'
// import { width } from 'dom7';
const { width, height } = useWindowSize()

const viewSlides = computed(() => {
  if (width.value <= 767) {
    return 1;
  }
  if (width.value <= 991){
    return 2;
  } 
  if (width.value <= 1300 ) {
    return 1;
  } 
  else {
    return 1.5;
  }
})
// const widthSwiper = computed(() => {
//   if (width.value < 767) {
//     return 600;
//   }
//   if (width.value < 991) {
//     return 900;
//   }
//   if (width.value < 1300) {
//     return 450;
//   }
//   else {
//     return 700;
//   }
// })
const cards = [
  {
    img: 'human-1.png',
    icon: '/images/geecko/first-section/pizza.png',
    flag: '/images/geecko/first-section/ua.png',
    options: {
      position: {
        icon: 'react',
        title: 'React fronted',
        percent: '89%'
      },
      experience: {
        number: '4',
        exp_value: '40',
      },
      techs: [
        {
          title: 'React',
          img: '1',
          color: '#F9D207',
        },
        {
          title: 'JS',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'jQuery',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'Go',
          img: '2',
          color: '#E2E2E2',
        },
        {
          title: 'Python',
          img: '2',
          color: '#E2E2E2',
        },
      ],
      interviews: [
        '5'
      ]
    }
  },
  {
    img: 'human-2.png',
    icon: '',
    flag: '',
    options: {
      position: {
        icon: 'react',
        title: 'React fronted',
        percent: '89%'
      },
      experience: {
        number: '2',
        exp_value: '20',
      },
      techs: [
        {
          title: 'React',
          img: '1',
          color: '#F9D207',
        },
        {
          title: 'JS',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'jQuery',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'Go',
          img: '2',
          color: '#E2E2E2',
        },
        {
          title: 'Python',
          img: '2',
          color: '#E2E2E2',
        },
      ],
      interviews: [
        '5'
      ]
    }
  },
  {
    img: 'human-3.png',
    icon: '/images/geecko/first-section/crown.png',
    flag: '/images/geecko/first-section/kz.png',
    options: {
      position: {
        icon: 'ruby',
        title: 'Ruby backend ',
        percent: '92%'
      },
      experience: {
        number: '6',
        exp_value: '60',
      },
      techs: [
        {
          title: 'Go',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'Swift',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'Ruby',
          img: '1',
          color: '#F9D207',
        },
        {
          title: 'C++',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'JS',
          img: '2',
          color: '#E2E2E2',
        },
      ],
      interviews: [
        '4'
      ]
    }
  },
  {
    img: 'human-4.png',
    icon: '/images/geecko/first-section/cat.png',
    flag: '/images/geecko/first-section/rus.png',
    options: {
      position: {
        icon: 'python',
        title: 'Python backend',
        percent: '75%'
      },
      experience: {
        number: '3',
        exp_value: '30',
      },
      techs: [
        {
          title: 'PHP',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'Java',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'Python',
          img: '1',
          color: '#F9D207',
        },
        {
          title: 'C++',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'Ruby',
          img: '2',
          color: '#E2E2E2',
        },
        {
          title: 'Swift',
          img: '2',
          color: '#E2E2E2',
        },
      ],
      interviews: [
        '2'
      ]
    }
  },
    {
    img: 'human-5.png',
    icon: '/images/geecko/first-section/clover.png',
    flag: '/images/geecko/first-section/by.png',
    options: {
      position: {
        icon: 'ruby',
        title: 'Ruby backend ',
        percent: '92%'
      },
      experience: {
        number: '6',
        exp_value: '60',
      },
      techs: [
        {
          title: 'Go',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'Swift',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'Ruby',
          img: '1',
          color: '#F9D207',
        },
        {
          title: 'C++',
          img: '1',
          color: '#77FF49',
        },
        {
          title: 'JS',
          img: '2',
          color: '#E2E2E2',
        },
      ],
      interviews: [
        '2'
      ]
    }
  },
]
const navigation = {
  nextEl: '.next',
  prevEl: '.prev',
}

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<template>
  <div class="first-section">
    <div class="container">
      <p>Fast track to hire<br /> <span>The Best</span> engineers</p>
      <div class="content">
        <div class="left-col">
          <div class="block">
            <div class="block-title">
              <span class="block-title-bolt">Unique candidates</span> on exclusive  basis scored by Geecko completely<span class="block-title-bolt"> NEW to the US market </span>
            </div>
            <div class="block-subtitle">
              This is the opportunity of a lifetime to boost your team. Many talented Eastern European developers are looking for a job right now — and we've already scored them.
            </div>
            <div class="block-developers">
              <ButtonMy
                icon="fire"
                color="#FFD91D"
                text_color="#1A1B35"
              >
                Hire Developers
              </ButtonMy>
              <div class="block-developers-people">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="25" width="25"><path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z"/></svg>
                <span>150 employed today</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-col">
          <div class="buttons">
            <button class="next ">
              <MySvg
                name="next"
                width="30"
                height="30"
              />
            </button>
            <button class="prev">
              <MySvg
                name="prev"
                width="30"
                height="30"
              />
            </button>
          </div>
          <swiper
            :modules="[Navigation]"
            :navigation="navigation"
            :slides-per-view="viewSlides"
            :space-between="10"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="swiper"
            :style="{width: widthSwiper + 'px'}"
          >
            <swiper-slide class="slide" v-for="card in cards">
              <div 
                class="card"
                :style="{
                  background: `url('/images/geecko/first-section/${card.img}')center bottom/cover no-repeat`, 
                }"
                
              >
                <div class="decorate">
                  <img class="decorate-icon" :src="card.icon" alt="">
                  <img class="decorate-flag" :src="card.flag" alt="">
                </div>
                <Options
                  :options="card.options"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped lang="scss">
.first-section {
  @apply flex flex-col items-center w-full pt-60px;
  .container {
    @apply flex flex-col items-start w-full max-w-1300px pl-100px;
    @media screen and (max-width: 1300px) {
      @apply pl-0px;
    }
    @media screen and (max-width: 991px) {
      @apply px-26px;
    }

    p {
      @apply text-51px font-400 w-full text-left ;
      color: #9591AA;
      // border: 1px solid green;
      span {
        @apply text-black font-700 relative;
        // border-bottom: 3px solid #FFD91D;
        &::before {
          content: "";
          bottom: -1px;
          left: -20px;
          background: url('/images/geecko/first-section/line.png') center no-repeat;
          height: 5px;
          position: absolute;
          width: 100%;
        }
        &::after{
          @apply ml-10px w-40px;
          content: url('/images/geecko/first-section/cup.png');
        }
      }
    }
    .content {
      @apply flex flex-row items-center w-full h-600px -mt-40px;
      @media screen and (max-width: 991px) {
        @apply flex-col mt-0 h-full items-center px-10px;
        flex-direction: column-reverse ;
      }
      .left-col {
        @apply flex flex-col w-full max-w-800px box-border;
        background: rgba(230, 229, 226, 0.15);
        border: 0.5px solid #CCCCCC;
        border-radius: 15px;
        @media screen and (max-width: 991px) {
          @apply mt-60px;
        }
        .block {
          @apply flex flex-col w-full items-start py-40px pl-50px box-border;
          @media screen and (max-width: 767px) {
            @apply pl-10px pr-40px py-20px items-center; 
          }
          &-title {
            @apply text-28px text-left w-full max-w-465px;
            line-height: 140%;
            color: #101014;
            @media screen and (max-width: 767px) {
              @apply text-24px;
            }
            &-bolt {
              @apply font-700;
            }
          }
          &-subtitle {
            @apply text-20px text-left w-full max-w-420px mt-20px;
            line-height: 140%;
            color: #4D4E57;
            @media screen and (max-width: 767px) {
              @apply text-16px;
            }
          }
          &-developers {
            @apply mt-32px flex flex-row items-center;
            @media screen and (max-width: 767px) {
              @apply flex-col ;
            }
            &-people {
              @apply flex flex-row items-center ml-15px;
              @media screen and (max-width: 767px) {
                @apply mt-20px;
              }
              svg {
                fill: #78909C;
              }
              span {
                @apply text-14px;
                color: #78909C;
              }
            }
          }
        }

      }
      .right-col {
        @apply relative ;
        @media screen and (max-width: 991px) {
          @apply w-full h-650px mt-20px;
          // overflow: hidden;
        }
        @media screen and (max-width: 767px) {
          @apply w-300px h-500px;
        }
        .buttons {
          @apply absolute -left-80px bottom-0 flex flex-row items-center;
          flex-direction: row-reverse;
          @media screen and (max-width: 991px) {
            @apply bottom-0px left-0;
          }
          .next {

            img {
              @apply w-30px;
            }
          }
          .prev {

            img {
              @apply w-30px;
            }
          }
        }
        .swiper {
          @apply  -ml-10px flex flex-row;
          cursor: grab;
          max-width: 700px;
          @media screen and (max-width: 1300px) {
            @apply max-w-450px -ml-0;
          }
          @media screen and (max-width: 991px) {
            @apply max-w-900px;
          }
          @media screen and (max-width: 767px) {
            @apply max-w-300px;
          }
          .slide {
            @apply p-0;
            @media screen and (max-width: 767px) {
              @apply ;
              // width: 300px !important;
            }
            .card {
              @apply h-588px rounded-20px flex flex-col items-start justify-between w-full pt-40px pb-30px px-45px;
              @media screen and (max-width: 767px) {
                @apply h-450px w-300px ;
              }
              .decorate {
                @apply flex flex-row justify-between w-full ;
                &-icon {
                  @apply;
                }
                &-flag{
                  @apply w-30px h-22px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>






              