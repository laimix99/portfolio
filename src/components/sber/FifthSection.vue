<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation,} from 'swiper';
import { useWindowSize } from '@vueuse/core'
import { onMounted, computed,  } from "vue";

import 'swiper/css';
import MySvg from './MySvg.vue'

const slides = [
  {
    title: 'TechTalk',
    subtitle: 'Почему мы решили переходить на R2DBC и чем это закончилось',
    description: 'Если Spring WebFlux, то Spring Data R2DBC. Часто выбор совсем нового способа реактивного взаимодействия с реляционными базами данных строится именно по такой логике. Что мы покупаем и чем платим? Какие трудности ждать? Когда это оправдано?',
    date: '15 июня, 17:45',
    img: '/images/sber/fifth-section/user-1.png',
    name: 'Руслан Тютин',
    speciality: 'Frontend Developer',
    place_of_work: 'Сбер',
  },
  {
    title: 'TechTalk',
    subtitle: 'Микросервис головного мозга',
    description: 'Было у вас такое? Увеличиваете штат разработчиков, а объем проделанной работы остается на том же уровне. А иногда от увеличения команды скорость разработки даже уменьшается. Парадокс? Почему так происходит? ',
    date: '9 июня, 18:00',
    img: '/images/sber/fifth-section/user-2.png',
    name: 'Михаил Трифонов',
    speciality: 'Lead Frontend',
    place_of_work: '',
  },
  {
    title: 'TechTalk',
    subtitle: 'Redux + Canvas = Love',
    description: 'Правильно выбранный фреймворк и чистый код - это огромный буст на старте. Нужно писать меньше кода и почти не тратить время на отладку. Typescript, Redux-Toolkit, Konva.js - почему именно их выбрал я и главное как их подружить между собой.',
    date: '8 июня, 13:00',
    img: '/images/sber/fifth-section/user-3.png',
    name: 'Антон Котов',
    speciality: 'Исполнительный директор',
    place_of_work: 'Сбер',
  },
  {
    title: 'TechTalk',
    subtitle: 'Наш опыт перехода с apache camel 2 to 3 (чо блин?)',
    description: 'Вы узнаете о том, как в команде спикера переходили с Apache Camel 2 на Camel 3. Спикер расскажет, с какими проблемами можно столкнуться при переходе.',
    date: 'будет позже',
    img: '/images/sber/fifth-section/user-4.png',
    name: 'Намыс Букаев',
    speciality: 'Руководитель разработки интеграционных решений',
    place_of_work: 'Сбер Страхование',
  },

]

const cards = [
  {img: '/images/sber/fifth-section/user-5.png', name: 'Денис Родин',speciality: 'руководитель направления' },
  {img: '/images/sber/fifth-section/user-6.png', name: 'Рустам Курамшин',speciality: 'руководитель группы backend-разработки' },
  {img: '/images/sber/fifth-section/user-7.png', name: 'Юрий Милютин',speciality: 'Ведущий разработчик' },
  {img: '/images/sber/fifth-section/user-8.png', name: 'Роман Таранов',speciality: 'руководитель направления' },
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

const { width, height } = useWindowSize()

const viewSlides = computed(() => {
  if (width.value < 767) {
    return 1;
  } else {
    return 2;
  }
})
</script>

<template>
  <div class="fifth-section">
    <div class="container">
      <div class="title">
        <h1>Программа выступлений</h1>
        <a href="">
          <span>Смотреть трансляцию</span>
        </a>
      </div>
      <button class="next">
        <MySvg
          name="next"
          fill="red"
        />
      </button>
      <button class="prev">
        <MySvg
          name="prev"
        />
      </button>
      <swiper
        :modules="[Navigation]"
        :navigation="navigation"
        :slides-per-view="viewSlides"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="swiper"
      >
        <swiper-slide
          v-for="slide in slides"
          class="slide" 
        >
          <div class="cub"></div>
          <div class="top-cub">
              <div class="green"></div>
          </div>
          <div class="bottom-cub">
              <div class="green"></div>
          </div>
          <div class="text">
            <h2>{{ slide.title }}</h2>
            <h3>{{ slide.subtitle }}</h3>
            <p>{{ slide.description }}</p>
            <a href="">
              <span>Узнать подробнее</span>
            </a>
          </div>
          <div class="the-date">{{slide.date}}</div>
          <div class="user">
            <img :src="slide.img" alt="">
            <div class="user-title">
              <h4 >{{ slide.name }}</h4>
              <h5 >{{ slide.speciality }}</h5>
              <span class="place-of-work">{{ slide.place_of_work }}</span>
            </div>
          </div>
        </swiper-slide>
        <!-- <swiper-slide class="card">
          <div class="cub"></div>
          <div class="top-cub">
            <div class="green"></div>
          </div>
          <div class="bottom-cub">
            <div class="green"></div>
          </div>
          <div class="content">
            <h2 class="card-title">Круглый стол</h2>
            <h3 class="card-description">Почему я выбрал JAVA? Как и куда расти в карьере и компетенциях?</h3>
            <div class="card-items">
              <div class="item" v-for="card in cards">
                <img class="item-user" :src="card.img" alt="">
                <div class="item-title">
                  <h4 class="item-title-name">{{ card.name }}</h4>
                  <h5 class="item-title-speciality">{{ card.speciality }}</h5>
                </div>
              </div>
              <a href="">
                <span>Узнать подробнее</span>
              </a>
              <div class="the-date">будет позже</div>
            </div>
          </div>
        </swiper-slide> -->
      </swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fifth-section {
  @apply flex flex-col items-center w-full pt-80px;
  .container {
    @apply flex flex-col items-center w-full max-w-1143px px-10px relative;
    .title {
      @apply flex flex-row items-center justify-between w-full;
      @media screen and (max-width: 767px) {
        @apply items-center justify-center;
      }
      h1 {
        @apply text-48px font-600;
        font-family: 'SB Sans Interface';
        color: #E7E7F0;
        text-shadow: 0px 0px 5px rgba(117, 223, 184, 0.6);
        @media screen and (max-width: 767px) {
          @apply text-32px;
        }
        }
      a {
        // @apply flex flex-row items-center;
        @media screen and (max-width: 767px) {
          display: none;
        }
        span {
          @apply flex flex-row items-center text-20px font-600;
          text-decoration-line: underline;
          color: #75DFB8; 
          &::after {
            content: '';
            margin-left: 7px;
            display: inline-block;
            width: 16px;
            height: 16px;
            background: #E30A21;
            box-shadow: 0px 0px 9px #FF6171;   
            border-radius: 50%;     
          }
        }
      }
    }
    .swiper {
      @apply w-full max-w-1050px mt-56px pt-150px pb-50px ;
      .slide {
        @apply flex flex-col items-start w-full max-w-548px min-h-323px pt-50px relative;
        cursor: grab;
        background: #2B9A4A;
        @media screen and (max-width: 767px) {
          @apply max-w-full;
        }
        .cub {
          @apply;
          position: absolute;
          top: 2px;
          left: 2px;
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          background: url('/images/sber/fourth-section/bg.png')center center/cover no-repeat;
        }
        .top-cub {
          position: absolute;
          top: -38px;
          
          .green {
            @apply w-260px h-40px relative z-1;
            background: #2B9A4A;
            clip-path: polygon(0 0,85% 0, 100% 100%, 0 125%, 0 125%);
            &::after {
              content: '';
              background:  url('/images/sber/fourth-section/bg.png')center center/cover no-repeat;
              position: absolute;
              width: calc(100% - 4px);
              height: calc(100% - 1px);
              top: 2px;
              left: 2px;
              z-index: 3;
              clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%, 0 100%);

            }
          }
        }
        .bottom-cub {
          position: absolute;
          bottom: -38px;
          right: 0;
          .green {
            @apply w-200px h-40px relative;
            background: #2B9A4A;
            clip-path: polygon(0 -2%, 100% -2%, 100% 100%, 15% 100%);
            &::after {
              content: '';
              background:  url('/images/sber/fourth-section/bg.png')center center/cover no-repeat;
              position: absolute;
              width: calc(100% - 4px);
              height: calc(100% - 1px);
              bottom: 2px;
              left: 2px;
              z-index: 3;
              clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
            }
          }
        }
        .text {
          @apply flex flex-col items-start px-32px absolute -top-20px;
          h2 {
            @apply text-28px font-600 z-50;
            font-family: 'SB Sans Interface';
            color: #2B9A4A;
          }
          h3 {
            @apply text-24px text-left h-62px leading-30px mt-24px  z-50;
            font-family: 'SB Sans Interface';
            color: #E7E7F0;
            @media screen and (max-width: 991px) {
              @apply text-20px leading-23px;
            }
            
          }
          p {
            @apply text-16px font-400 text-left leading-28px w-full max-w-436px mt-16px min-h-140px;
            font-family: 'SB Sans Interface';
            color: #E7E7F0;
            opacity: 0.8;
            @media screen and (max-width: 991px) {
              @apply text-16px leading-20px;
            }
            @media screen and (max-width: 767px) {
              @apply max-w-full;
            }
          }
          a {
            @apply mt-8px ;
            span {
              @apply text-15px;
              text-decoration-line: underline;
              font-family: 'SB Sans Interface';
              color: #75DFB8;
              opacity: 0.8;
            }
          } 
        }
        .the-date {
          @apply text-16px absolute right-21px -bottom-20px;
          color: #E7E7F0;
          font-family: 'SB Sans Interface';
          opacity: 0.8;
        }
        .user {
          @apply flex flex-row items-center w-full max-w-270px absolute -top-120px right-0px ;
          &::after {
            content: url('/images/sber/fifth-section/vector.png');
            position: absolute;
            top: -15px;       
            right: 0;   
          }
          @media screen and (max-width: 991px) {
            @apply w-full max-w-full;
            left: 0;
            top: -155px;
          }
          img {
            @apply w-115px h-115px z-10;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%, 0 70%);
          }
          &-title {
            @apply flex flex-col items-start pl-8px h-115px pt-5px;
            background: linear-gradient(90.34deg, rgba(109, 240, 252, 0.25) 28.39%, rgba(109, 237, 252, 0) 99.57%);
            @media screen and (max-width: 767px) {
              @apply max-w-full;
            }
            h4 {
              @apply text-17px font-700 text-left;
              color: #E7E7F0;
            }
            h5 {
              @apply text-15px font-300 mt-7px text-left;
              // font-family: 'Styrene B LC';
              font-family: 'SB Sans Interface';
              color: #E7E7F0;
              opacity: 0.8;
            }
            span {
              @apply text-15px mt-8px;
              color: #75DFB8;

            }
          }
        }
      }
      .card {
        @apply flex flex-col items-start h-327px w-548px pt-50px relative;
        background: #2B9A4A;
        .cub {
          @apply;
          position: absolute;
          top: 2px;
          left: 2px;
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          background: url('/images/sber/fourth-section/bg.png')center center/cover no-repeat;
        }
        .top-cub {
          position: absolute;
          top: -38px;
          
          .green {
            @apply w-260px h-40px relative z-1;
            background: #2B9A4A;
            clip-path: polygon(0 0,85% 0, 100% 100%, 0 106%, 0 106%);
            &::after {
              content: '';
              background:  url('/images/sber/fourth-section/bg.png')center center/cover no-repeat;
              position: absolute;
              width: calc(100% - 4px);
              height: calc(100% - 1px);
              top: 2px;
              left: 2px;
              z-index: 3;
              clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%, 0 100%);

            }
          }
        }
        .bottom-cub {
          position: absolute;
          bottom: -38px;
          right: 0;
          .green {
            @apply w-200px h-40px relative;
            background: #2B9A4A;
            clip-path: polygon(0 -2%, 100% -2%, 100% 100%, 15% 100%);
            &::after {
              content: '';
              background:  url('/images/sber/fourth-section/bg.png')center center/cover no-repeat;
              position: absolute;
              width: calc(100% - 4px);
              height: calc(100% - 1px);
              bottom: 2px;
              left: 2px;
              z-index: 3;
              clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
            }
          }
        }
        .content {
          @apply flex flex-col items-start absolute -top-30px pl-20px;
            .card-title {
            @apply text-32px font-600 z-50;
            font-family: 'SB Sans Interface';
            color: #2B9A4A;
          }
          .card-description {
            @apply text-17px font-400 leading-17px text-left mt-8px z-50;
            font-family: 'SB Sans Interface';
            color: #E7E7F0;
          }
          .card-items {
            @apply flex flex-row items-start flex-wrap mt-31px z-50;
            .item {
              @apply flex flex-row items-start mx-20px;
              width: calc(50% - 40px);
              &:nth-child(3) {
                margin-top: 5px;
              }
              &:nth-child(4) {
                margin-top: 5px;
              }
              &-user {
                // border: 1px solid red;
                // clip-path: polygon(50% 0%, 100% 0, 100% 60%, 100% 100%, 22% 100%, 0 75%, 0 0);
              }
              &-title {
                @apply flex flex-col items-start pl-16px;
                &-name {
                  @apply text-16px text-left ;
                  color: #E7E7F0;
                }
                &-speciality {
                  @apply text-13px text-left w-full max-w-120px mt-8px;
                  line-height: 130%;
                  color: #E7E7F0;
                }
              }
            }
            a {
              @apply mt-15px;
              span {
                text-decoration-line: underline;
                @apply text-15px ;
                font-family: 'SB Sans Interface';
                color: #75DFB8;
                opacity: 0.8;
              }
            }
            .the-date {
              @apply text-16px absolute right-21px -bottom-60px;
              color: #E7E7F0;
              font-family: 'SB Sans Interface';
              opacity: 0.8;
            }
          }
        }
      }
    }
    .next {
      @apply absolute right-0;
      fill: #75DFB8;
      top: 50%;
      @media screen and (max-width: 1146px) {
        display: none;
      }
    }
    .prev {
      @apply absolute left-5px;
      top: 50%;
      fill: #75DFB8;
      @media screen and (max-width: 1146px) {
        display: none;
      }
    }
  }
}
</style>
